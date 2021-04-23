<template>
	<div>
		<div ref="container" class="fsChart-container" :style="`width: ${chartWidth}px; height:${chartHeight}px`"></div>
	</div>
</template>
<script>
import * as echarts from 'echarts';
import './chalk';
import { chartDefaultWidth, chartDefaultHeight } from '../../constants';
//本地自定义样式
import { staticOptions, extraOptions, showTitle } from './config';
export default {
	name: 'fsPieChart',
	props: {
		chartData: { type: [Array, Object] },
		title: { type: [String, Object] },
		width: { type: [Number] },
		height: { type: [Number] },
	},

	data() {
		return {
			chartWidth: this.width || chartDefaultWidth,
			chartHeight: this.height || chartDefaultHeight,
			myEcharts: null,
			extraOptions,
			showTitle,
			titleObj: this.title,
			chartOption: JSON.parse(JSON.stringify(staticOptions)),
		};
	},

	mounted() {
		this.myEcharts = echarts.init(this.$refs.container, 'chalk');
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
				this.$set(this.chartOption.series[0], 'data', val.data);
				// console.log(this.chartOption.series);

				if (val.title) this.titleObj = val.title;
				// console.log(val);
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
