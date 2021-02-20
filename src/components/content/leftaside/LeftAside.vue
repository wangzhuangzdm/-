<template>
  <div class="left-aside">
    <div class="aside-item" v-for="(item,index) in list" 
    :key="index" @click="clickItem(index,item.link)" 
    :class="{active:index === currentIndex}">
       <img :src="item.image" alt />
       <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'LeftAside',
 
data() {
  return {
    list: [
      {
        link: "/home",
        image: require("assets/img/leftmenu/music.svg"),
        title: "发现音乐"
      },
      {
        link: "/suggest",
        image: require("assets/img/leftmenu/music-line.svg"),
        title: "推荐歌单"
      },
      {
        link: "/newsongs",
        image: require("assets/img/leftmenu/zhibo.svg"),
        title: "最新音乐"
      },
      {
        link: "/newmv",
        image: require("assets/img/leftmenu/mv.svg"),
        title: "最新MV"
      },
    ],
    currentIndex: 0
  };
  },
  methods:{
    clickItem(index,link) {
      this.currentIndex = index;
    
  this.$router.push(link)
      // console.log(this.currentIndex);
    }
  }
}
</script>

<style scoped>
.left-aside {
  position: fixed;
  top: 54px;
  left: 0;
  background: #202020;
  width: 18%;
  height: calc(100% - 54px - 59px);
   border-right: 1px solid #23262c;
  color: #fff;
 height: 100%;
}
.aside-item {
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  padding: 5px 15px;
  font-size: 14px;
  opacity: 0.6;
  padding-left: 1px;
  transition: all 0.5s;
  width: 100%;
}
.aside-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin: 0 10px;
}
.aside-item:hover {
  opacity: 1;
  background: #26282c;
  padding-left: 10px;
}
.active {
  border-left: 5px solid #b82525;
  background: #26282c;
}
</style>