<template>
  <div>
    <i-panel title="基本用法"></i-panel>
    <i-tab-bar v-model="current" @change="handleChange">
      <i-tab-bar-item item-key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"></i-tab-bar-item>
      <i-tab-bar-item item-key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
      <i-tab-bar-item item-key="remind" icon="remind" current-icon="remind_fill" count="3" title="Notice"></i-tab-bar-item>
      <i-tab-bar-item item-key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
    </i-tab-bar>
    <i-panel title="自定义主题色"></i-panel>
    <i-tab-bar v-model="current" color="#f759ab" @change="handleChange">
      <i-tab-bar-item item-key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
      <i-tab-bar-item item-key="group" icon="group" current-icon="group_fill" title="朋友"></i-tab-bar-item>
      <i-tab-bar-item item-key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
      <i-tab-bar-item item-key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar>
  </div>
</template>
<script>
import panel from '../../components/panel/panel'
import tabBar from '../../components/tab-bar/tab-bar'
import tabBarItem from '../../components/tab-bar-item/tab-bar-item'
export default {
  components: {
    'i-panel': panel,
    'i-tab-bar': tabBar,
    'i-tab-bar-item': tabBarItem
  },
  data() {
    return {
      current: 'homepage'
    }
  },
  methods: {
    handleChange(val) {
      
    }
  },
}
</script>
