<template>
  <div>
    <div style="margin-top: 100px">
      <i-button type="ghost" @click="handleOpen1">一般用法</i-button>
      <i-button type="ghost" @click="handleOpen2">带有提示、异步</i-button>
    </div>
    <i-action-sheet :visible="visible1" :actions="actions1" show-cancel="true" @cancel="handleCancel1" @click="handleClickItem1"></i-action-sheet>
    <i-action-sheet :visible="visible2" :actions="actions2" show-cancel="true" @cancel="handleCancel2" @click="handleClickItem2" mask-closable="false">
      <div slot="header" style="padding: 16px">
        <div style="color: #444;font-size:16px;">确定吗?</div>
        <div>删除后无法恢复哦</div>
      </div>
    </i-action-sheet>
    <i-message ref="message"></i-message>
  </div>
</template>
<script>
import {$Message} from '../../components/base/index'
import button from '../../components/button/button'
import actionSheet from '../../components/action-sheet/action-sheet'
import message from '../../components/message/message'
export default {
  components: {
    'i-button': button,
    'i-action-sheet': actionSheet,
    'i-message':message
  },
  data() {
    return {
      visible1: false,
      visible2: false,
      actions1: [
        {
          name: '选项1'
        },
        {
          name: '选项2'
        },
        {
          name: '去分享',
          icon: 'share',
          openType: 'share'
        }
      ],
      actions2: [
        {
          name: '删除',
          color: '#ed3f14'
        }
      ]
    }
  },
  onShareAppMessage() {
    return {
      title: 'iView Weapp',
      imageUrl: 'https://file.iviewui.com/iview-weapp-logo.png'
    };
  },
  methods: {
    handleOpen1() {
      this.visible1 = true
    },
    handleOpen2() {
      this.visible2 = true
    },
    handleCancel1() {
      this.visible1 = false
    },
    handleCancel2() {
      this.visible2 = false
    },
    handleClickItem1(evt) {
      const index = evt.index + 1
      $Message(this, {content: index})
    },
    handleClickItem2(evt) {
      const action = [...this.actions2]
      action[0].loading = true
      this.actions2 = action
      setTimeout(() => {
        action[0].loading = false
        this.visible2 = false
        this.actions2 = action
        $Message(this, {
          content: '删除成功',
          type: 'success'
        })
      }, 2000)
    }
  }
}
</script>

