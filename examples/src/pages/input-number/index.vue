<template>
  <div>
    <i-panel title="基础用法">
      <view style="padding: 16px">
        <i-input-number :value="value1" min="0" max="100" @change="handleChange1" />
      </view>
    </i-panel>

    <i-panel title="小数">
      <view style="padding: 16px">
        <i-input-number :value="value2" min="0" max="100" step="0.2" @change="handleChange2" />
      </view>
    </i-panel>
  </div>
</template>
<script>
import panel from '../../components/panel/panel'
import inputNumber from '../../components/input-number/input-number'
export default {
  components: {
    'i-panel': panel,
    'i-input-number': inputNumber
  },
  data() {
    return {
      value1: 1,
      value2: 0.1
    }
  },
  methods: {
    handleChange1(evt) {
      this.value1 = evt.value
    },
    handleChange2(evt) {
      this.value2 = evt.value
    }
  }
}
</script>
