<template>
  <div class="new-mv">
    <new-mv-card 
    :areaTabs="areaTabs"
    :typeTabs="typeTabs"
    :sortTabs="sortTabs"
    ></new-mv-card>
  </div>
</template>

<script>
import NewMvCard from './childComp/NewMvCard';
export default {
  name:'NewMv',
  components:{
    NewMvCard
  },
  data() {
   return {
    areaTabs:["全部", "内地", "港台", "欧美", "日本", "韩国"],
    typeTabs:["全部", "官方版", "原声", "现场版", "网易出品"],
    sortTabs:["上升最快", "最热", "最新"],
   }
  }
}
</script>

<style  scoped>
.new-mv {
  position: fixed;
  overflow: auto;
  top: 54px;
  left: 18%;
  width: 82%;
  padding: 20px 80px;
  background-color: #252525;
  height: 100%;
}
</style>