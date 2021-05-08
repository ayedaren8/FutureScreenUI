<template>
	<div class="fsButton" :style="style" :class="`fsButton--${type} `" @click="_click">
		<span>
			<slot>按钮</slot>
		</span>
	</div>
</template>

<script>
export default {
	name: 'fsButton',
	props: {
		type: {
			type: String,
			default: 'primary',
		},
		color: {
			type: String,
		},
		//毕设时间原因 这块的简单逻辑省略
		size: { type: String, default: 'middle' },
	},
	data() {
		return {
			style: {},
		};
	},
	methods: {
		_click() {
			this.$emit('click');
		},
	},
	watch: {
		color: {
			handler: function(val) {
				this.style['backgroundColor'] = val;
			},
		},
	},
};
</script>
