<template>
  <div class="i-sticky" :class="iClass">
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

