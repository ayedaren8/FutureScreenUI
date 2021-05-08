<template>
	<div class="fsVideoPlayer">
		<div class="fsVideoPlayer-title"><span>实时监控</span></div>
		<video :src="src" class="fsVideoPlayer-container" loop autoplay="false"></video>
	</div>
</template>

<script>
export default {
	props: {
		src: { type: String },
	},
	name: 'fsVideoPlayer',
};
</script>
