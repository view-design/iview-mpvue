<template>
  <div>
    <i-panel title="group-水果">
      <i-checkbox-group @change="handleFruitChange" :groups="fruit" :current="current" :position="position"></i-checkbox-group>
    </i-panel>
    <i-button @click="handleClick" type="ghost">切换单选框位置</i-button>
  </div>
</template>
<script>
import panel from '../../components/panel/panel'
import checkboxGroup from '../../components/checkbox-group/checkbox-group'
import button from '../../components/button/button'
export default {
  components: {
    'i-panel': panel,
    'i-checkbox-group': checkboxGroup,
    'i-button': button
  },
  data() {
    return {
      fruit: [{
        id: 1,
        value: '香蕉'
      }, {
        id: 2,
        value: '苹果'
      }, {
        id: 3,
        value: '西瓜'
      }, {
        id: 4,
        value: '葡萄'
      }],
      current: ['苹果', '葡萄'],
      position: 'left',
      animal: '熊猫',
      checked: false,
      disabled: false
    }
  },
  methods: {
    handleFruitChange(evt) {
      this.current = evt.value
    },
    handleClick() {
      this.position = this.position === 'left' ? 'right' : 'left'
    }
  }
}
</script>
