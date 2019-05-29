<template>
  <div>
    <div class="i-as-mask i-class-mask" :class="[visible ? 'i-as-mask-show' : '', iClassMask]" @click="handleClickMask"></div>
    <div class="i-as" :class="[visible ? 'i-as-show' : '', iClass]">
      <div class="i-as-header" :class="iClassHeader"><slot name="header"></slot></div>
      <div class="i-as-actions">
        <div class="i-as-action-item" v-for="(item, index) in actions" :key="index">
          <button @click="handleClickItem(index)" class="i-btn i-btn-large i-btn-ghost i-btn-long" :open-type="item.openType">
              <div class="i-as-btn-loading" v-if="item.loading"></div>
              <i-icon v-if="item.icon" :type="item.icon" i-class="i-as-btn-icon"></i-icon>
              <div class="i-as-btn-text" :style="styleObj">{{ item.name }}</div>
          </button>
        </div>
      </div>
      <div class="i-as-cancel" v-if="showCancel">
        <i-button i-class="i-as-cacenl-btn" type="ghost" size="large" long="true" @click="handleClickCancel">{{ cancelText }}</i-button>
      </div>
    </div>
  </div>
</template>
<script>
import button from '../button/button'
import icon from '../icon/icon'
export default {
  components: {
    'i-button': button,
    'i-icon': icon
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    actions: {
      type: Array,
      default: []
    },
    iClassMask: {
      type: String,
      default: ''
    },
    iClassHeader: {
      type: String,
      default: ''
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClickMask() {
      if (!this.maskClosable || this.maskClosable === 'false') return
      this.handleClickCancel()
    },
    handleClickItem(index) {
      this.$emit('click', {index})
    },
    handleClickCancel() {
      this.$emit('cancel')
    }
  }
}
</script>
