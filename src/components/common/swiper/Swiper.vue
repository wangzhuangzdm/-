<template>
   <el-carousel :interval="4000" type="card" height="230px"  class="banner-carousel">
    <el-carousel-item v-for="(item,index) in banners" :key="index" class="banner">
     <img :src="item.imageUrl" alt=""  class="banner-img">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import {getBanner} from 'network/discover';
export default {
  name:'Swiper',
  data() {
    return {
      banners:[]
    }
  },
 async created() {
  //  const banners  = await  getBanner()
  //  console.log(banners[0].imageUrl);
  getBanner().then(res=>{
    this.banners = res.banners;
  })
  }
}
</script>

<style scoped>
.banner {
  width: 50%;
  height: 100%;
}
 .banner-img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
</style>