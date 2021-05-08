# 数字块
<template>
	<fs-card><fs-digital-block v-bind="digitalData[0]"/><fs-digital-block v-bind="digitalData[1]"/></fs-card>
</template>

<script>
import * as mockData from './mockData';
export default {
	data() {
		return {
			digitalData: mockData.digitalData(),
		};
	},
	mounted() {
		setInterval(
			function() {
				this.digitalData = mockData.digitalData();
			}.bind(this),
			3500
		);
	},
};
</script>
