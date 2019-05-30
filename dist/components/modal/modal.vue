<template>
  <div>
    <div class="i-modal-mask" :class="[visible ? 'i-modal-mask-show' : '', iClass, iClassMask]"></div>
    <div class="i-modal" :class="[visible ? 'i-modal-show' : '', iClass]">
      <div class="i-modal-main">
        <div class="i-modal-content">
          <div class="i-modal-title" v-if="title">{{ title }}</div>
          <div class="i-modal-body"><slot></slot></div>
          <div class="i-modal-actions" v-if="actions.length">
            <block v-if="actionMode === 'horizontal'">
              <div class="i-modal-grid">
                <div v-for="(item, index) in actions" :key="index" :class="[actions.length === index + 1 ? 'i-modal-grid-item-last' : 'i-modal-grid-item']">
                  <button class="i-btn i-btn-long i-btn-ghost i-btn-square" :data-index="index" @click="handleClickItem" plain="true">
                    <view class="i-modal-btn-loading" v-if="item.loading"></view>
                    <i-icon v-if="item.icon" :type="item.icon" i-class="i-modal-btn-icon"></i-icon>
                    <view class="i-modal-btn-text" :style="{color: item.color}">{{ item.name }}</view>
                  </button>
                </div>
              </div>
            </block>
            <block v-else>
              <div class="i-modal-action-vertical" v-for="(item, index) in actions" :key="item.name">
                <button class="i-btn i-btn-long i-btn-ghost i-btn-square" :data-index="index" @click="handleClickItem" plain="true">
                  <view class="i-modal-btn-loading" v-if="item.loading"></view>
                  <i-icon v-if="item.icon" :type="item.icon" i-class="i-modal-btn-icon"></i-icon>
                  <view class="i-modal-btn-text" :style="item.color ? 'color: ' + item.color : ''">{{ item.name }}</view>
                </button>
              </div>
            </block>
          </div>
          <div class="i-modal-actions" v-else>
            <div class="i-modal-grid" v-if="showOk">
              <div class="i-modal-grid-item" v-if="showCancel">
                <button class="i-btn i-btn-long i-btn-ghost i-btn-square i-modal-btn-cancel" long="true" type="ghost" @click="handleClickCancel" plain="true">{{cancelText}}</button>
              </div>
              <div class="i-modal-grid-item-last" v-if="showOk">
                <button class="i-btn i-btn-long i-btn-ghost i-btn-square i-modal-btn-ok" long="true" type="ghost" @click="handleClickOk" plain="true">{{okText}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    showOk: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    actions: {
      type: Array,
      default: []
    },
    actionMode: {
      type: String,
      default: 'horizontal'
    },
    iClass: {
      type: String,
      default: ''
    },
    iClassMask: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClickItem(evt) {
      const target = evt.currentTarget || evt.target
      const dataSet = target && target.dataset
      const {index} = dataSet
      this.$emit('click', {index})
    },
    handleClickOk() {
      this.$emit('ok')
    },
    handleClickCancel() {
      this.$emit('cancel')
    }
  }
}
</script>
