<template>
  <div class="i-index" :class="classObj">
    <scroll-view
        scroll-y
        :style="setScrollStyle"
        :scroll-top="scrollTop"
        @scroll="handlerScroll">
      <div class="i-index-item" :class="iItemClass" v-for="(plist, pindex) in dataSet" :key="pindex">
        <div class="i-index-item-header">{{plist.key}}</div>
        <div class="i-index-item-content">
          <div :class="iSideBarClass" v-for="(clist, cindex) in plist.list" :key="cindex">
            {{clist.name}}
          </div>
        </div>
      </div>
      <div class="i-index-fixed"
          @touchstart.stop="handlerTouchMove"
          @touchmove.stop="handlerTouchMove"
          @touchend.stop="handlerTouchEnd">
        <div class="i-index-fixed-item"
            v-for="(item, index) in fixedData"
            :key="index"
            :data-index="index"
            @click.stop="handlerFixedTap">
        {{ item }}    
        </div>
      </div>
      <div class="i-index-tooltip" :style="tipStyleObj">{{ currentName }}</div>
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
    return {
      scrollTop : 0,
      current : 0,
      timer : null,
      startTop : 0,
      itemLength : 0,
      currentName : '',
      isTouches : false
    }
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
      return [...fixedSet]
    }
  },
  methods: {
    handlerScroll({detail}) {

    }
  }
}
</script>
