<template>
  <div class="i-step-item" :class="classObj">
    <div class="i-step-item-ico">
      <div class="i-step-ico" v-if="noIcon">{{ intOrder }}</div>
      <div class="i-step-ico" v-else>
        <i-icon i-class="i-step-ico-in" :type="iconType"></i-icon>
      </div>
      <div class="i-step-line"></div>
    </div>
    <div class="i-step-item-main">
      <div class="i-step-item-title" v-if="title">{{ title }}</div>
      <div class="i-step-item-title" v-else>
        <slot name="title"></slot>
      </div>
      <div class="i-step-item-content" v-if="content">{{ content }}</div>
      <div class="i-step-item-content" v-else>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import icon from '../icon/icon'
export default {
  components: {
    'i-icon': icon
  },
  props: {
    status: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    iClass: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classObj() {
      let statusClass = ''
      if (this.status) {
        statusClass = 'i-step-' + this.status
      }
      if (this.order < this.$parent.current) {
        statusClass = 'i-step-finish'
      }
      if (this.order == this.$parent.current) {
        statusClass = 'i-step-process'
      }
      let directionClass = this.$parent.direction === 'vertical' ? 'i-step-vertical' : 'i-step-horizontal'
      let layoutClass = this.$parent.direction === 'vertical' ? 'i-step-full-width' : 'i-step-flex-width'
      return this.iClass + ' ' + statusClass + ' ' + directionClass + ' ' + layoutClass
    },
    noIcon() {
      let noIcon = true
      if (this.order < this.$parent.current || this.icon) {
        noIcon = false
      }
      return noIcon
    },
    iconType() {
      let type = ''
      if (this.status === 'error') {
        type = 'close'
      }
      else {
        type = 'right'
      }
      if (this.icon) {
        type = this.icon
      }
      return type
    },
    intOrder() {
      return parseInt(this.order, 10) + 1
    }
  }
}
</script>
