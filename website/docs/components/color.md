# 色彩

<template>
	<div class="container">
		<div
			class="box"
			v-for="(item, index) in colorList"
			:key="index"
			:style="{
				backgroundColor:item.color
			}"
		>
		{{item.color}}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			colorList: [
				{ color:'#000510',
				name:'主要的背景颜色值'},
				{ color:'#68bac9',
				name:'线条颜色值'},
				{ color:'#ff0022',
				name:'邻近色'},
				{ color:'#0acc78',
				name:'对比色'},
				{ color:'#2ed13d',
				name:'正常状态色'},
				{ color:'#bb8c0f',
				name:'警告状态色'},
				{ color:'#b20000',
				name:'错误状态色'},
			],
		};
	},
};
</script>

<style>
.container {
	display: flex;
	flex-wrap: wrap;
	
}
.box {
	display: inline-block;
	width:100px;
	height:100px;
	margin:10px;
	border:1px solid white;
	text-align:center;
	line-height:50px
}
</style>
