<template>
  <div class="i-sticky-demo">
    <i-sticky>
        <i-sticky-item i-class="i-sticky-demo-title">
          <div slot="title">
            逻辑层
          </div>
          <div slot="content">
            <div class="i-sticky-demo-item">注册程序</div>
            <div class="i-sticky-demo-item">场景值</div>
            <div class="i-sticky-demo-item">注册页面</div>
            <div class="i-sticky-demo-item">路由</div>
            <div class="i-sticky-demo-item">模块化</div>
            <div class="i-sticky-demo-item">API</div>
          </div>
        </i-sticky-item>
        <i-sticky-item i-class="i-sticky-demo-title">
          <div slot="title">
            视图层
          </div>
          <div slot="content">
            <div class="i-sticky-demo-item">注册程序</div>
            <div class="i-sticky-demo-item">场景值</div>
            <div class="i-sticky-demo-item">注册页面</div>
            <div class="i-sticky-demo-item">路由</div>
            <div class="i-sticky-demo-item">模块化</div>
            <div class="i-sticky-demo-item">API</div>
          </div>
        </i-sticky-item>
        <i-sticky-item i-class="i-sticky-demo-title">
          <div slot="title">
            自定义组件
          </div>
          <div slot="content">
            <div class="i-sticky-demo-item">注册程序</div>
            <div class="i-sticky-demo-item">场景值</div>
            <div class="i-sticky-demo-item">注册页面</div>
            <div class="i-sticky-demo-item">路由</div>
            <div class="i-sticky-demo-item">模块化</div>
            <div class="i-sticky-demo-item">API</div>
            <div class="i-sticky-demo-item">注册程序</div>
            <div class="i-sticky-demo-item">场景值</div>
            <div class="i-sticky-demo-item">注册页面</div>
            <div class="i-sticky-demo-item">路由</div>
            <div class="i-sticky-demo-item">模块化</div>
            <div class="i-sticky-demo-item">API</div>
          </div>
        </i-sticky-item>
        <i-sticky-item i-class="i-sticky-demo-title">
          <div slot="title">
            插件
          </div>
          <div slot="content">
            <div class="i-sticky-demo-item">注册程序</div>
            <div class="i-sticky-demo-item">场景值</div>
            <div class="i-sticky-demo-item">注册页面</div>
            <div class="i-sticky-demo-item">路由</div>
            <div class="i-sticky-demo-item">模块化</div>
            <div class="i-sticky-demo-item">API</div>
            <div class="i-sticky-demo-item">注册程序</div>
            <div class="i-sticky-demo-item">场景值</div>
            <div class="i-sticky-demo-item">注册页面</div>
            <div class="i-sticky-demo-item">路由</div>
            <div class="i-sticky-demo-item">模块化</div>
            <div class="i-sticky-demo-item">API</div>
            <div class="i-sticky-demo-item">注册程序</div>
            <div class="i-sticky-demo-item">场景值</div>
            <div class="i-sticky-demo-item">注册页面</div>
            <div class="i-sticky-demo-item">路由</div>
            <div class="i-sticky-demo-item">模块化</div>
            <div class="i-sticky-demo-item">API</div>
          </div>
        </i-sticky-item>
    </i-sticky>
  </div>
</template>
<script>
import sticky from '../../components/sticky/sticky'
import stickyItem from '../../components/sticky-item/sticky-item'
export default {
  components: {
    'i-sticky': sticky,
    'i-sticky-item': stickyItem
  },
  methods: {
    onChange() {

    }
  }
}
</script>
<style>
.i-sticky-demo, page{
  width:100%;
  height:100%;
}
.i-sticky-demo-item{
  padding:10px;
  border-bottom:#ddd solid 1rpx;
  font-size:14px;
}
.i-sticky-demo-des{
  padding:0 15px;
  margin-bottom:10px;
  font-size:12px;
  color:#ff9900;
}
</style>
