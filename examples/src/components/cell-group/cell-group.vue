<template>
  <div class="i-cell-group" :class="iClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    iClass: {
      type: String,
      default: ''
    }
  }
}
</script>
