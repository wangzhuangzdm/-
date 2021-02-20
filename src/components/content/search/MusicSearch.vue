<template>
  <div class="search" @mouseleave="leave" @mousemove="move">
    <div class="search-item">
      <input type="text" class="search-mess" placeholder="音乐" 
      v-model="keywords" 
     
      @focus="searchFocus">
      <div class="search-icon">
       <img src="~assets/img/content/search.svg" alt />
      </div>
    </div>

    <div class="suggest" v-show="isShow">
      <div class="top">
        搜索 
        <span>"{{keywords}}"</span>相关的结果
      </div>
      <dl>
        <dt>
          <div class="suggest-icon">
             <img src="~assets/img/leftmenu/music-line.svg" alt />
         <div class="title">单曲</div>
          </div>
           
          <dd v-for="(item,index) in sugSongs" :key="item.id" @click="playMusic(item.id,index)">
            {{item.name}}——{{item.artists[0].name}}
          </dd>

        </dt>
      </dl>
    </div>
  </div>
</template>

<script>
import { Search } from "network/suggest";
// import {getSongUrl} from 'network/suggest';

export default {
  name:'MusicSearch',
  components:{
  },
  data() {
    return {
     keywords:"",
     sugSongs:[],
     musicArtists:[],
    //  sugArtist:[]
    isShow:false,
     songId:0,
    }
  },
 
  methods:{
   suggest() {
     Search(this.keywords).then(res => {
       
     this.sugSongs = res.result.songs
    //  this.sugArtist = res.result.artists
    //  this.$store.commit('searchSongs',this.sugSongs);
     console.log (this.sugSongs );
     })
   
   },

  //   searchBlur() {
  //   this.isShow = false;
  //  },
   searchFocus() {
     if(this.keywords.trim() !== "") {
        this.isShow = true;
     } 
     
   },
    leave() {
      this.isShow = false;
   },
    move() {
       if(this.keywords.trim() !== "") {
        this.isShow = true;
     } 
   },
    playMusic(id,index) {
    //  let songUrl = ''; 
     this.songId = id
     this.isShow = false;
     this.$store.dispatch('getSugId',id);
    //  this.$store.dispatch('getMusicListDetai',id);
    
     this.musicArtists =  this.sugSongs[index].artists
    
     this.$store.commit('musicArtists',this.musicArtists)
    //  console.log( this.songId);
    
    // getMusicListDetai(38633300).then(res=>{
    //   console.log(res);
    // })
   }
  },
  watch: {
   keywords() {
      if(this.keywords.trim() !== "") {
        this.suggest();
        this.isShow = true;
      } else {
        this.isShow = false;
     }
   }
  }
}
</script>

<style scoped>
.search {
 height: 100%;
  width: 300px;
 position: relative;
  
}
.search-item {
  display: flex;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  height: 50%;
  padding-left: 15px;
position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  border-radius: 10px;
  
}
.search-mess {
 outline-style: none;
    height: 100%;
 width: 80%;
   color: #333;
 border: #f6f6f6;
 font-size: 14px;
}
.search-icon {
 
   cursor: pointer;
  position: absolute;
  top: -2px;
right: 5px;
}

.suggest {
   position: absolute;
  top: 54px;
   width: 400px;
   height: 200px;
  background: #2d2f33;
  overflow: auto;
   z-index: 4;
  padding: 10px;
  color: #828385;
}

.top {
  font-size: 13px;
  
}
.top span {
  color: #2e6bb0;
}
.title {
  font-size: 14px;
  color: #f6f6f6;
  margin-left: 3px;
}
.suggest-icon img {
  width: 18px;
  height: 18px;
   margin-left: 6px;
}
.suggest-icon {
  display: flex;
 
}
dl {
  
  width: 100%;
  font-size: 14px;
}
dl dt {
  
 
    width: 100%;
 background: #303236;
 padding: 5px 8px;
  margin-top: 5px;
  background: #303236;
}
dl dd {
  cursor: pointer;
  padding: 5px 31px;
}
dd:hover {
  background: #2a2c30;
}
</style>