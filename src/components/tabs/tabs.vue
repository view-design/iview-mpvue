<template>
  <div>
    <scroll-view v-if="scroll" scroll-x=true class="i-tabs i-tabs-scroll" v-bind:class="classObj">
      <slot></slot>
    </scroll-view>
    <div class="i-tabs" v-bind:class="noScrollClassObj" v-else><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    scroll: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObj() {
      const fixedClass = this.fixed ? 'i-tabs-fixed' : ''
      return this.iClass + ' ' + fixedClass
    },
    noScrollClass() {
      const fixedClass = this.fixed ? 'i-tabs-fixed' : ''
      return this.iClass + ' ' + fixedClass
    }
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('change', newVal)
      }
    }
  }
}
</script>
