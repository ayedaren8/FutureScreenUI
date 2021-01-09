<template>
  <div class="fsButton" :class="`fsButton--${type}`">
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
};
</script>