<template>
  <div class="i-divider-demo">
    <div class="one-tag">基本用法</div>
    <div class="i-divider-demo-des">注: 如果同时存在slot和传递内容两个参数只有传递参数content生效</div>
    <div class="i-divider-mart">
      <i-divider content="加载已经完成,没有其他数据"></i-divider>
    </div>
    <div class="i-divider-mart">
      <i-divider content="加载已经完成,没有其他数据" color="#2d8cf0" lineColor="#2d8cf0"></i-divider>
    </div>
    <div class="i-divider-mart">
      <i-divider content="加载已经完成,没有其他数据" lineColor="#2d8cf0"></i-divider>
    </div>
    <div class="i-divider-mart">
      <i-divider content="加载已经完成,没有其他数据" color="#ed3f14" lineColor="#ed3f14"></i-divider>
    </div>
    <div class="i-divider-mart">
      <i-divider content="加载已经完成,没有其他数据" color="#ff9900" lineColor="#ff9900"></i-divider>
    </div>
    <div class="one-tag">自定义内容</div>
    <div class="i-divider-mart">
      <i-divider  color="#2d8cf0" lineColor="#2d8cf0">加载已经完成,没有其他数据</i-divider>
    </div>
    <div class="i-divider-mart">
      <i-divider color="#ed3f14" lineColor="#ed3f14">加载已经完成,没有其他数据</i-divider>
    </div>
</div>
</template>
<script>
import divider from '../../components/divider/divider'
export default {
  components: {
    'i-divider': divider
  }
}
</script>
<style>
.i-divider-demo, page{
  width:100%;
  height:100%;
  background:#fff;
}
.one-tag{
  font-size:14px;
  margin:30px 20px 0 20px;
}
.i-divider-demo-des{
  padding:0 20px;
  margin-top:5px;
  font-size:12px;
  color:#ff9900;
}
</style>
