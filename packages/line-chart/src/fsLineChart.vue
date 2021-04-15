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
import { staticOptions, extraOptions, showAxisPointer, showTitle } from './config';
export default {
	name: 'fsLineChart',
	props: {
		transCategoryAxis: { type: Boolean },
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
			showAxisPointer,
			showTitle,
			titleObj: this.title,
			currentCategoryAxis: 'xAxis',
			chartOption: JSON.parse(JSON.stringify(staticOptions)),
		};
	},

	mounted() {
		this.myEcharts = echarts.init(this.$refs.container, 'chalk');
		this.myEcharts.setOption(this.chartOption, true);
		this.handlerCategoryXY();
		this.showAxisPointer();
		this.initOption();
	},

	beforeDestroy() {
		this.myEcharts.clear();
		this.myEcharts.dispose();
	},

	methods: {
		/*处理类目轴的位置*/
		handlerCategoryXY() {
			if (this.transCategoryAxis) this.currentCategoryAxis = 'yAxis';
			this.chartOption[this.currentCategoryAxis] = Object.assign(
				{ type: 'category', data: this.chartData.row },
				this.chartOption[this.currentCategoryAxis]
			);
			this.chartOption.series = this.chartData.column;
		},

		initOption() {
			if (this.titleObj) this.showTitle();
		},
	},

	watch: {
		chartData: {
			handler: function(val) {
				this.$set(this.chartOption, this.currentCategoryAxis, { type: 'category', data: val.row });
				this.$set(this.chartOption, 'series', val.column);
				if (val.title) this.titleObj = val.title;
				console.log(val.title);
			},
			deep: true,
			immediate: true,
		},

		chartOption: {
			handler: function(val) {
				this.myEcharts.setOption(val, true);
			},
			deep: true,
		},

		transCategoryAxis: {
			handler: function(val) {
				if (val) {
					this.currentCategoryAxis = 'yAxis';
					this.$set(this.chartOption, this.currentCategoryAxis, { type: 'category', data: val.row });
				}
			},
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
<style lang="scss"></style>
