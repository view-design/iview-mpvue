<template>
  <div class="i-index" :class="classObj">
    <scroll-view
        scroll-y
        :style="setScrollStyle"
        :scroll-top="scrollTop"
        @scroll="handlerScroll">
      <div class="i-index-item" :class="itemElemId + '_' + pindex" v-for="(plist, pindex) in dataSet" :key="pindex">
        <div class="i-index-item-header">{{plist.key}}</div>
        <div class="i-index-item-content">
          <div :class="iItemClass" v-for="(clist, cindex) in plist.list" :key="cindex">
            {{clist.name}}
          </div>
        </div>
      </div>
      <div class="i-index-fixed"
          :class="fixedElemId"
          @touchstart.stop="handlerTouchMove"
          @touchmove.stop="handlerTouchMove"
          @touchend.stop="handlerTouchEnd">
        <div class="i-index-fixed-item"
            v-for="(item, index) in fixedData"
            :key="index">
        {{ item }}    
        </div>
      </div>
      <div class="i-index-tooltip" style="display: none;" :style="tipStyleObj">{{ currentName }}</div>
    </scroll-view>
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '300'
    },
    itemHeight: {
      type: Number,
      default: 18
    },
    iClass: {
      type: String,
      default: ''
    },
    dataSet: {
      type: Array,
      default: []
    },
    iItemClass: {
      type: String,
      default: ''
    }
  },
  data() {
    const fixedElemId = 'F_' + Math.ceil(Math.random() * 10e5).toString(36)
    const itemElemId = 'I_' + Math.ceil(Math.random() * 10e5).toString(36)
    return {
      scrollTop : 0,
      current : 0,
      timer : null,
      startTop : 0,
      itemLength : 0,
      currentName : '',
      isTouches : false,
      fixedElemId,
      itemElemId,
      itemsTopSet: []
    }
  },
  mounted() {
    this.setTouchStartVal(this.dataSet)
  },
  computed: {
    setScrollStyle() {
      const units = ['%','px','rem','rpx','em','rem']
      let hasUnits = false
      for (let i = 0, len = units.length; i < len; i++) {
        if (this.height.includes(units[i])) {
          hasUnits = true
          break
        }
      }
      return 'height:' + (hasUnits ? this.height : this.height + 'px')
    },
    fixedData() {
      let fixedSet = new Set()
      this.dataSet.forEach(item => {
        fixedSet.add(item.key)
      })
      this.itemLength = fixedSet.size
      return [...fixedSet]
    },
    tipStyleObj() {
      return this.isTouches ? 'display:block;' : 'display:none;'
    }
  },
  methods: {
    handlerScroll(evt) {
      const detail = evt.mp && evt.mp.detail
      if (detail) {
        const scrollTop = detail.scrollTop
        this.dataSet.forEach((item, index) => {
          let data = this.itemsTopSet[index]
          let offset = data.top + data.height
          if (scrollTop < offset && scrollTop >= data.top) {
            this.current = index
            this.currentName = this.dataSet[index].key
          }
        })
      }
    },
    handlerTouchMove(evt) {
      const touches = evt.touches[0] || {};
      const pageY = touches.pageY
      const rest = pageY - this.startTop
      let idx = Math.floor(rest / parseInt(this.itemHeight + 1, 10))
      idx = idx >= this.itemLength ? this.itemLength - 1 : (idx <= 0 ? 0 : idx)
      const itemData = this.dataSet[idx]
      if (itemData.key !== this.currentName) {
        const globalMpvue = wx || swan || tt || my
        globalMpvue.vibrateShort && globalMpvue.vibrateShort()
      }
      this.scrollTop = this.itemsTopSet[idx].top
      this.currentName = itemData.key
      this.isTouches = true
      this.triggerCallback({
        index : idx,
        current : itemData.key
      })
    },
    handlerTouchEnd(){
      this.isTouches = false
    },
    setTouchStartVal(val) {
      const globalMpvue = wx || swan || tt || my
      const query = globalMpvue.createSelectorQuery()
      let selectors = query.select(`.${this.fixedElemId}`).boundingClientRect()
      val.forEach((item, index) => {
        selectors = selectors.select(`.${this.itemElemId}_${index}`).boundingClientRect()
      })
      selectors.exec((ret) => {
        this.startTop = ret[0].top
        this.itemsTopSet = ret.slice(1)
      })
    },
    triggerCallback(options){
      this.$emit('change', options)
    }
  },
  watch: {
    dataSet(newVal) {
      setTouchStartVal(newVal)
    }
  }
}
</script>
