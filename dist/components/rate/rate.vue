<template>
  <div class="i-rate" :class="[iClass, rateElmId]" @touchmove="handleTouchMove">
    <input type="text" :name="name" :value="value" class="i-rate-hide-input"/>
    <div
      v-for="(item, index) in count"
      :key="index"
      :data-index="index"
      :class="[index < value ? 'i-rate-current' : '']"
      class="i-rate-star"
      @click="handleClick">
      <i-icon type="collection_fill" :size="size"></i-icon>
    </div>
    <div class="i-rate-text" v-if="value && showText">{{value}}{{showText}}</div>
  </div>
</template>
<script>
import icon from '../icon/icon'
export default {
  components: {
    'i-icon': icon
  },
  props: {
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    disabled : {
      type : Boolean,
      default : false
    },
    size: {
      type: Number,
      default: 20
    },
    name: {
      type: String,
      default: ''
    },
    iClass: {
      type: String,
      default: ''
    },
    showText: {
      type: String,
      default: ''
    }
  },
  data() {
    const rateElmId = 'S_' + Math.ceil(Math.random() * 10e5).toString(36)
    return {
      touchesStart: {
        pageX: 0
      },
      rateElmId
    }
  },
  mounted() {
    setTimeout(() => {
      const globalMpvue = wx || swan || tt || my
      const query = globalMpvue.createSelectorQuery().in(this.$root.$mp.page)
      query.select(`.${this.rateElmId}`).boundingClientRect()
        .exec((ret) => {
          this.touchesStart.pageX = ret[0] && ret[0].left
        })
    }, 100)
  },
  methods: {
    handleClick(evt) {
      if (this.disabled) return
      const index = evt.currentTarget.dataset.index
      this.$emit('change', {
        index: index + 1
      })
    },
    handleTouchMove(evt) {
      if (this.disabled || !evt.mp.changedTouches[0]) return
      const movePageX = evt.mp.changedTouches[0].pageX
      const space = movePageX - this.touchesStart.pageX
      if (space <= 0) {
        return
      }
      let setIndex = Math.ceil(space / this.size)
      setIndex = setIndex > this.count ? this.count : setIndex
      this.$emit('change', {index: setIndex})
    }
  }
}
</script>
