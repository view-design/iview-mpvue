<template>
  <div class="i-swipeout-wrap" :class="iClass">
    <div class="i-swipeout-item"
      @touchstart="handlerTouchstart"
      @touchmove="handlerTouchmove"
      @touchend="handlerTouchend"
      :style="wrapStyle">
      <div class="i-swipeout-content">
        <slot name="content"></slot>
      </div>
      <div class="i-swipeout-button-right-group" v-if="actions.length > 0" @touchend.stop="loop">
        <div class="i-swipeout-button-right-item"
          v-for="(item, index) in actions"
          :key="index"
          :style="{background: item.background ? item.background : '#f7f7f7', color: item.color, width: item.width + 'px'}"
          @click="handlerButton"
          data-index="index">
          <!-- 组件在mpvue会编译成template，循环语句中的item与index传递不进去 -->
          <div class="i-icon"
            v-if="item.icon"
            v-bind:class="['i-icon-' + item.icon]"
            v-bind:style="{color: item.color, fontSize: item.fontSize + 'px'}">
          </div>
          {{item.name}}
        </div>
      </div>
      <div class="i-swipeout-button-right-group"
        @touchend.stop="loop"
        @click="handlerParentButton"
        v-if="actions.length === 0"
        :style="{width: operateWidth + 'px', right: -operateWidth + 'px'}">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    actions: {
      type: Array,
      default: []
    },
    unclosable: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Boolean,
      default: false
    },
    operateWidth: {
      type: Number,
      default: 160
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tStart: {
        pageX: 0,
        pageY: 0
      },
      limitMove: 0,
      position: {
        pageX: 0,
        pageY: 0
      }
    }
  },
  computed: {
    wrapStyle() {
      return 'transform:translate(' + this.position.pageX + 'px, 0);'
    }
  },
  mounted() {
    this._updateButtonSize()
  },
  watch: {
    toggle() {
      this.closeButtonGroup()
    }
  },
  methods: {
    loop() {

    },
    _updateButtonSize() {
      const globalMpvue = wx || swan || tt || my
      if (this.actions.length) {
        let limitMovePosition = 0
        this.actions.forEach(item => {
          limitMovePosition += item.width || 0
        })
        this.limitMove = limitMovePosition
      }
      else {
        this.limitMove = this.operateWidth
      }
    },
    handlerTouchstart(evt) {
      const touches = evt.touches ? evt.touches[0] : {}
      const tStart = this.tStart
      if (touches) {
        for (let i in tStart) {
          if (touches[i]) {
            tStart[i] = touches[i]
          }
        }
      }
    },
    swipper(touches) {
      const start = this.tStart
      const spacing = {
        pageX: touches.pageX - start.pageX,
        pageY: touches.pageY - start.pageY
      }
      if (this.limitMove < Math.abs(spacing.pageX)
        || (Math.abs(spacing.pageX) > 0 && Math.abs(spacing.pageX) < this.limitMove)
      ) {
        spacing.pageX = -this.limitMove
      }
      this.position = spacing
    },
    handlerTouchmove(evt) {
      const start = this.tStart
      const touches = evt.touches ? evt.touches[0] : {}
      if (touches) {
        const direction = this.swipeDirection(
          start.pageX,
          touches.pageX,
          start.pageY,
          touches.pageY
        )
        if (direction === 'Left') {
          this.swipper(touches)
        }
      }
    },
    handlerTouchend(evt) {
      const start = this.tStart
      const touches = evt.mp && evt.mp.changedTouches ? evt.mp.changedTouches[0] : {}
      if (touches) {
        const direction = this.swipeDirection(
          start.pageX,
          touches.pageX,
          start.pageY,
          touches.pageY
        )
        const spacing = {
          pageX: touches.pageX - start.pageX,
          pageY: touches.pageY - start.pageY
        }
        if (Math.abs(spacing.pageX) >= 40 && direction === 'Left') {
          spacing.pageX = spacing.pageX  < 0 ? -this.limitMove : this.limitMove
        }
        else {
          spacing.pageX = 0
        }
        this.position = spacing
      }
    },
    handlerButton(evt) {
      if (!this.unclosable || this.unclosable === 'false') {
        this.closeButtonGroup()
      }
      const dataset = evt.currentTarget.dataset
      this.$emit('change', {
        index: dataset.index
      })
    },
    closeButtonGroup() {
      this.position = {
        pageX: 0,
        pageY: 0
      }
    },
    handlerParentButton() {
      if (!this.unclosable || this.unclosable === 'false') {
        this.closeButtonGroup()
      }
    },
    swipeDirection(x1, x2, y1, y2) {
      return Math.abs(x1 - x2) >=
        Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
    }
  }
}
</script>

