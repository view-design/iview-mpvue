<template>
  <div class="countdown-class">
    {{time}}
  </div>
</template>
<script>
export default {
  props: {
    target: {
      type: Number,
      default: 0
    },
    showDay: {
      type: Boolean,
      default: false
    },
    callback: {
      type: String,
      default: ''
    },
    format: {
      type: Array,
      default: []
    },
    clearTimer: {
      type: Boolean,
      default: false
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      time: '',
      resultFormat: [],
      changeFormat: false
    }
  },
  mounted() {
    this.getFormat()
  },
  methods: {
    getFormat() {
      const len = this.format.length
      if (this.showDay && this.showDay !== 'false') {
        this.resultFormat.push('')
      }
      if (len >= 3) {
        for (let i = 0; i < len; i++) {
          if (this.resultFormat.length >= 4) break
          if (this.format[i]) {
            this.resultFormat.push(this.format[i].toString())
          }
        }
      }
      this.getLastTime()
    },
    init() {
      setTimeout(() => {
        this.getLastTime()
      }, 1000)
    },
    getLastTime() {
      const gapTime = Math.ceil((this.target - new Date().getTime()) / 1000)
      let result = ''
      let time = '00:00:00'
      let day = '00'
      const format = this.resultFormat
      if (gapTime > 0) {
        day = this.formatNum(parseInt(gapTime / 86400))
        let lastTime = gapTime % 86400
        const hour = this.formatNum(parseInt(lastTime / 3600))
        lastTime = lastTime % 3600
        const minute = this.formatNum(parseInt(lastTime / 60))
        const second = this.formatNum(lastTime % 60)
        if (this.changeFormat) {
          time = `${hour}${format[1]}${minute}${format[2]}${second}${format[3]}`
        }
        else {
          time = `${hour}:${minute}:${second}`
        }
        if (!this.clearTimer || this.clearTimer === 'false') {
          this.init()
        }
      }
      else {
        this.endfn()
      }
      if (this.showDay && this.showDay !== 'false') {
        if (this.changeFormat) {
          result = `${day}${format[0]} ${time}`
        }
        else {
          result = `${day}d ${time}`
        }
      }
      else {
        result = time
      }
      this.time = result
    },
    formatNum(num) {
      return num > 9 ? num : `0${num}`
    },
    endfn() {
      this.$emit('callback', {})
    }
  }
}
</script>
