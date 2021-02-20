<template>
  <div class="tab-bar">
    <logo></logo>
    <music-search class="music-search"></music-search>
    <login></login>
  </div>
</template>

<script>
import MusicSearch from '../search/MusicSearch';
import Logo from './childComps/Logo';
import Login from '../login/Login';
export default {
  name:'TabBar',
  components:{
    MusicSearch,
    Logo,
    Login
  }
}
</script>

<style scoped>
.tab-bar {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  background-color: #252525;
  z-index: 9;
 
}


</style>