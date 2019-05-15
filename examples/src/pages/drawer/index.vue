<template>
  <div>
    <i-button @click="toggleLeft1" type="ghost">左边弹出1</i-button>
    <i-button @click="toggleLeft2" type="primary">左边弹出2</i-button>
    <i-button @click="toggleRight1" type="ghost">右边弹出1</i-button>
    <i-button @click="toggleRight2" type="primary">右边弹出2</i-button>
    <i-drawer mode="left" :visible="showLeft1" @click="toggleLeft1">
      <view class="demo-container">
        单击遮罩层关闭
      </view>
    </i-drawer>
    <i-drawer mode="left" :visible="showLeft2" mask-closable="false">
      <view class="demo-container">
        禁止单击遮罩关闭
        <i-button @click="toggleLeft2" type="primary">关闭</i-button>
      </view>
    </i-drawer>
    <i-drawer mode="right" :visible="showRight1" @click="toggleRight1">
      <view class="demo-container">
        单击遮罩层关闭
      </view>
    </i-drawer>
    <i-drawer mode="right" :visible="showRight2" mask-closable="false">
      <view class="demo-container">
        禁止单击遮罩关闭
        <i-button @click="toggleRight2" type="primary">关闭</i-button>
      </view>
    </i-drawer>
  </div>  
</template>
<script>
import button from '../../components/button/button'
import drawer from '../../components/drawer/drawer'
export default {
  components: {
    'i-button': button,
    'i-drawer': drawer
  },
  data() {
    return {
      showLeft1: false,
      showLeft2: false,
      showRight1: false,
      showRight2: false
    }
  },
  methods: {
    toggleLeft1() {
      this.showLeft1 = !this.showLeft1
    },
    toggleLeft2() {
      this.showLeft2 = !this.showLeft2
    },
    toggleRight1() {
      this.showRight1 = !this.showRight1
    },
    toggleRight2() {
      this.showRight2 = !this.showRight2
    }
  }
}
</script>
<style>
.demo-container{
	width:50vw;
	height: 100vh;
	background:#fff;
}
</style>

