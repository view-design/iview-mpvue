<template>
  <div class="i-avatar" :class="[iClass, 'i-avatar-' + shape, 'i-avatar-' + size, src ? 'i-avatar-image' : '']">
    <image :src="src" v-if="src"></image>
    <div class="i-avatar-string" v-else><slot></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    shape: {
      type: String,
      default: 'circle'
    },
    size: {
      type: String,
      default: 'default'
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
