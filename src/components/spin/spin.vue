<template>
  <div class="i-spin"
    :class="[iClass, fix ? 'i-spin-fix' : '', 'i-spin-' + size, custom ? 'i-spin-show-text' : '', fullscreen ? 'i-spin-fullscreen' : '']">
    <div class="i-spin-main">
      <div class="i-spin-dot"></div>
      <div class="i-spin-text"><slot></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    iClass: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    fix: {
      type: Boolean,
      default: false,
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Boolean,
      default: false
    }
  }
}
</script>

