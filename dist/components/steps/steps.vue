<template>
  <div class="i-step" :class="classObj">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    iClass: {
      type: String,
      default: ''
    },
    current: {
      type: Number,
      default: -1
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    classObj() {
      let flexClass = this.direction === 'horizontal' ? 'i-steps-flex' : ''
      return flexClass + ' ' + this.iClass
    } 
  }
}
</script>
