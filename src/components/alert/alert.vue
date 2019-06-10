<template>
  <div class="i-alert"
    :class="[iClass, 'i-alert-' + type, showIcon ? 'i-alert-with-icon' : '', desc ? 'i-alert-with-desc' : '']"
    v-if="!closed">
    <div v-if="showIcon" class="i-alert-icon">
      <i-icon type="prompt" :size="desc ? 24 : 16" v-if="type === 'info'"></i-icon>
      <i-icon type="success" :size="desc ? 24 : 16" v-if="type === 'success'"></i-icon>
      <i-icon type="warning" :size="desc ? 24 : 16" v-if="type === 'warning'"></i-icon>
      <i-icon type="delete" :size="desc ? 24 : 16" v-if="type === 'error'"></i-icon>
    </div>
    <slot></slot>
    <div class="i-alert-desc">
      <slot name="desc"></slot>
    </div>
    <div class="i-alert-close" v-if="closable" @click="handleTap">
      <i-icon type="close"></i-icon>
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
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      value: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      closed: false
    }
  },
  methods: {
    handleTap() {
      this.closed = !this.closed
      this.$emit('close')
    }
  }
}
</script>
