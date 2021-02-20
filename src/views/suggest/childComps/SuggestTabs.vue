<template>
  <div class="playlists"
    ref="playlists">
    <top-playlist-card :topPlayList="topPlayList"></top-playlist-card>
    <div class="category" >
     <div class="tag-item" 
      v-for="(item,index) in tags"
      :key="index"
      @click="itemClick(index)"
      :class="{active:currentIndex==index}">
      {{item}}
     </div>
    
    </div>
    <music-list-card class="music-list" :playlists="playlists"></music-list-card>
    <el-pagination
     :page-size="50"
     :current-page.sync="currentPage"
     layout="prev, pager, next"
     :total="total"
     @current-change="onPageChange"
     class="pagination"
    >
     
   </el-pagination>
  </div>
  
</template>

<script>
import MusicListCard from './MusicListCard';
import TopPlaylistCard from './TopPlaylistCard';
import {getPlaylist,getHighquality} from 'network/playlist';
import { getPageOffset,scrollInto } from 'assets/common/tool';
export default {
  name:'SuggestTabs',
  components:{
    MusicListCard,
    TopPlaylistCard
   
  },
  props:{
    tags:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
      limit:50,
      offset:null,
      playlists: [],
      total: 0,
      topPlayList:[],
      currentPage: 0,
     
    }
  },
  created() {
  //  this.getPlaylist()
   getPlaylist(this.tags[0],this.limit,this.offset).then(res => {
      //  console.log(res);
       this.playlists = res.playlists
       this.total = res.total
      });
   getHighquality(this.tags[0],1).then(res => {
       this.topPlayList = res.playlists
        // console.log(res.playlists);
    })
  },
  methods:{
    itemClick(index) {
      this.currentIndex = index;
      // console.log(getPageOffset(this.currentPage,this.limit));
      getPlaylist(this.tags[this.currentIndex],this.limit,getPageOffset(this.currentPage,this.limit)).then(res => {
      //  console.log(res);
       this.playlists = res.playlists
       this.total = res.total
      });
      getHighquality(this.tags[this.currentIndex],1).then(res => {
       this.topPlayList = res.playlists
        // console.log(res.playlists);
    })
    
    },
    onPageChange(page) {
      this.currentPage = page
      getPlaylist(this.tags[this.currentIndex],this.limit,getPageOffset(this.currentPage,this.limit)).then(res => {
      //  console.log(res);
       this.playlists = res.playlists
       this.total = res.total
       scrollInto(this.$refs.playlists)
      });
    },
   
  }
}
</script>

<style scoped>
.category {
  display: flex;
  
}
.tag-item {
  margin:20px 20px 20px 20px;
  font-size: 15px;
  cursor: pointer;
  color: rgb(121, 120, 120);
  height: 30px;
  float: right;
 
}
.tag-item:hover {
  color:  rgb(167, 165, 165);;
}
.active {
  color: orange;
}
.el-pagination {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 110px;
  
}

.el-pagination >>> .el-pager li {
  background:  #252525;
  color: rgb(193, 194, 194);
}
.el-pagination >>> button {
   background:  #252525;
   color: rgb(193, 194, 194);
}
.el-pagination >>> .el-pager li.active {
    color: orange;
    cursor: default;
}
</style>