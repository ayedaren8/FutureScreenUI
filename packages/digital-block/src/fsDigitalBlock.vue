<template>
	<div class="fsDigitalBlock">
		<div class="fsDigitalBlock-digital">
			<div v-for="(num, index) in numArr" :key="index" class="fsDigitalBlock-numberBox">
				<span
					:style="{
						transform: `translate(-50%,-${Number(num) * 10}%)`,
						color: status ? color[status] : color['normal'],
					}"
					>0123456789</span
				>
			</div>
			<span class="fsDigitalBlock-unit">{{ unit || '个' }}</span>
		</div>
		<div class="fsDigitalBlock-name">
			<span>{{ name || '数据项' }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'fsDigitalBlock',
	props: {
		name: { type: String },
		number: { type: Number },
		unit: { type: String },
		status: { type: String },
	},
	data() {
		return {
			color: {
				normal: 'rgba(255,255,255,0.87)',
				warning: '#fac500',
				danger: '#ff2700',
			},
		};
	},
	mounted() {},
	computed: {
		numArr: function() {
			return String(this.number).split('');
		},
	},
	methods: {},
};
</script>
<style lang="scss" scoped></style>
