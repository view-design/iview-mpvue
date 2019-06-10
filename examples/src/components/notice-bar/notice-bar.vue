<template>
  <div v-if="show" class="i-noticebar" :style="{color: color, backgroundColor: backgroundColor}" :class="iClass">
    <i-icon v-if="icon" :type="icon" size="24" i-class="i-noticebar-icon"></i-icon>
    <div class="i-noticebar-content-wrap" :class="wrapClassObj">
      <div class="i-noticebar-content" :class="classObj" :animation="animationData">
        <slot></slot>
      </div>
    </div>
    <i-icon v-if="closable" i-class="i-noticebar-operation" type="close" size="20" :color="color" @click="handleClose"></i-icon>
  </div>
</template>
<script>
import icon from '../icon/icon'
export default {
  components: {
    'i-icon': icon
  },
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: '#fefcec'
    },
    color: {
      type: String,
      default: '#f76a24'
    },
    speed: {
      type: Number,
      default: 1000
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  data() {
    const animElemId = "C_" + Math.ceil(Math.random() * 10e5).toString(36);
    const wrapElemId = "W_" + Math.ceil(Math.random() * 10e5).toString(36);
    return {
      show: true,
      animationData: null,
      animation: null,
      timer: null,
      wrapWidth: 0,
      width: 0,
      duration: 0,
      animElemId,
      wrapElemId
    }
  },
  mounted() {
    if (this.loop) {
      setTimeout(() => {
        this.initAnimation() 
      }, 100)
    }
  },
  onShow() {
    if (this.timer) {
      this.destroyTimer()
      if (this.loop) {
        setTimeout(() => {
          this.initAnimation() 
        }, 100)
      }
    }
  },
  computed: {
    classObj() {
      return this.loop ? 'i-noticebar-content-loop ' + this.animElemId : this.animElemId
    },
    wrapClassObj() {
      return this.wrapElemId
    }
  },
  methods: {
    initAnimation() {
      const globalMpvue = wx || swan || tt || my
      if (!globalMpvue.createSelectorQuery) {
        return
      }
      globalMpvue.createSelectorQuery().in(this.$root.$mp.page).select(`.${this.wrapElemId}`).boundingClientRect()
        .select(`.${this.animElemId}`).boundingClientRect()
        .exec((retArray) => {
          this.createAnimation(globalMpvue, retArray[0], retArray[1])
        })
    },
    startAnimation() {
      const resetAction = () => {
        const resetAnimation = this.animation.translateX(this.wrapWidth).step()
        this.animationData = resetAnimation.export()
      }
      // 微信小程序
      if (this.animation.option && this.animation.option.transition) {
        if (this.animation.option.transition.duration !== 0) {
          this.animation.option.transition.duration = 0
          resetAction()
        }
        this.animation.option.transition.duration = this.duration
      }
      //  头条小程序
      if (this.animation.option && this.animation.option.hasOwnProperty('duration')) {
        if (this.animation.option.duration !== 0) {
          this.animation.option.duration = 0
          resetAction()
        }
        this.animation.option.duration = this.duration
      }
      // 支付宝小程序
      if (this.animation.config && this.animation.config.hasOwnProperty('duration')) {
        if (this.animation.config.duration !== 0) {
          this.animation.config.duration = 0
          resetAction()
        }
        this.animation.config.duration = this.duration
      }
      // 百度小程序
      if (this.animation.hasOwnProperty('duration')) {
        if (this.animation.duration !== 0) {
          this.animation.duration = 0
          resetAction()
        }
        this.animation.duration = this.duration
      }
      const animationData = this.animation.translateX(-this.width).step()
      setTimeout(() => {
        this.animationData = animationData.export()
      }, 100)
      this.timer = setTimeout(() => {
        this.startAnimation()
      }, this.duration)
    },
    createAnimation(globalMpvue, wrapRect, rect) {
      const duration = this.duration = rect.width / 40 * this.speed
      this.animation = globalMpvue.createAnimation({
        duration: duration,
        timingFunction: "linear",
      })
      this.wrapWidth = wrapRect.width
      this.width = rect.width
      this.startAnimation()
    },
    destroyTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
        const animationData = this.animation.translateX(this.wrapWidth).step()
        this.animationData = animationData.export()
      }
    },
    handleClose() {
      this.destroyTimer()
      this.show = false
      this.timer = null
    }
  }
}
</script>

