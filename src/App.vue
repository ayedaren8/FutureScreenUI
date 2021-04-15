<template>
	<div class="mainFrame">
		<div class="sidePanel">
			<span class="sidePanel-line--left"></span>
			<fs-line-chart ref="test" :chartData="mydata" :title="{ text: '标题', subtext: '副标题' }"></fs-line-chart>
			<fs-line-chart :chartData="mydata"></fs-line-chart>
			<fs-line-chart :chartData="mydata" transCategoryAxis title="标题"></fs-line-chart>
		</div>
		<div class="sidePanel">
			<!-- <span class="sidePanel-line--left"></span> -->
			<fs-line-chart :chartData="mydata" transCategoryAxis></fs-line-chart>
			<fs-line-chart :chartData="mydata" transCategoryAxis></fs-line-chart>
			<fs-line-chart :chartData="mydata" transCategoryAxis></fs-line-chart>
		</div>
		<fs-key-visual><amap /></fs-key-visual>
	</div>
</template>
<script>
import { chartData } from './mockData';
export default {
	data() {
		return {
			mydata: null,
		};
	},
	mounted() {
		setInterval(() => {
			this.mydata = chartData();
		}, 5000);
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
