<template>
	<div
		class="fsStatusLabel"
		:style="{
			left: `${
				typeof position[0] === 'number'
					? position[0] + '%'
					: null || typeof position.x === 'number'
					? position.x + 'px'
					: null
			}`,
			top: `${
				typeof position[1] === 'number'
					? position[1] + '%'
					: null || (position && typeof position.y === 'number')
					? position.y + 'px'
					: null
			}`,
		}"
	>
		<div v-if="status[0] || 0" class="fsStatusLabel-label">
			<span class="fsStatusLabel-point" :class="classobj[0]">正常</span>
		</div>
		<div v-if="status[1] || 0" class="fsStatusLabel-label">
			<span class="fsStatusLabel-point" :class="classobj[1]">警告</span>
		</div>
		<div v-if="status[2] || 0" class="fsStatusLabel-label">
			<span class="fsStatusLabel-point" :class="classobj[2]">危险</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'fsStatusLabel',
	props: {
		position: {
			type: [Array, Object],
			default() {
				return [10, 65];
			},
		},
		status: {
			type: Array,
			default() {
				return [1, 1, 1];
			},
		},
	},
	data() {
		return {
			classobj: [
				{ 'fsStatusLabel-point--normal': true },
				{ 'fsStatusLabel-point--warning': true },
				{ 'fsStatusLabel-point--danger': true },
			],
		};
	},
};
</script>
