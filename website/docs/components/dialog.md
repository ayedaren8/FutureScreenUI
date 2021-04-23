# 对话框
<template>
	<fs-button type='light' @click="show">show</fs-button>
</template>

<script>
export default {
	mounted() {},
	methods: {
		show() {
			this.$Dialog({
				title: '温馨提示',
				text: '为了更好的使用大屏请使用全屏，点击确定使用。',
				onConfirm() {},
			});
		},
	},
};
</script>
