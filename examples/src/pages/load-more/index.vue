<template>
  <div>
    <i-load-more />
    <i-load-more tip="暂无数据" :loading="false" />
    <i-load-more :loading="false" />
  </div>
</template>
<script>
import loadMore from '../../components/load-more/load-more'
export default {
  components: {
    'i-load-more': loadMore
  }
}
</script>

