<template>
  <div class="i-input-number" :class="[iClass, 'i-input-number-size-' + size]">
    <div
      class="i-input-number-minus"
      @click="handleMinus" :class="[value <= min ? 'i-input-number-disabled' : '']"
      :data-disabled="value <= min">-
    </div>
    <input
      class="i-input-number-text"
      type="number"
      :class="[min >= max ? 'i-input-number-disabled' : '']"
      :data-disabled="min >= max"
      :value="value"
      @blur="handleBlur"/>
    <div
      class="i-input-number-plus"
      :class="[value >= max ? 'i-input-number-disabled' : '']"
      :data-disabled="value >= max"
      @click="handlePlus">+
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    }
  },
  methods: {
    addNum (num1, num2) {
      let sq1, sq2, m;
      try {
          sq1 = num1.toString().split('.')[1].length;
      }
      catch (e) {
          sq1 = 0;
      }
      try {
          sq2 = num2.toString().split('.')[1].length;
      }
      catch (e) {
          sq2 = 0;
      }
      m = Math.pow(10, Math.max(sq1, sq2));
      return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
    },
    handleChangeStep(e, type) {
      const { dataset = {} } = e.currentTarget
      const { disabled } = dataset
      const step = this.step
      let value = this.value
      if (type === 'minus') {
        value = this.addNum(value, -step)
      }
      if (type === 'plus') {
        value = this.addNum(value, step)
      }

      if (value < this.min || value > this.max) return null

      this.handleEmit(value, type)
    },
    handleMinus(e) {
      this.handleChangeStep(e, 'minus')
    },
    handlePlus(e) {
      this.handleChangeStep(e, 'plus')
    },
    handleBlur(e) {
      let value = e.mp.detail.value
      if (!value) {
        setTimeout(() => {
          this.handleEmit(value)
        }, 16)
      }
      value = +value
      if (value > this.max) {
        value = this.max
      }
      if (value < this.min) {
        value = this.min
      }
      this.handleEmit(value)
    },
    handleEmit(value, type) {
      const data = {
        value
      }
      if (type) {
        data.type = type
      }
      this.$emit('change', data)
    }
  }
}
</script>

