<template>
  <div class="detailbar">
    <div class="item" v-for="(item,index) in detailBarList"
    :key="index"
    @click="itemClick(index)"
    :class="{action:currentIndex == index}">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBar',
  props:{
    detailBarList:{
      type:Array,
       default() {
        return []
      }
    }
},
  data() {
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index) {
      this.currentIndex = index;
      switch(index) {
         case 0:this.$emit('detailBarClick','music'); 
         break;
         case 1:this.$emit('detailBarClick','recommend'); 
         break;
      }
    }
  }
}
</script>

<style scoped>
.detailbar {
  display: flex;
  height: 49px;
  font-size: 18px;
  border-bottom: 1px solid rgb(121, 119, 119);
  margin-top: 30px;
  padding-bottom: 20px;
}
.item {
   padding: 5px 20px;
   cursor: pointer;
}
.action{
  border-bottom: 2px solid #b82525;
  color: #b82525;
  height: 40px;
  font-weight: 700;
}
</style>