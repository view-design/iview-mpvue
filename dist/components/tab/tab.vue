<template>
  <div class="i-tabs-tab" v-bind:class="classObj">
    <div class="i-tabs-tab-content">
      <i-badge :dot="dot" :count="remindCount">
        <div @click.stop="handleClickItem">
          <div class="i-tabs-tab-title" 
            v-bind:class="{'i-tabs-tab-title-current': current}" 
            v-if="current && currentCount"
            v-bind:style="{color: currentColor}">{{ title }}</div>
          <div class="i-tabs-tab-title"
            v-bind:class="{'i-tabs-tab-title-current': current}"
            v-else>{{ title }}</div>
        </div>
      </i-badge>
      <div class="i-tabs-tab-bar" v-if="current" v-bind:style="{background: currentColor}"></div>
    </div>
  </div>
</template>
<script>
import badge from '../badge/badge'
export default {
  components: {
    'i-badge': badge
  },
  props: {
    itemKey: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    dot: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    },
    iClass: {
      type: String,
      default: ''
    },
    scroll: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = this.$parent.scroll
  },
  computed: {
    classObj() {
      const tabScrollClass = this.scroll ? 'i-tabs-tab-scroll' : ''
      const tabCurrentClass = this.current ? 'i-tabs-tab-current' : ''
      return this.iClass + ' ' + tabScrollClass + ' ' + tabCurrentClass
    },
    remindCount() {
      return this.dot ? 0 : this.count
    },
    current() {
      return this.$parent.value === this.itemKey
    },
    currentColor() {
      return this.$parent.color
    }
  },
  methods: {
    handleClickItem() {
      this.$parent.$emit('input', this.itemKey)
    }
  },
}
</script>
