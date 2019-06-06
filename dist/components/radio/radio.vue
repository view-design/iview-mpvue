<template>
  <div class="i-radio" :class="iClass" @click="radioChange">
    <i-cell i-class="i-radio-cell">
      <label>
        <radio :value="value" :checked="checked" :color="checked ? this.color : ''" :disabled="disabled" class="i-radio-radio" :class="positionCls"></radio>
        <div class="i-radio-title">{{ value }}</div>
      </label>
    </i-cell>
  </div>
</template>
<script>
import cell from '../cell/cell'
const prefixCls = 'i-radio'
export default {
  components: {
    'i-cell': cell
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#2d8cf0'
    },
    position: {
      type: String,
      default: 'left'
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  watch: {
    position(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.setPosition()
      }
    }
  },
  data() {
    return {
      positionCls: `${prefixCls}-radio-left`
    }
  },
  mounted() {
    this.setPosition()
  },
  methods: {
    changeCurrent(current) {
      this.checked = current
    },
    radioChange() {
      if (this.disabled) return
      const item = {
        current: !this.checked,
        value: this.value
      }
      this.$emit('change', item)
    },
    setPosition() {
      this.positionCls = this.position === 'left' ? `${prefixCls}-radio-left` : `${prefixCls}-radio-right`
    }
  }
}
</script>
