<template>
  <div class="fsButton" :class="`fsButton--${type}`" @click="_click">
    <span>
      <slot>按钮</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "fsButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    _click() {
      this.$emit("click");
    },
  },
};
</script>