<template>
	<div class="fsKeyVisual-container">
		<slot
			><div class="fsKeyVisual-container-placeholder"><span>请在key-visual组件中插入主视觉内容</span></div></slot
		>
	</div>
</template>
<script>
export default {
	name: 'fsKeyVisual',
	data() {
		return {};
	},
	mounted() {},
};
</script>
<style lang="scss">
.fsKeyVisual-container {
	position: absolute;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: flex-end;
	&-placeholder {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
		color: rgba($color: #fff, $alpha: 0.6);
		font-size: 40px;
		span {
			text-align: center;
		}
	}
}
</style>
