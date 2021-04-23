<template>
	<div class="fstitle">
		<div class="fstitle-container">
			<span class="fstitle-line--right"></span>
			<span class="fstitle-text">{{ titleText }}</span>
			<span class="fstitle-line--left"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'fsScrollInfoBar',
	data() {
		return {
			titleText: '智慧校园监控大屏',
		};
	},
};
</script>
