<template>
	<div>
		<div
			:ref="id"
			class="fsChart-container"
			:style="
				`width: ${chartWidth}px; height:${chartHeight}px`
			"
		></div>
	</div>
</template>
<script>
import * as echarts from 'echarts';
import './chalk';
import {
	chartDefaultWidth,
	chartDefaultHeight,
} from '../../constants';
//本地自定义样式
const {
	staticOptions,
	extraOptions,
	showTitle,
} = require('./config');
export default {
	name: 'fsPieChart',
	props: {
		chartData: { type: [Array, Object] },
		title: { type: [String, Object] },
		width: { type: [Number] },
		height: { type: [Number] },
		ring: { type: Boolean, default: false },
	},
	data() {
		return {
			id: 'container' + Math.ceil(Math.random() * 1000),
			chartWidth: this.width || chartDefaultWidth,
			chartHeight: this.height || chartDefaultHeight,
			myEcharts: null,
			extraOptions: JSON.parse(
				JSON.stringify(extraOptions)
			),
			showTitle,
			titleObj: this.title,
			chartOption: JSON.parse(
				JSON.stringify(staticOptions)
			),
		};
	},

	mounted() {
		this.myEcharts = echarts.init(
			this.$refs[this.id],
			'chalk'
		);
		this.myEcharts.setOption(this.chartOption, true);
		this.initOption();
	},

	beforeDestroy() {
		this.myEcharts.clear();
		this.myEcharts.dispose();
	},

	methods: {
		initOption() {
			if (this.titleObj) this.showTitle();
		},
	},

	watch: {
		chartData: {
			handler: function(val) {
				this.$set(
					this.chartOption.series[0],
					'data',
					val.data
				);
				if (val.title) this.titleObj = val.title;
			},
			deep: true,
			immediate: true,
		},

		chartOption: {
			handler: function(val) {
				this.myEcharts.setOption(val, true);
			},
			deep: true,
			// immediate: true,
		},
		ring: {
			handler: function(val) {
				if (val) {
					this.$set(this.chartOption.series[0], 'radius', [
						'50%',
						'75%',
					]);
				}
			},
			immediate: true,
		},
		titleObj: {
			handler: function() {
				this.showTitle();
			},
			deep: true,
			immediate: true,
		},
	},
};
</script>
