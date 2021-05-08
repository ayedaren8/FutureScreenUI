<template>
	<div>
		<fs-title></fs-title>
		<fs-status-label :position="[66, 10]" :status="[1, 1, 1]"></fs-status-label>
		<div class="mainFrame">
			<fs-panel>
				<span class="sidePanel-line--left"></span>
				<fs-line-chart ref="test" :chartData="barData" :title="{ text: '标题', subtext: '副标题' }"></fs-line-chart>
				<fs-line-chart :chartData="lineData" :height="200"></fs-line-chart>
				<fs-pie-chart :chartData="pieData" transCategoryAxis></fs-pie-chart>
			</fs-panel>
			<fs-panel>
				<fs-card><fs-digital-block v-bind="digitalData[0]"/><fs-digital-block v-bind="digitalData[1]"/></fs-card>
				<fs-card><fs-list :listHeader="tableData.headData" :listData="tableData.rowData"></fs-list></fs-card>
				<fs-card
					><fs-video-player
						src="https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4"
					></fs-video-player
				></fs-card>
			</fs-panel>
			<fs-key-visual><amap /></fs-key-visual>
		</div>
		<fs-marquee />
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
			tableData: mockData.tableData(),
			digitalData: mockData.digitalData(),
		};
	},
	mounted() {
		setInterval(
			function() {
				this.barData = mockData.barData();
				this.pieData = mockData.pieData();
				this.lineData = mockData.lineData();
				this.digitalData = mockData.digitalData();
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
