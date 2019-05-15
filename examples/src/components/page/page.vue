<template>
  <div class="i-page" :class="iClass">
    <div class="i-page-prev" v-if="mode === 'button'">
      <i-button i-class="i-page-button" type="ghost" @click="handlePrev" :disabled="current === 1">
        <slot name="prev"></slot>
      </i-button>
    </div>
    <div class="i-page-number" v-if="mode !== 'pointer' && !simple">
      <div class="i-page-number-current">{{current}}</div>/{{total}}
    </div>
    <div class="i-page-pointer" v-if="mode === 'pointer'">
      <div class="i-page-pointer-dot" :class="{'current': (index + 1) === current}" v-for="(item, index) in totalNumber" :key="index"></div>
    </div>
    <div class="i-page-next" v-if="mode === 'button'">
      <i-button i-class="i-page-button" type="ghost" @click="handleNext" :disabled="current == total">
        <slot name="next"></slot>
      </i-button>
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
      this.handleChange('prev');
    },
    handleNext () {
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
