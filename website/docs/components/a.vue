<template>
	<div class="container">
		<div
			class="box"
			v-for="(item, index) in colorList"
			:key="index"
		></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			colorList: [
				'#000510',
				'#68bac9',
				'#ff0022',
				'#0acc78',
				'#2ed13d',
				'#bb8c0f',
				'#b20000',
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
}
</style>
