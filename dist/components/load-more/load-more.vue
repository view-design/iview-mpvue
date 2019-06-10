<template>
  <div class="i-load-more" :class="[iClass, loading ? '' : 'i-load-more-line']">
    <div class="i-load-more-loading" v-if="loading"></div>
    <div class="i-load-more-tip">
      <div v-if="tip">{{ tip }}</div>
      <div v-else-if="!tip && loading">正在加载</div>
      <div class="i-load-more-empty" v-else></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    tip: {
      type: String,
      default: ''
    },
    iClass: {
      type: String,
      default: ''
    }
  }
}
</script>

