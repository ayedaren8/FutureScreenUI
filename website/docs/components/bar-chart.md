### 柱状图
<template><div>
		<fs-line-chart :chartData="myData"></fs-line-chart></div>
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
			myData1: {
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

### 参数

| 参数              | 说明           | 类型           | 默认值 |
| ----------------- | -------------- | -------------- | ------ |
| transCategoryAxis | 是否旋转坐标轴 | boolean        | false  |
| chartData         | 图表数据       | Array, Object  | -      |
| title             | 标题           | String, Object | -      |
| width             | 表格宽度       | Number         | 400    |
| heigh             | 表格高度       | Number         | 300    |


### 数据对象
关于chartData的定义

```js
//chartData
{
	title: { text: '校内各楼宇人员数量', subtext: '统计时间：2021年4月5日' },
	//标题
	row: ['天仪楼', '承基楼', '文德楼', '操场', '长庚楼', '体育馆', '餐厅'],
	//类目数据
	column: [
		{
			name: '2017',
			//维度名
			data: [150, 230, 224, 218, 135, 147, 260],
			//单个维度数据
			type: 'bar',
			//类型数据
		},
	],
	//数据轴数据集
}

```


### 旋转坐标轴

图表默认 y 轴为类目轴，可通过 props 的值设置
transCategoryAxis 的值设置是否转换类目轴为 x 轴；例如：

<template>
	<div>
		<fs-line-chart  transCategoryAxis :chartData="myData"></fs-line-chart></div>
</template>

### 自定义尺寸

给图表设置宽度，例如宽度 600;

<template>
<div><fs-line-chart :width='600' transCategoryAxis :chartData="myData"></fs-line-chart></div>
</template>

```html
<template>
	<div>
		<fs-line-chart
			:width="600"
			transCategoryAxis
			:chartData="myData"
		>
		</fs-line-chart>
	</div>
</template>
```

给图表设置高度，例如宽度 600;

<template><div>
<fs-line-chart :height='600' :chartData="myData"></fs-line-chart>
</div> </template>

```html
<template>
	<div>
		<fs-line-chart
			:height="600"
			transCategoryAxis
			:chartData="myData"
		>
		</fs-line-chart>
	</div>
</template>
```

### 自定义标题
图表可进行自定义标题;
::: danger 优先级警告⚠️
图表数据的tittle字段的优先级要大于自定义标题的字段,这意味着可以从接口中动态获取标题而不是写死。
:::

<template> <div><fs-line-chart :title='{text:"自定义主标题",subtext:"自定义副标题"}' :chartData="myData1"></fs-line-chart></div>
</template>

```html
<template>
	<div>
		<fs-line-chart
			:title='{text:"自定义主标题",subtext:"自定义副标题"}'
			:chartData="myData1"
		>
		</fs-line-chart>
	</div>
</template>
```
