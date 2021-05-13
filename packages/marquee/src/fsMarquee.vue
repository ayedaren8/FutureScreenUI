<template>
	<div class="fsMarquee">
		<div class="fsMarquee-content">
			<slot>{{ message }}</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'fsMarquee',
	props: {
		message: {
			type: String,
			default: '这有一条通知',
		},
	},
	data() {
		return {};
	},
};
</script>
