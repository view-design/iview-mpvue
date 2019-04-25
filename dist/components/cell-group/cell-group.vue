<template>
  <div>
    <div class="i-cell-group" v-bind:class="iClass">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    iClass: {
      type: String,
      default: ''
    }
  }
}
</script>
