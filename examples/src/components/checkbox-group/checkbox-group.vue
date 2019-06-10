<template>
  <div>
    <checkbox-group class="i-cell-group" :i-class="iClass" @change="checkboxChange">
      <label class="i-checkbox i-cell i-checkbox-cell" v-for="(item, index) in lists" :key="index">
        <checkbox
          :value="item.value"
          :checked="item.checked"
          :color="color" :disabled="item.disabled"
          class="i-checkbox-checkbox" 
          :class="[positionCls, iItemClass]"></checkbox>
        <div class="i-checkbox-title">{{ item.value }}</div>
      </label>
    </checkbox-group>
  </div>
</template>
<script>
import cellGroup from '../cell-group/cell-group'
import cell from '../cell/cell'
const prefixCls = 'i-checkbox'
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
    groups: {
      type: Array,
      default: []
    },
    current: {
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
        if (this.current.includes(item.value)) {
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
      positionCls: `${prefixCls}-checkbox-left`
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
      this.positionCls = this.position === 'left' ? `${prefixCls}-checkbox-left` : `${prefixCls}-checkbox-right`
    },
    checkboxChange(evt) {
      this.$emit('change', {value: evt.mp.detail.value})
    }
  }
}
</script>
