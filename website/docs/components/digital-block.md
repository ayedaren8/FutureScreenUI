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

### 状态
通过传入不同的status参数设置数字块状态。

<template>
	<fs-card>
	<fs-digital-block v-bind="{
	name: '正常状态',
	unit: '人',
	number: 123456,
}"/>
	<fs-digital-block v-bind="{
	name: '危险状态',
	unit: '人',
	number: 123456,
	status:'danger'
}"/><fs-digital-block v-bind="{
	name: '警告状态',
	unit: '人',
	number: 123456,
	status:'warning'
}"/>
</fs-card>
</template>

### 参数

| 参数   | 说明       | 类型   | 可选值                |
| ------ | ---------- | ------ | --------------------- |
| name   | 数字块名称 | String | custom                |
| number | 数字块数值 | Number | custom                |
| unit   | 数字块单位 | String | custom                |
| status | 数字块状态 | String | normal,danger,warning |


### 传递参数
你可以通过在组件上单独传递每个参数，也可以通过V-bind传递一个对象；
例如：
``` js
{
	name: '校内人员总数',
	unit: '人',
	number: 123456,
	status:'danger'
}
```



``` html
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

```