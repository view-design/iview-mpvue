<template>
  <div class="i-tab-bar-item" v-bind:class="iClass" @click="itemHandleClick">
    <i-badge :dot="dot" :count="dot ? 0 : count">
      <div>
        <i-icon v-if="icon || currentIcon"
          i-class="i-tab-bar-item-icon"
          :iClass="iconClass"
          :color="current ? currentColor : ''"
          :type="current ? currentIcon : icon"
          size="22"
        ></i-icon>
        <image class="i-tab-bar-item-img" :src="current ? currentImg : img" v-else></image>
        <div class="i-tab-bar-item-title"
          v-bind:class="{'i-tab-bar-item-title-current': current}"
          v-if="current && currentColor"
          v-bind:style="{color: currentColor}"
        >
        {{ title }}
        </div>
        <div class="i-tab-bar-item-title"
          v-bind:class="{'i-tab-bar-item-title-current': current}"
          v-else
        >
        {{ title }}
        </div>
      </div>
    </i-badge>
  </div>
</template>
<script>
import badge from '../badge/badge'
import icon from '../icon/icon'

export default {
  components: {
    'i-badge': badge,
    'i-icon': icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    currentIcon: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    currentImg: {
      type: String,
      default: ''
    },
    itemKey: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    dot: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass() {
      const iconCurrent = this.current ? 'i-tab-bar-item-icon-current' : ''
      return 'i-tab-bar-item-icon ' + iconCurrent
    },
    current() {
      return this.$parent.value === this.itemKey
    },
    currentColor() {
      return this.$parent.color || ''
    }
  },
  methods: {
    itemHandleClick() {
      this.$parent.$emit('input', this.itemKey)
    }
  }
}
</script>