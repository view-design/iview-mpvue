<template>
  <div class="i-message" :class="classObj">
    {{ content }}
  </div>
</template>
<script>
export default {
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
      duration: 2,
      type: 'default', // default || success || warning || error
      timer: null
    }
  },
  computed: {
    classObj() {
      const messageType = 'i-message-' + this.type
      const isVisible = this.visible ? 'i-message-show' : ''
      return this.iClass + ' ' + messageType + ' ' + isVisible
    }
  },
  methods: {
    handleShow(options) {
      this.content = options.content || ''
      this.type = options.type || 'default'
      this.duration = options.duration || 2
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
      this.duration = 2
      this.type = 'default'
      this.timer = null
    }
  }
}
</script>

