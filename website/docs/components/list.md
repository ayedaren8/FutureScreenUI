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

### 参数

| 参数       | 说明     | 类型  | 可选值 |
| ---------- | -------- | ----- | ------ |
| listHeader | 表头     | Array | custom |
| listData   | 表体数据 | Array | custom |

### 例如

``` js
export function tableData() {
	let headData = ['事件', '时间'];
	let listData = [
		['天仪楼8楼消防栓老化，存在漏水现象', new Date().toLocaleTimeString()],
		['承基楼2号电梯发生故障，请及时处理', new Date().toLocaleTimeString()],
		['天水路有校外车辆超速行驶', new Date().toLocaleTimeString()],
		['图书馆四层书库湿度超标', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
	];
	return {
		headData,
		listData,
	};
}
```
