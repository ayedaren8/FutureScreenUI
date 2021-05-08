# 饼图
<template>
	<fs-pie-chart :chartData="pieData" transCategoryAxis></fs-pie-chart>
</template>

<script>
import * as mockData from './mockData';
export default {
	data() {
		return {
			pieData: mockData.pieData(),
		};
	},
	mounted() {
		setInterval(
			function() {
				this.pieData = mockData.pieData();
			}.bind(this),
			3500
		);
	},
};
</script>
