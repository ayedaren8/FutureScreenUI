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
import {
	staticOptions,
	extraOptions,
	showAxisPointer,
	showTitle,
} from './config';
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
			extraOptions: JSON.parse(
				JSON.stringify(extraOptions)
			),
			showAxisPointer,
			showTitle,
			id: 'container' + Math.ceil(Math.random() * 1000),
			titleObj: this.title,
			currentCategoryAxis: 'xAxis',
			currentValueAxis: 'yAxis',
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
			if (this.transCategoryAxis) {
				[
					this.currentCategoryAxis,
					this.currentValueAxis,
				] = [
					this.currentValueAxis,
					this.currentCategoryAxis,
				];
			}
			this.chartOption[
				this.currentCategoryAxis
			] = Object.assign(
				{},
				this.chartOption[this.currentCategoryAxis],
				{
					type: 'category',
					data: null,
				}
			);
			this.chartOption[this.currentValueAxis].type =
				'value';
		},
		initOption() {
			if (this.chartData) {
				this.$set(
					this.chartOption,
					this.currentCategoryAxis,
					{
						type: 'category',
						data: this.chartData.row,
					}
				);
				this.$set(
					this.chartOption,
					'series',
					this.chartData.column
				);
				if (this.chartData.title)
					this.titleObj = this.chartData.title;
			}
			if (this.titleObj) this.showTitle(this.titleObj);
		},
	},

	watch: {
		chartData: {
			handler: function(val) {
				if (!val) return;
				this.$set(
					this.chartOption,
					this.currentCategoryAxis,
					{
						type: 'category',
						data: val.row,
					}
				);
				this.$set(this.chartOption, 'series', val.column);
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
		},
		transCategoryAxis: {
			handler: function() {
				this.handlerCategoryXY();
			},
		},
		titleObj: {
			handler: function(val) {
				if (!val) {
					return;
				}
				this.showTitle(val);
			},
			deep: true,
			immediate: true,
		},
	},
};
</script>
<style lang="scss"></style>
