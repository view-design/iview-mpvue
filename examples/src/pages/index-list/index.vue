<template>
  <div class="i-index-demo">
    <i-index height="100%" :data-set="cities" i-item-class="i-index-demo-item" @change="onChange"></i-index>
  </div>
</template>
<script>
import { cities } from './city'
import iIndex from '../../components/index-list/index-list'
export default {
  components: {
    'i-index': iIndex
  },
  mounted() {

  },
  data() {
    let storeCity = new Array(26)
    const words = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    words.forEach((item,index)=>{
      storeCity[index] = {
          key : item,
          list : []
      }
    })
    cities.forEach((item)=>{
      let firstName = item.pinyin.substring(0,1)
      let index = words.indexOf( firstName )
      storeCity[index].list.push({
          name : item.name,
          key : firstName
      })
    })
    return {
      cities: storeCity
    }
  },
  methods: {
    onChange() {

    }
  }
}
</script>
<style>
.i-index-demo, page {
    width:100%;
    height:100%;
}
.i-index-demo-item{
    padding:10px;
    border-bottom:#ddd solid 1rpx;
    font-size:14px;
}
</style>
