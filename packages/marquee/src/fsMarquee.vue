<template>
	<div class="fsMarquee">
		<div class="fsMarquee-content"><slot>这有一条通知</slot></div>
	</div>
</template>

<script>
export default {
	name: 'fsMarquee',
	data() {
		return {
			titleText: '智慧校园监控大屏',
		};
	},
};
</script>
