<template>
  <div>
    <i-cell-group>
      <i-cell title="基本用法">
        <i-switch :value="switch1" @change="onChange" slot="footer"></i-switch>
      </i-cell>
      <i-cell title="自定义内容">
        <i-switch :value="switch1" size="large" @change="onChange" slot="footer">
          <view slot="open">开启</view>
          <view slot="close">关闭</view>
        </i-switch>
      </i-cell>
      <i-cell title="图标">
        <i-switch :value="switch1" @change="onChange" slot="footer">
          <i-icon type="right" slot="open"></i-icon>
          <i-icon type="close" slot="close"></i-icon>
        </i-switch>
      </i-cell>
      <i-cell title="禁止切换">
        <i-switch :value="switch1" :disabled="true" slot="footer"></i-switch>
      </i-cell>
    </i-cell-group>
  </div>
</template>
<script>
import cellGroup from '../../components/cell-group/cell-group'
import cell from '../../components/cell/cell'
import icon from '../../components/icon/icon'
import iswitch from '../../components/switch/switch'
export default {
  components: {
    'i-cell-group': cellGroup,
    'i-cell': cell,
    'i-icon': icon,
    'i-switch': iswitch
  },
  data() {
    return {
      switch1 : false
    }
  },
  methods: {
    onChange(evt) {
      this.switch1 = evt.value
    }
  }
}
</script>

