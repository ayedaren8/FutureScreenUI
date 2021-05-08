<template>
	<div :style="{ width: `${width}px` }" class="fsPanel">
		<span></span><span></span><span></span><span></span><slot />
	</div>
</template>

<script>
export default {
	name: 'fsPanel',
	props: { width: { type: Number } },
	data() {
		return {
			// titleText: '智慧校园监控大屏',
		};
	},
};
</script>
