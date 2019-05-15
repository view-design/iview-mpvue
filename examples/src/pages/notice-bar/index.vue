<template>
  <div>
    <i-panel title="通告栏">
    <i-notice-bar>
        2018年世界杯,将于6月14日至7月15日举行
    </i-notice-bar>
    </i-panel>
    <i-panel title="自定义颜色 通告栏">
      <i-notice-bar backgroundColor="#99cc66" color="#ffff66">
          2018年世界杯,将于6月14日至7月15日举行
      </i-notice-bar>
    </i-panel>
    <i-panel title="icon 通告栏">
      <i-notice-bar icon="systemprompt">
          2018年世界杯,将于6月14日至7月15日举行
      </i-notice-bar>
    </i-panel>
    <i-panel title="关闭 通告栏">
      <i-notice-bar icon="systemprompt" closable="true">
          2018年世界杯,将于6月14日至7月15日举行
      </i-notice-bar>
    </i-panel>
    <i-panel title="滚动 通告栏">
      <i-notice-bar icon="systemprompt" loop="true">
          2018年世界杯,将于6月14日至7月15日举行;2018年世界杯,将于6月14日至7月15日举行;
      </i-notice-bar>
      <i-notice-bar icon="systemprompt" loop="true" speed="200">
          2018年世界杯,将于6月14日至7月15日举行;2018年世界杯,将于6月14日至7月15日举行;
      </i-notice-bar>
    </i-panel>
  </div>
</template>
<script>
import noticeBar from '../../components/notice-bar/notice-bar'
import panel from '../../components/panel/panel'
export default {
  components: {
    'i-panel': panel,
    'i-notice-bar': noticeBar
  }
}
</script>

