<template>
  <div class="i-collapse" :class="iClass">
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
    name: {
      type: String,
      default: ''
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: ''
    }
  },
  mounted() {
    this.currentValue = this.name
  },
  methods: {
    _accordionUpdate(opts) {
      this.currentValue = opts.name ? opts.name : this.currentValue
      const _children = this.$children || []
      _children.forEach(child => {
        // 直接修改子组件的data值页面上会有闪烁
        child.updateContentShow && child.updateContentShow()
      })
    }
  }
}
</script>
