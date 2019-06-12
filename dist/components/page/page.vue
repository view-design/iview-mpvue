<template>
  <div class="i-page" :class="iClass">
    <div class="i-page-prev" v-if="mode === 'button'">
      <button
        class="i-btn i-btn-ghost i-page-button"
        :class="[current == 1 ? 'i-btn-disabled' : '']"
        @click="handlePrev"
        hover-start-time="20"
        hover-stay-time="70">
        <slot name="prev"></slot>
      </button>
    </div>
    <div class="i-page-number" v-if="mode !== 'pointer' && !simple">
      <div class="i-page-number-current">{{current}}</div>/{{total}}
    </div>
    <div class="i-page-pointer" v-if="mode === 'pointer'">
      <div class="i-page-pointer-dot" :class="{'current': (index + 1) === current}" v-for="(item, index) in totalNumber" :key="index"></div>
    </div>
    <div class="i-page-next" v-if="mode === 'button'">
      <button
        class="i-btn i-btn-ghost i-page-button"
        :class="[current == total ? 'i-btn-disabled' : '']"
        @click="handleNext"
        hover-start-time="20"
        hover-stay-time="70">
        <slot name="next"></slot>
      </button>
    </div>
  </div>
</template>

<script>
import button from '../button/button'
export default {
  components: {
    'i-button': button
  },
  props: {
    mode: {
      type: String,
      default: 'button'
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    simple: {
      type: Boolean,
      default: false
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    totalNumber() {
      let count = parseInt(this.total, 10)
      return new Array(count).fill(1)
    }
  },
  methods: {
    handlePrev () {
      if (this.current == 1) return
      this.handleChange('prev');
    },
    handleNext () {
      if (this.current == this.total) return
      this.handleChange('next');
    },
    handleChange (type) {
      this.$emit('change', {
        type: type
      })
    }
  }
}
</script>
