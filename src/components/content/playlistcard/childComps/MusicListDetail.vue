<template>
  <div class="detail">
    <detail-base-info :musiclist="musiclist" :baseInfo="baseInfo"></detail-base-info>
    <detail-bar :detailBarList="detailBarList" :commentCount="commentCount" @detailBarClick="detailBarClick"></detail-bar>
    <music-item :musiclist="musiclist" v-show="isShow=='music'"></music-item>
    <recommends :recommends="recommends" v-show="isShow=='recommend'"></recommends>
    </div>
</template>

<script>
import DetailBaseInfo from 'components/content/playlistcard/childComps/detailchild/DetailBaseInfo';
import DetailBar from 'components/content/playlistcard/childComps/detailchild/DetailBar';
import MusicItem from 'components/content/playlistcard/childComps/detailchild/MusicItem';
import Recommends from 'components/content/playlistcard/childComps/detailchild/Recommends';

import {
  getMusicListDetail,
  baseInfo,
  getSongsDetail,
  songDetail,
  getRecommends
} from "network/detail";

export default {
  name:'MusicListDetail',
  components:{
    DetailBaseInfo,
    DetailBar,
    MusicItem,
    Recommends
   
  },
  data() {
    return {
      musicListDetail:null,
      baseInfo: null,
      commentCount:0,
      detailBarList:[],
      musicItemSong:[],
      musiclist:[],
      isShow:'music',
      recommends: {},
      limit:20,
      // hotCommends:[]
    }
  },
  created() {
   this.id=this.$route.params.id
   getMusicListDetail(this.id).then(res => {
     console.log(res);
     this.musicListDetail = res;
     this.baseInfo = new baseInfo(this.musicListDetail.playlist)
     this.commentCount = this.musicListDetail.playlist.commentCount
     let str = "评论(" + this.commentCount + ")";
     this.detailBarList = ["歌曲列表", str];
     for(let i of this.musicListDetail.playlist.trackIds) {
        getSongsDetail(i.id).then(res => {
          this.musicItemSong = res.songs
          let song = new songDetail(this.musicItemSong);
          this.musiclist.push(song);
          // console.log(this.musicItemSong);
        })
     };
      getRecommends(this.id, this.limit).then(res => {
       
        this.recommends = res;
        // this.hotCommends = res.hotCommends
        //  console.log(this.recommends);
      });
   })
  },
  methods:{
    detailBarClick(str) {
      this.isShow = str;
    }
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  overflow: auto;
  top: 54px;
  left: 18%;
  width: 82%;
  padding: 50px;
  background-color: #252525;
  height: 100%;
}
</style>