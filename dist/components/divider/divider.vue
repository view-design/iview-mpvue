<template>
  <div class="i-divider" :class="iClass" :style="{color: color, fontSize: size + 'px', height: height + 'px'}">
    <div class="i-divider-content" v-if="content">
      {{ content }}
    </div>
    <div class="i-divider-content" v-else>
      <slot></slot>
    </div>
    <div class="i-divider-line" :style="{background: lineColor}"></div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 48
    },
    color: {
      type : String,
      default : '#80848f'
    },
    lineColor: {
      type : String,
      default : '#e9eaec'
    },
    size: {
      type: String,
      default: 12
    },
    iClass: {
      type: String,
      default: ''
    }
  }
}
</script>

