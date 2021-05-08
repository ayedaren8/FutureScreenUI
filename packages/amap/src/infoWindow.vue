<template>
	<div class="">
		<fs-panel :width="500">
			<fs-card>
				<div class="infowindow-header">
					<span class="infowindow-title">{{ title }}</span>
					<div class="infowindow-icon" @click="_cancel">
						<svg t="1618278577376" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1142">
							<path
								d="M842.947458 778.116917 576.847937 512.013303 842.946434 245.883083c8.67559-8.674567 13.447267-20.208251 13.43908-32.477692-0.008186-12.232602-4.7727-23.715121-13.414521-32.332383-8.655124-8.677637-20.149922-13.450337-32.384571-13.4575-12.286838 0-23.808242 4.771677-32.474622 13.434987L512.019443 447.143876 245.88206 181.050496c-8.66331-8.66331-20.175505-13.434987-32.416294-13.434987-12.239765 0-23.75196 4.770653-32.414247 13.43294-8.66024 8.636704-13.428847 20.12434-13.437034 32.356942-0.008186 12.269441 4.76349 23.803125 13.437034 32.476669l266.135336 266.13022L181.050496 778.11794c-8.664334 8.66331-13.43601 20.173458-13.43601 32.41527 0 12.239765 4.7727 23.752983 13.437034 32.417317 8.662287 8.66331 20.173458 13.43294 32.413224 13.43294 12.240789 0 23.754007-4.770653 32.416294-13.43294l266.134313-266.100544 266.101567 266.100544c8.66331 8.66331 20.185738 13.43294 32.4429 13.43294 12.265348-0.008186 23.74889-4.771677 32.369222-13.412474C860.81643 825.081555 860.821547 795.991006 842.947458 778.116917z"
								p-id="1143"
							></path>
						</svg>
					</div>
				</div>
			</fs-card>
			<fs-card>
				<div class="infowindow-body">
					<fs-digital-block v-bind="{ name: '发热人数', number: extData[0], unit: '人' }"></fs-digital-block>
					<fs-digital-block v-bind="{ name: '昨日未归', number: extData[1], unit: '人' }"></fs-digital-block>
					<fs-digital-block
						v-bind="{
							name: '电力负载',
							number: extData[2],
							unit: 'kw',
						}"
						:status="extData[3]"
						@rules="statusRules"
					></fs-digital-block>
				</div>
			</fs-card>
		</fs-panel>
	</div>
</template>

<script>
import fsCard from '../../card/index';
import fsDigitalBlock from '../../digital-block/index';
export default {
	comments: { fsCard, fsDigitalBlock },
	data() {
		return {
			title: null,
			status: null,
			extData: null,
		};
	},
	methods: {
		_cancel() {
			if (typeof this.onClose === 'function') {
				this.onClose();
				this.$destroy();
			}
		},
		statusRules(val) {
			if (val > 8000) {
				this.status = 'danger';
			}
		},
	},
	created() {
		this.title = this.target.w.title;
		this.extData = this.target.w.extData;
	},
	mounted() {
		console.log(this);
	},
	destroyed() {
		console.log('destroyed');
	},
};
</script>

<style lang="scss" scoped>
.infowindow {
	&-icon {
		display: inline-block;
		width: 24px;
		height: 24px;
		fill: orange;
	}
	&-header {
		display: flex;

		margin: 8px 8px;
		justify-content: space-between;
		height: 24px;
	}
	&-title {
		display: inline-block;
		line-height: 24px;
		height: 24px;
		color: #fff;
	}
}
</style>
