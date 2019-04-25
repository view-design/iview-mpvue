<template>
  <div class="i-tab-bar" v-bind:class="classObj">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    current: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObj() {
      const fixedClass = this.fixed ? 'i-tab-bar-fixed' : ''
      return this.iClass + ' ' + fixedClass
    }
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('change', newVal)
      }
    }
  },
}
</script>
