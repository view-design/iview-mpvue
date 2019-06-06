<template>
  <div>
    <div class="progress-item">
      <i-progress percent="25"></i-progress>
      <i-progress percent="45" status="active"></i-progress>
      <i-progress percent="65" status="wrong"></i-progress>
      <i-progress percent="100" status="success"></i-progress>
      <i-progress percent="25" hide-info="true"></i-progress>
    </div>
    <div class="progress-item">
      <i-progress :percent="percent" :status="status"></i-progress>
      <i-button @click="handleAdd" type="ghost">增加</i-button>
      <i-button @click="handleReduce" type="ghost">减少</i-button>
    </div>
  </div>
</template>
<script>
import progress from '../../components/progress/progress'
import button from '../../components/button/button'
export default {
  components: {
    'i-button': button,
    'i-progress': progress
  },
  data() {
    return {
      percent: 0,
      status: 'normal'
    }
  },
  methods: {
    handleAdd () {
      if (this.percent === 100) return;
      this.percent = this.percent + 10
      if (this.percent === 100) {
        this.status = 'success'
      }
    },
    handleReduce () {
      if (this.percent === 0) return;
      this.percent = this.percent - 10
      this.status = 'normal'
    }
  }
}
</script>
<style>
.progress-item{
  padding: 12px;
}
</style>

