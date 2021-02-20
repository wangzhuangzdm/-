<template>
  <div class="playmusic">
    <div class="top">
      <div
        class="music-top-icon"
        v-if="this.$store.state.musicArtists.length!=0"
      >
        <img :src="this.$store.state.musicArtists[0].img1v1Url" alt />
      </div>
      <div class="music-top-center" v-if="this.$store.state.musicArtists.length!=0">
        <div class="music-title">{{this.$store.state.musicArtists[0].name}}</div>
      </div>
    </div>

    <div class="playmusic-button">
      <!-- 上一首，下一首暂停 -->
      <div class="pre">
        <img src="~assets/img/playmusic/pre.png" alt />
      </div>
      <div class="play" @click="playClick">
        <img src="~assets/img/playmusic/play.png" alt v-show="!this.$store.state.isPlay"/>
        <img src="~assets/img/playmusic/play2.png" alt v-show="this.$store.state.isPlay"/>
      </div>
      <div class="netx">
        <img src="~assets/img/playmusic/next.png" alt />
      </div>
    </div>
   
   <div class="play-right">
      <audio :src="this.$store.state.url" autoplay 
      ref="audio"
      @timeupdate="audioTimeUpdate"></audio>
      <!-- 歌曲进度条 -->
      <div class="music-pro">
        <div class="currentTime">{{currentTime}}</div>
        <music-progress class="progress" 
        @childclick="setMusicCurrent" 
        ref="music_pro"></music-progress>
        <div class="totalTime">{{duration}}</div>
      </div>
      <!-- 调节声音 -->
      <div class="volumn">
        <div class="volumn-icon" @click="iconClick">
          <img src="~assets/img/playmusic/volumn.svg" alt v-show="!isShow" />
          <img src="~assets/img/playmusic/novolumn.svg" alt class="vol-img" v-show="isShow"/>
        </div>
        <volumn-progress ref="volume_pro" class="v-pro" @childclick="setVolume" />
      </div>
      <!-- 播放顺序，歌词 -->
      <div class="icon">
        <div class="schema" @click="toggleSchema">
          <a href="#" title="顺序播放" v-show="schemaIndex==0">
            <img src="~assets/img/playmusic/sunxubofang.svg" />
          </a>
          <a href="#" title="随机播放" v-show="schemaIndex==1">
            <img src="~assets/img/playmusic/suijibofang.svg" />
          </a>
          <a href="#" title="单曲循环" v-show="schemaIndex==2">
            <img src="~assets/img/playmusic/danquxunhuan.svg" />
          </a>
        </div>
       
         <el-button :plain="true" @click="toggleLyric" class="music-lyric" >
            <a href="#" title="歌词" v-show="!isLyric">
            <img src="~assets/img/playmusic/lyric.svg"  />
          </a>
          <a href="#" title="歌词" v-show="isLyric">
            <img src="~assets/img/playmusic/lyric-click.svg" />
          </a>
         </el-button>
        <div class="music-list">
          <a href="#" title="歌单">
            <img src="~assets/img/playmusic/list.svg" alt />
          </a>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import MusicProgress from 'components/common/progress/Progress';
import VolumnProgress from "components/common/progress/Progress";
import {mapMutations} from 'vuex';
import { formatDate } from "assets/common/tool";
// import {getSongUrl} from 'network/suggest';
export default {
  name:'PlayMusic',
  components:{
    MusicProgress,
    VolumnProgress
  },
  data() {
   return {
      play:false,
      songId:0,
      songUrl:'',
      currentTime:'00:00',
      duration:'00:00',
      isShow:false,
      musicVolume:0,
      schemaIndex: 0,
      isLyric:false,
      artists:{}
   }
  },

  methods:{
    ...mapMutations(['musicArtists']),
    playClick() {
      const audio = this.$refs.audio
      // console.log(audio.paused);
     if(audio.paused) {
       //audio.play();// 这个就是播放  
        audio.play();
     }else {
       // 这个就是暂停
       audio.pause();
     }
     this.$store.state.isPlay = !this.$store.state.isPlay
    //  console.log(this.$store.state.musicArtists);
      // console.log(this.$store.state.sugSongsid);
    },
    //播放时间改变时，进度条
    audioTimeUpdate() {
      // if (this.$refs.audio != null) {
        this.currentTime = formatDate(
          new Date(this.$refs.audio.currentTime * 1000),
          "mm:ss"
        );
        this.duration = formatDate(
          new Date(this.$refs.audio.duration * 1000),
          "mm:ss"
        );
        let scale = this.$refs.audio.currentTime / this.$refs.audio.duration;
        this.$refs.music_pro.setProgress(scale);
        
      // }
    },
    //手动点击进度条
   setMusicCurrent(scale) {
      this.$refs.audio.currentTime = scale * this.$refs.audio.duration;
    },
    // 声音控制
   iconClick() {
     this.isShow = !this.isShow;
     if(this.isShow) {
       this.$refs.audio.volume = 0.0;
     }else {
        this.$refs.audio.volume =  this.musicVolume;
        // this.$refs.volume_pro && this.$refs.volume_pro.setProgress(0.8);
     }
    },
    // 声音滑动条
   setVolume(scale) {
     this.$refs.audio.volume = scale;
     this.musicVolume = scale
    },
    // 播放模式切换
   toggleSchema() {
     if(this.schemaIndex >=2) {
       this.schemaIndex=0
     }else {
       this.schemaIndex++
     }
   },
  //  toggleLyric() {
  //   this.isLyric = !this.isLyric;
  //   },
   toggleLyric() {
     this.isLyric = !this.isLyric;
     this.$message({
       showClose: true,
       message: '还没有歌词哦',
       type: 'error'
     });
   }
  }
}
</script>

<style scoped>
.playmusic {
  display: flex;
  position: fixed;
  bottom: 0;
  height: 6.5%;
  width: 100%;
  background-color: #252525;
}
.play-right {
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
  margin-left: 20px;
}
.music-pro {
  display: flex;
  justify-content: space-between;
  width: 100%;
 
}
.progress {
  margin-top: 8px;
}
.playmusic-button {
  display: flex;
  width: 15%;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.pre img,
.netx img {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
}
.play img {
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.volumn {
  display: flex;
  width: 15%;
  margin-left: 50px;
}
.volumn-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.volumn-icon img {
  width: 100%;
  height: 100%;
}
.v-pro {
  margin-top:8px;
}
.icon {
  display: flex;
  height: 100%;
  margin-left: 30px;
  
  
}
.schema {
  display: flex;
  align-items: center;
}
.schema img {
  width: 22px;
  height: 22px;
}
.music-lyric {
  display: flex;
  align-items: center;
  margin: 0 30px;
  background-color: #252525;
  border: none;
}
.music-lyric:hover {
  background-color: #252525;
}
.music-lyric img {
  width: 25px;
  height: 25px;
}
.music-list {
 display: flex;
 align-items: center;
}
.music-list img {
  width: 25px;
  height: 25px;
}

.top {
  width: 15%;
  height: 100%;
  position: absolute;
  left: 0px;
  bottom: 59px;
  display: flex;
  background: #202020;
}
.music-top-icon {
  height: 100%;
}
.music-top-icon img {
  height: 100%;
}
.music-top-center {
  width: 100px;
  font-size: 13px;
  position: relative;
  left: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.music-title {
  font-size: 13px;
  color: #fff;
  margin: 20px 0 0 5px;
}
</style>