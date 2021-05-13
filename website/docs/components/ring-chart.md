# 环形图

::: tip 让一切简单化
无需纠结圆环内外径，在`<fs-pie-chart />`组件加上ring！
一切就全都搞定！
:::
<template>
	<fs-pie-chart ring :chartData="pieData" transCategoryAxis></fs-pie-chart>
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



### 参数

| 参数      | 说明         | 类型           | 默认值 |
| --------- | ------------ | -------------- | ------ |
| chartData | 图表数据     | Array, Object  | -      |
| title     | 标题         | String, Object | -      |
| width     | 表格宽度     | Number         | 400    |
| heigh     | 表格高度     | Number         | 300    |
| ring      | 是否显示圆环 | Boolean        | false  |

### 数据对象
关于chartData的定义

```js
//chartData
{
	title: { text: '校内各楼宇人员数量', subtext: '统计时间：2021年4月5日' },
	//类目数据
	data:[{
		value:100,
		name:'A'
	},{
		value:200,
		name:'B'
	},
	{
		value:300,
		name:'C'
	},
	{
		value:400,
		name:'D'
	}]
	
	//数据轴数据集
}

```


### 自定义标题
图表可进行自定义标题;
::: danger 优先级警告⚠️
图表数据的tittle字段的优先级要大于自定义标题的字段,这意味着可以从接口中动态获取标题而不是写死。
:::

<template> <div><fs-pie-chart ring  :title='{text:"自定义主标题",subtext:"自定义副标题"}' :chartData="{data:[{
		value:100, 
		name:'A'
	},{
		value:200,
		name:'B'
	},
	{
		value:300,
		name:'C'
	},
	{
		value:400,
		name:'D'
	}]}"></fs-pie-chart></div>
</template>

```html
<template>
	<div>
		<fs-pie-chart
			ring
			:title='{text:"自定义主标题",subtext:"自定义副标题"}'
			:chartData="pieData"
		>
		</fs-p-chart>
	</div>
</template>
```