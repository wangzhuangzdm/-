<template>
  <div class="music-item">
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
        <tr v-for="(item,index) in songs" :key="item.id" @click="itemClick(item.id)">
         <td>{{index-0+1}}</td>
         <td>
           <img :src="item.album.picUrl" alt="">
         </td>
         <td >{{item.name}}</td>
         <td>{{item.artists[0].name}}</td>
         <td>{{item.album.name}}</td>
         <td>04:12</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import {formatDate} from "assets/common/tool";
import {getSongUrl} from "network/suggest"
export default {
  name:'MusicItem',
  props:{
    songs:{
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
  },
  
  },
}
</script>

<style scoped>
.music-item {
  width: 100%;
  margin-bottom: 100px;
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