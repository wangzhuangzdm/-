<template>
 <div>
    <div class="title">推荐MV</div>
    <div class="mvlist">
      <div class="mvlist-card" v-for="(item,index) in mvlist" :key="item.id"
      @click="playMvClick(item.id)">
        <div class="mvimg-wrap">
           <img :src="item.picUrl" alt="" class="mvimg">
        </div>
        <div class="button">
          <img src="~assets/img/content/1.png" alt="" class="button-img">
        </div>
        <div class="mvcontent">
          <p class="mvname">{{item.name}}</p>
          <p class="mvacter">{{item.artists[0].name}}</p>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import {  getHomeMv } from "network/playlist";
// import {  getMVUrl } from "network/mv";

export default {
  name:'HomeMv',
  data() {
    return {
      mvlist:[]
    }
  },
  created() {
    getHomeMv().then(res => {
      this.mvlist = res.result
      console.log( this.mvlist);
    })
  },
  methods:{
    playMvClick(id) {
       this.$router.push('/playmv/'+id)
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 20px;
  color: #DCDDE4;
  margin: 40px 0 25px 25px;
}
.mvlist {
   display: flex;
   width: 100%;
   margin-bottom: 80px;
   
}
.mvlist-card {
  position: relative;
  cursor: pointer;
  width: 100%;
  flex: 1;
  
  
}

.mvimg-wrap {
   width: 100%;
   padding: 10px;
}
.mvimg-wrap .mvimg {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.button {
  position: absolute;
  bottom: 80px;
  right: 36px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  transition: all,0.4s;
}
.mvlist-card:hover .button {
  opacity: 1;
}
.button .button-img {
  width: 100%;
  height: 100%;
}
.mvcontent .mvname {
  text-align: left;
  color: #DCDDE4;
  font-size: 12px;
  padding: 10px;
  width: 200px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
   
}
.mvcontent .mvacter {
  color: #B1B1B1;
  font-size: 12px;
  padding-left: 10px;
}
</style>