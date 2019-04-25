<template>
  <div>
    <i-panel title="基本用法"></i-panel>

    <i-tabs v-model="current" @change="handleChange">
      <i-tab item-key="tab1" title="选项1212"></i-tab>
      <i-tab item-key="tab2" title="选项2"></i-tab>
      <i-tab item-key="tab3" title="选项3"></i-tab>
    </i-tabs>

    <i-panel title="自定义主题色"></i-panel>

    <i-tabs v-model="current" color="#f759ab" @change="handleChange">
      <i-tab item-key="tab1" title="选项1"></i-tab>
      <i-tab item-key="tab2" title="选项2"></i-tab>
      <i-tab item-key="tab3" title="选项3"></i-tab>
    </i-tabs>

    <i-panel title="徽标"></i-panel>

    <i-tabs v-model="current" @change="handleChange">
      <i-tab item-key="tab1" title="选项1" count="3"></i-tab>
      <i-tab item-key="tab2" title="选项2"></i-tab>
      <i-tab item-key="tab3" title="选项3" dot></i-tab>
    </i-tabs>

    <i-panel title="滚动"></i-panel>

    <i-tabs v-model="current" scroll="true" @change="handleChangeScroll">
      <i-tab item-key="tab1" title="选项1"></i-tab>
      <i-tab item-key="tab2" title="选项2"></i-tab>
      <i-tab item-key="tab3" title="选项3"></i-tab>
      <i-tab item-key="tab4" title="选项4"></i-tab>
      <i-tab item-key="tab5" title="选项5"></i-tab>
      <i-tab item-key="tab6" title="选项6"></i-tab>
      <i-tab item-key="tab7" title="选项7"></i-tab>
      <i-tab item-key="tab8" title="选项8"></i-tab>
      <i-tab item-key="tab9" title="选项9"></i-tab>
    </i-tabs>
  </div>
</template>
<script>
import panel from '../../components/panel/panel'
import tabs from '../../components/tabs/tabs'
import tab from '../../components/tab/tab'
export default {
  components: {
    'i-panel': panel,
    'i-tabs': tabs,
    'i-tab': tab
  },
  data() {
    return {
      current: 'tab1',
      current_scroll: 'tab1'
    }
  },
  methods: {
    handleChange(val) {

    },
    handleChangeScroll(val) {

    }
  },
}
</script>
