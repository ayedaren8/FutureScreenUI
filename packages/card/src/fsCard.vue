<template>
	<div :style="{ width: `${width}px` }" class="fsCard"><slot /></div>
</template>

<script>
export default {
	name: 'fsCard',
	props: { width: { type: Number } },
	data() {
		return {
			titleText: '智慧校园监控大屏',
		};
	},
};
</script>
