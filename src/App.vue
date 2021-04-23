<template>
	<div>
		<fs-title></fs-title>
		<div class="mainFrame">
			<div class="sidePanel">
				<span class="sidePanel-line--left"></span>
				<fs-line-chart ref="test" :chartData="barData" :title="{ text: '标题', subtext: '副标题' }"></fs-line-chart>
				<fs-line-chart :chartData="lineData"></fs-line-chart>
				<fs-line-chart :chartData="lineData" transCategoryAxis></fs-line-chart>
			</div>
			<div class="sidePanel">
				<!-- <span class="sidePanel-line--left"></span> -->
				<fs-pie-chart :chartData="pieData" transCategoryAxis></fs-pie-chart>
				<fs-line-chart :chartData="barData" transCategoryAxis></fs-line-chart>
				<!-- <fs-line-chart :chartData="barData" transCategoryAxis></fs-line-chart> -->
			</div>
			<fs-key-visual><amap /></fs-key-visual>
		</div>
	</div>
</template>
<script>
import * as mockData from './mockData';
export default {
	data() {
		return {
			barData: mockData.barData(),
			pieData: mockData.pieData(),
			lineData: mockData.lineData(),
		};
	},
	mounted() {
		setInterval(
			function() {
				this.barData = mockData.barData();
				this.pieData = mockData.pieData();
				this.lineData = mockData.lineData();
				console.log(this.lineData);
			}.bind(this),
			3500
		);
		this.$Dialog({
			title: '温馨提示',
			text: '为了更好的使用大屏请使用全屏，点击确定使用。',
			onConfirm() {
				this.$fullscreen();
			},
		});
		console.log(window.AMap);
	},
	methods: {},
};
</script>
<style lang="scss">
body {
	background: rgba(0, 5, 15, 1);
}
</style>
