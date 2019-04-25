<template>
  <div class="i-badge" v-bind:class="iClass">
    <slot></slot>
    <div class="i-badge-dot" v-if="dot"></div>
    <div class="i-badge-count" v-bind:class="iClassAlone" v-else-if="count !== 0">{{ finalCount }}</div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    iClass: {
      type: String,
      default: ''
    },
    iClassAlone: {
      type: String,
      default: ''
    }
  },
  computed: {
    finalCount() {
      return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count
    }
  }
}
</script>

