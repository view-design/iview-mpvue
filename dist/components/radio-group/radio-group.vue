<template>
  <div>
    <radio-group class="i-cell-group" :i-class="iClass" @change="radioChange">
      <label class="i-radio i-cell i-radio-cell" v-for="(item, index) in lists" :key="index">
        <radio
          :value="item.value"
          :checked="item.checked"
          :color="color" :disabled="item.disabled"
          class="i-radio-radio" 
          :class="[positionCls, iItemClass]"></radio>
        <div class="i-radio-title">{{ item.value }}</div>
      </label>
    </radio-group>
  </div>
</template>
<script>
import cellGroup from '../cell-group/cell-group'
import cell from '../cell/cell'
const prefixCls = 'i-radio'
export default {
  components: {
    'i-cell-group': cellGroup,
    'i-cell': cell
  },
  props: {
    iClass: {
      type: String,
      default: ''
    },
    current: {
      type: String,
      default: ''
    },
    groups: {
      type: Array,
      default: []
    },
    position: {
      type: String,
      default: 'left'
    },
    color: {
      type: String,
      default: '#2d8cf0'
    },
    iClass: {
      type: String,
      default: ''
    },
    iItemClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    lists() {
      return this.groups.map((item) => {
        if (this.current === item.value) {
          item.checked = true
        }
        else {
          item.checked = false
        }
        return item
      })
    }
  },
  data() {
    return {
      positionCls: `${prefixCls}-radio-left`
    }
  },
  watch: {
    position(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.setPosition()
      }
    }
  },
  methods: {
    setPosition() {
      this.positionCls = this.position === 'left' ? `${prefixCls}-radio-left` : `${prefixCls}-radio-right`
    },
    radioChange(evt) {
      this.$emit('change', {value: evt.mp.detail.value})
    }
  }
}
</script>
