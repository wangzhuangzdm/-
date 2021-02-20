<template>
  <div class="simi">
    <div class="simi-item" v-for="(item,index) in mvList" :key="index" @click="playMV(item.id)">
      <div class="left">
        <img :src="item.cover" alt="">
        <div class="count">
          <img src="~assets/img/leftmenu/shiping.svg" alt="">
          <div class="play-count">{{item.count}}</div>
        </div>
        <div class="playmv">
          <img src="~assets/img/content/1.png" alt="">
        </div>
      </div>
       <div class="right">
        <div class="name">
          <span>MV</span>
          {{item.name}}
        </div>
          <div class="artist">{{item.artist}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SimiMvItem',
  props:{
    mvList:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods:{
    playMV(id){
     this.$router.push('/playmv/'+id)
     location.reload()
  }
 }
}
</script>

<style scoped>
.simi{
  width: 100%;
}
.simi-item{
  width: 100%;
  margin-top: 10px;
  display: flex;
}
.simi-item:hover {
  background-color: rgb(49, 49, 49);
}
.left {
  position: relative;
  width: 200px;
 cursor: pointer;
}
.left:hover .playmv {
  opacity: 1;
}
.left>img {
  width: 100%;
}
.count {
 display: flex;
 height: 20px;
 position: absolute;
 top: 0px;
 right: 0px;
 align-items: center;
 background: rgba(0, 0, 0, .25);
 padding: 3px 5px;
}
.play-count {
  font-size: 12px;
  color: azure;
  margin-left: 3px;
}
.count>img {
 width: 40%;
}
.playmv {
  position: absolute;
  top: 39px;
  left: 87px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s;
}
.playmv>img {
  width: 100%;
  height: 100%;
}
.right{
 flex: 1;
 padding:5px 5px 0 10px;
 margin-top: 25px;
}
.right span{
 padding: 1px;
 color: red;
 font-size: 13px;
 border: 1px solid red;
}
.name {
  font-size: 13px;
  color: azure;
  line-height: 20px;
}
.artist {
  font-size: 12px;
  color: rgb(176, 180, 180);
  margin-top: 15px;
  
}
</style>