# 列表
<template>
	<fs-card style='width:400px'><fs-list :listHeader="tableData.headData" :listData="tableData.rowData"></fs-list></fs-card>
</template>

<script>
import * as mockData from './mockData';
export default {
	data() {
		return {
			
			tableData: mockData.tableData(),

		};
	}
};
</script>