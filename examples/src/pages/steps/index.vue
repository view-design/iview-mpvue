<template>
  <div class="i-steps-demo">
    <div class="one-tag">基本用法</div>
    <i-steps ref="stepsBar">
        <i-step status="finish" order="0">
            <div slot="title">
                  已完成
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
        <i-step status="process" order="1">
            <div slot="title">
                进行中
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
        <i-step status="" order="2">
            <div slot="title">
                错误
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
    </i-steps>
    
     <div class="one-tag">使用 icon 图标</div>
    <i-steps>
        <i-step status="finish" icon="barrage" order="0">
            <div slot="title">
                  已完成
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
        <i-step status="process" icon="brush" order="1">
            <div slot="title">
                进行中
            </div>
            <div slot="content" icon="camera">
                这里是该步骤的描述信息
            </div>
        </i-step>
        <i-step  icon="collection" order="2">
            <div slot="title">
                错误
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
    </i-steps>

    <div class="one-tag">步骤进度</div>
    <i-steps :current="current">
        <i-step order="0">
            <div slot="title">
                  已完成
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
        <i-step order="1">
            <div slot="title">
                进行中
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
        <i-step order="2">
            <div slot="title">
                错误
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
    </i-steps>
    <i-button @click="handleClick">下一步</i-button>

    <div class="one-tag">垂直方向</div>
    <i-steps :current="verticalCurrent" direction="vertical">
        <i-step order="0">
            <div slot="title">
                  已完成
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
        <i-step order="1">
            <div slot="title">
                进行中
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
        <i-step order="2">
            <div slot="title">
                错误
            </div>
            <div slot="content">
                这里是该步骤的描述信息
            </div>
        </i-step>
    </i-steps>
  </div>
</template>
<script>
import step from '../../components/step/step'
import steps from '../../components/steps/steps'
import button from '../../components/button/button'
export default {
  components: {
    'i-step': step,
    'i-steps': steps,
    'i-button': button
  },
  data() {
    return {
      current : 2,
      verticalCurrent : 2
    }
  },
  methods: {
    handleClick() {
      const addCurrent = this.current + 1
      const current = addCurrent > 2 ? 0 : addCurrent
      this.current = current
    }
  },
  mounted() {
      this.$nextTick(() => {
          console.log(this.$refs.stepsBar)
      })
  },
}
</script>
<style>
.i-steps-demo{
    margin:20px;
}
.one-tag{
    font-size:14px;
    margin:30px 5px 20px 0;
}
</style>

