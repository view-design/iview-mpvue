<template>
  <div>
    <div style="margin: 16px">默认</div>
    <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <p slot="content">内容不错</p>
      <p slot="footer">尾部内容</p>
    </i-card>
    <div style="margin: 16px">通栏</div>
    <i-card full="true" title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <p>slot="content">内容不错</p>
      <p slot="footer">尾部内容</p>
    </i-card>
    <div style="margin: 16px">自定义图片样式</div>
    <i-card full="true" title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg" i-class="card-demo">
      <p>slot="content">内容不错</p>
      <p slot="footer">尾部内容</p>
    </i-card>
  </div>
</template>
<script>
import card from '../../components/card/card'
export default {
  components: {
    'i-card': card
  }
}
</script>
<style>
.card-demo image {
  border-radius: 50%;
}
</style>