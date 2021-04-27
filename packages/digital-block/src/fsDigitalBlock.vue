<template>
	<div class="fsDigitalBlock">
		<div class="fsDigitalBlock-digital">
			<span>{{ number || 999999 }}</span
			><span class="fsDigitalBlock-unit">{{ unit || '个' }}</span>
		</div>
		<div class="fsDigitalBlock-name">
			<span>{{ name || '数据项' }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'fsDigitalBlock',
	props: {
		name: { type: String },
		number: { type: Number },
		unit: { type: String },
	},
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped></style>
