<template>
  <div>
    <div class="i-toast-mask" v-if="visible && mask" @click="handleHide"></div>
    <div class="i-toast" :class="iClass" v-if="visible">
      <div v-if="type !== 'default'">
        <div class="i-toast-type">
          <i-icon i-class="i-toast-icon" type="success" v-if="type === 'success'"></i-icon>
          <i-icon i-class="i-toast-icon" type="prompt" v-else-if="type === 'warning'"></i-icon>
          <i-icon i-class="i-toast-icon" type="delete" v-else-if="type === 'error'"></i-icon>
          <div class="i-toast-icon i-toast-loading" v-else-if="type === 'loading'"></div>
        </div>
      </div>
      <div v-else>
        <i-icon i-class="i-toast-icon" :type="icon" v-if="icon"></i-icon>
        <image class="i-toast-image" :src="image" v-if="image" mode="aspectFit"></image>
      </div>
      <div class="i-toast-content" v-if="content">{{ content }}</div>
    </div>
  </div>
</template>
<script>
import icon from '../icon/icon'
export default {
  components: {
    'i-icon': icon
  },
  props: {
    iClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false,
      content: '',
      icon: '',
      image: '',
      duration: 2,
      mask: true,
      type: 'default', // default || success || warning || error || loading
      timer: null
    }
  },
  methods: {
    handleShow(options) {
      const { 
        type = 'default'
        , duration = 2 
        , icon = ''
        , image = ''
        , mask = true
        , content = ''
      } = options
      this.type = type
      this.icon = icon
      this.image = image
      this.mask = mask
      this.content = content
      this.duration = duration
      this.visible = true

      const d = this.duration * 1000
      if (this.timer) clearTimeout(this.timer)
      if (d !== 0) {
        this.timer = setTimeout(() => {
          this.handleHide()
          this.timer = null
        }, d)
      }
    },
    handleHide() {
      this.visible = false
      this.content = ''
      this.icon = ''
      this.image = ''
      this.duration = 2
      this.mask = true
      this.type = 'default'
      this.timer = null
    }
  }
}
</script>
