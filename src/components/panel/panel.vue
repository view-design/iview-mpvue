<template>
  <div>
    <div class="i-panel" v-bind:class="iClass">
      <div v-if="title" class="i-panel-title" v-bind:class="{'i-panel-title-hide-top': hideTop}">{{ title }}</div>
      <div class="i-panel-content" v-bind:class="{'i-panel-without-border': hideBorder}">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    // 标题顶部距离
    hideTop: {
      type: Boolean,
      default: false
    },
    hideBorder: {
      type: Boolean,
      default: false
    },
    iClass: {
      type: String,
      default: ''
    }
  }
}
</script>

