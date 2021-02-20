<template>
  <div id="app">
   <tab-bar></tab-bar>
   <left-aside></left-aside>
   <router-view></router-view>
   <play-music></play-music>
  </div>
</template>
<script>
import TabBar from 'components/content/tabbar/TabBar';
import LeftAside from 'components/content/leftaside/LeftAside';
import PlayMusic from 'components/content/playmusic/PlayMusic'
export default {
  name:'App',
  components:{
    TabBar,
    LeftAside,
    PlayMusic
  }
}
</script>
<style>
@import "assets/css/base.css";
</style>
