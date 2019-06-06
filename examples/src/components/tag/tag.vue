<template>
  <div class="i-tag" :class="classObj" @click="tapTag">
    {{innerText}}
    <slot></slot>
  </div>
</template>
<script>
const initColorList = ['blue', 'green', 'red', 'yellow', 'default']
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'dot'
    },
    iClass: {
      type: String,
      default: ''
    },
    innerText: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObj() {
      let theme = ''
      let className = 'i-tag-'
      if (initColorList.includes(this.color)) {
        theme = className + this.color
      }
      if (this.type === 'border') {
        theme = className + this.color + '-border'
      }
      if (this.checkable
        && this.checkable !== 'false'
        && this.checked
        && this.checked !== 'false'
      ) {
        theme = className + this.color + '-checked'
      } else if (this.checkable
        && this.checkable !== 'false'
        && (!this.checked || this.checked === 'false')
      ) {
        theme = (this.type === 'border' ? className + this.color + '-border' : className + 'none')
      }
      const tagDisable = this.checkable && this.checkable !== 'false' ? 'i-tag-disable' : ''
      return this.iClass + ' ' + tagDisable + ' ' + theme
    }
  },
  methods: {
    tapTag() {
      if (this.checkable && this.checkable !== 'false') {
        this.$emit('change', {
          name: this.name || '',
          checked: (this.checked && this.checked !== 'false') ? false : true
        })
      }
    }
  }
}
</script>
