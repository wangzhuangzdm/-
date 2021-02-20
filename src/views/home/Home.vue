<template>
  <div class="home">
   <div class="warp">
      <swiper></swiper>
      <home-songs class="home-songs"></home-songs>
   </div>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper';
import HomeSongs from './childComps/HomeSongs';
export default {
  name:'Home',
  components:{
    Swiper,
    HomeSongs
  }
}
</script>

<style  scoped>
.home {
  position: relative;
  top: 54px;
  left: 18%;
  width: 82%;
  /* height: calc(100% - 54px - 59px); */
  padding: 20px;
  background-color: #252525;
 /* height: 100vh; */
 
  /* height: 1000px; */
}
.warp {
  margin: 0 120px;
  height: 100%;
   
}
</style>