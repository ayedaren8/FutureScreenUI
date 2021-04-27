<template>
	<div class="fsVideoPlayer" controls>
		<div class="fsVideoPlayer-title">实时监控</div>
		<video :src="src" class="fsVideoPlayer-container"></video>
	</div>
</template>

<script>
export default {
	props: {
		src: { type: String },
	},
	name: 'fsVideoPlayer',
	data() {},
};
</script>
