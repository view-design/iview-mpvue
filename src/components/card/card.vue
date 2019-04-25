<template>
  <div class="i-card" v-bind:class="classObj">
    <section class="i-card-header" v-bind:class="iClass">
      <div class="i-card-header-content">
        <image class="i-card-header-thumb" :src="thumb" v-if="thumb"></image>
        {{ title }}
      </div>
      <div class="i-card-header-extra" v-if="extra">{{ extra }}</div>
    </section>
    <section class="i-card-body" v-bind:class="iClass"><slot name="content"></slot></section>
    <section class="i-card-footer" v-bind:class="iClass"><slot name="footer"></slot></section>
  </div>
</template>
<script>
export default {
  props: {
    full: {
      type: Boolean,
      default: false
    },
    thumb: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extra: {
      type: String,
      default: ''
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObj() {
      const fullClass = this.full ? 'i-card-full' : ''
      return this.iClass + ' ' + fullClass
    }
  },
}
</script>


