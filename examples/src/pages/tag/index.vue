<template>
  <div class="tag-example">
    <div class="one-tag">基本用法</div>
    <i-tag>标签一</i-tag>
    <div class="one-tag">设置边框配置</div>
    <i-tag 
      i-class="i-tags"
      name="标签一" 
      type="border" 
      color="red">
      标签一
    </i-tag>
    <i-tag 
      i-class="i-tags"
      name="标签一" 
      color="green"
      type="border">
      标签一
    </i-tag>
    <div class="one-tag">各种颜色配置</div>
    <i-tag 
      i-class="i-tags"
      name="单个标签">
      标签一
    </i-tag>
    <i-tag 
      i-class="i-tags"
      name="单个标签" 
      color="red">
      标签一
    </i-tag>
    <i-tag 
      i-class="i-tags" 
      name="标签一" 
      color="green">
      标签一
    </i-tag>
    <i-tag 
      i-class="i-tags" 
      name="标签一" 
      color="blue">
      标签一
    </i-tag>
    <i-tag 
      i-class="i-tags" 
      name="标签一" 
      color="yellow">
      标签一
    </i-tag>
    <div class="one-tag">多个标签</div>
    <i-tag 
      v-for="(item, index) in tags" 
      :key="index"
      @change="onChange" 
      checkable="true" 
      :inner-text="item.name"
      :name="index" 
      :color="item.color" 
      :checked="item.checked" 
      type="border"
      i-class="i-tags-margin">
      {{item.name}}
    </i-tag>
  </div>
</template>
<script>
import tag from '../../components/tag/tag'
export default {
  components: {
    'i-tag': tag
  },
  data() {
    return {
      oneChecked: false,
      tags: [
        {
          name : '标签一',
          checked : false,
          color : 'default'
        },
        {
          name : '标签二',
          checked : false,
          color : 'red'
        },
        {
          name : '标签三',
          checked : true,
          color : 'blue'
        },
        {
          name : '标签4️',
          checked : true,
          color : 'green'
        }
      ]
    }
  },
  methods: {
    oneChange(evt) {
      
    },
    onChange(evt) {
      this.tags[evt.name].checked = evt.checked
    }
  }
}
</script>
<style>
.tag-example{
  padding:10px;
}
.one-tag{
  font-size:14px;
  margin:20px 5px 5px 0;
}
.i-tags{
  margin:10px 5px 0 0;
}
.i-tags-margin{
  margin-right: 5px;
}
</style>
