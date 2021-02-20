<template>
    <div class="mvlist" v-if="mvList.length !== 0">
      <div class="mvlist-card" v-for="(item,index) in mvList" :key="item.id"
      @click="playMvClick(item.id)">
        <div class="mvimg-wrap">
           <img :src="item.cover" alt="" class="mvimg">
        </div>
        <div class="button">
          <img src="~assets/img/content/1.png" alt="" class="button-img">
        </div>
        <div class="mvcontent">
          <p class="mvname">{{item.name}}</p>
          <p class="mvacter">{{item.artist}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'NewMvItem',
  props:{
    mvList:{
      type:Array,
      default() {
        return {}
      }
    }
  },
  methods:{
    playMvClick(id) {
       this.$router.push('/playmv/'+id)
    }
  }
}
</script>

<style scoped>
.mvlist {
   display: flex;
   width: 100%;
   margin-bottom: 80px;
   flex-wrap: wrap;
   
}
.mvlist-card {
  position: relative;
  cursor: pointer;
  width: 25%;
 
  
  
}

.mvimg-wrap {
   width: 100%;
   padding: 10px;
}
.mvimg-wrap .mvimg {
  width: 100%;
  /* height: 100%; */
  border-radius: 4px;
}
.button {
  position: absolute;
  bottom: 80px;
  right: 36px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  transition: all,0.4s;
}
.mvlist-card:hover .button {
  opacity: 1;
}
.button .button-img {
  width: 100%;
  height: 100%;
}
.mvcontent .mvname {
  text-align: left;
  color: #DCDDE4;
  font-size: 12px;
  padding: 10px;
  width: 200px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
   
}
.mvcontent .mvacter {
  color: #B1B1B1;
  font-size: 12px;
  padding-left: 10px;
}
</style>