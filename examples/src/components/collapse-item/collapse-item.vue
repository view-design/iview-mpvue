<template>
  <div class="i-collapse-item" :id="name" :class="iClass">
    <div class="i-collapse-item-title-wrap" @click="trigger">
      <i-icon size="16" type="enter" :i-class="[showContent ? 'i-collapse-item-arrow-show' : 'i-collapse-item-arrow']"></i-icon>
      <text class="i-collapse-item-title" :class="iClassTitle">{{title}}</text>
    </div>
    <div class="i-collapse-item-content" :class="[showContent, iClassContent]">
      <slot name="content"></slot>
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
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    iClass: {
      type: String,
      default: ''
    },
    iClassTitle: {
      type: String,
      default: ''
    },
    iClassContent: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showContent: '',
      accordion: false
    }
  },
  mounted() {
    this.accordion = this.$parent.accordion || false
    if (this.$parent.name === this.name) {
      this.showContent = 'i-collapse-item-show-content'
    }
  },
  methods: {
    trigger(e) {
      if (this.accordion) {
        this.$parent._accordionUpdate && this.$parent._accordionUpdate({name: this.name})
      }
      else {
        this.showContent = this.showContent ? '' : 'i-collapse-item-show-content'
      }
    },
    updateContentShow() {
      if (this.$parent.currentValue === this.name) {
        this.showContent = 'i-collapse-item-show-content'
      }
      else {
        this.showContent = ''
      }
    }
  }
}
</script>

