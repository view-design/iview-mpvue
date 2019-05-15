<template>
  <div class="i-drawer" :class="classObj">
    <div v-if="mask" class="i-drawer-mask" @click="handleMaskClick"></div>
    <div class="i-drawer-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'left'
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObj() {
      const showClass = this.visible ? 'i-drawer-show' : ''
      const modeClass = 'i-drawer-' + this.mode
      return this.iClass + ' ' + showClass + ' ' + modeClass
    }
  },
  methods: {
    handleMaskClick(evt) {
      if (!this.maskClosable) {
        return
      }
      this.$emit('click', evt)
    }
  }
}
</script>

