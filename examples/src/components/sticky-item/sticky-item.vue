<template>
  <div class="i-sticky-item" :class="stickyElmId">
    <div class="i-sticky-item-header" :class="classObj">
      <div class="i-sticky-title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="i-index-item-content">
      <slot name="content"></slot>
    </div>
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
    const stickyElmId = 'S_' + Math.ceil(Math.random() * 10e5).toString(36)
    return {
      isFixed: false,
      stickyElmId
    }
  },
  computed: {
    classObj() {
      const stickyClass = this.isFixed ? 'i-sticky-fixed' : ''
      return this.iClass + ' ' + stickyClass
    }
  },
  onPageScroll(evt) {
    const scrollTop = evt.scrollTop
    const globalMpvue = wx || swan || tt || my
    const query = wx.createSelectorQuery()
    query.select(`.${this.stickyElmId}`).boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          const top = ret[0].top
          const bottom = ret[0].bottom 
          this.isFixed = (top <= 0 && bottom >= 0) ? true : false
        }
      })
  }
}
</script>
