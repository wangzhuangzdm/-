<template>
  <div class="music-item" v-if="musiclist!=null">
    <table cellspacing="0">
      <thead>
       <tr>
        <th colspan="1" rowspan="1"></th>
        <th></th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
       </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in musiclist" :key="index" @click="itemClick(item.id)">
         <td>{{index-0+1}}</td>
         <td>
           <img :src="item.pic" alt="">
         </td>
         <td >{{item.name}}</td>
         <td>{{item.song}}</td>
         <td>{{item.album}}</td>
         <td>{{item.time}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {getSongUrl} from "network/suggest"
export default {
  name:'MusicItem',
  props:{
    musiclist:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods:{
    itemClick(id) {
     getSongUrl(id).then(res => {
      this.$store.commit('playMusic',res)
    })
  }
  }
}
</script>

<style scoped>
.music-item {
  width: 100%;
}
.music-item table{
  width: 100%;
  text-align: left;
  
}
.music-item thead{
  color: #828385;
  font-size: 14px;
  
}
.music-item thead tr th{
  padding-top: 10px;
}
.music-item thead tr th:nth-child(3){
  color: rgb(221, 221, 218);
}
.music-item tbody tr {
  font-size: 12px;
}
.music-item tbody tr:hover {
  background: #404041;
  color: rgb(221, 221, 218);
}
.music-item tbody td:nth-child(1) {
 width: 50px;
 text-align: center;
}
.music-item tbody td:last-child {
  width: 80px;
}
.music-item tbody td:nth-child(3) {
 color: rgb(221, 221, 218);
}
.music-item tbody td img {
  width: 60px;
  height: 60px;
  margin: 5px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>