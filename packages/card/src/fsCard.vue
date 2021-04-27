<template>
	<div class="fsCard"><slot /></div>
</template>

<script>
export default {
	name: 'fsCard',
	data() {
		return {
			titleText: '智慧校园监控大屏',
		};
	},
};
</script>
