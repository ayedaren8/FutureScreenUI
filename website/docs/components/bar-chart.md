
### 柱状图


<template>
	<div>
		<fs-line-chart :chartData="myData"></fs-line-chart>
	</div>
</template>

<script>
export default {
	data() {
		return {
			myData: {
				title: { text: '校内各楼宇人员数量', subtext: '统计时间：2021年4月5日' },
				row: ['天仪楼', '承基楼', '文德楼', '操场', '长庚楼', '体育馆', '餐厅'],
	
				column: [
					{
						name: '2017',
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'bar',
					},
				],
			},
		};
	},
};
</script>

<style></style>