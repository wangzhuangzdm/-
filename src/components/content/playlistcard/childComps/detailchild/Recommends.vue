<template>
  <div class="recommend" v-if="recommends.comments!=null">
    <div class="content">
      <div class="good-remd">
        <p>精彩评论</p>
        <div class="good-remd-cont" v-for="(item,index) in recommends.hotComments">
          <div class="userlogo">
            <img :src="item.user.avatarUrl" alt="">
          </div>
          <div class="mess">
            <div class="top">
              <span>{{item.user.nickname}}：</span>
               {{item.content}}
            </div>
             <div class="bottom">{{formatDate(item.time)}}</div>
          </div>
        </div>
      </div>

      <div class="good-remd">
        <p>最新评论 ({{recommends.comments.length}})</p>
        <div class="good-remd-cont" v-for="(item,index) in recommends.comments">
          <div class="userlogo">
            <img :src="item.user.avatarUrl" alt="">
          </div>
           <div class="mess">
            <div class="top">
              <span>{{item.user.nickname}}：</span>
               {{item.content}}
            </div>
             <div class="bottom">{{formatDate(item.time)}}</div>
          </div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "assets/common/tool";
export default {
  name:'Recommends',
  props:{
    recommends:{
      type:Object,
      default() {
        return {}
      }
    },
  },
  methods:{
      formatDate(data) {
      return formatDate(new Date(data), "yyyy年MM月dd日 hh:mm:ss");
    },
  }
}
</script>

<style scoped>
.good-remd {
  margin-bottom: 50px;
}
.recommend .content p {
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0;
  
}
.recommend .content {
  width: 100%;
  font-size: 13px;
  color: var(--color-text-tint);

}
.recommend .good-remd-cont {
  display: flex;
  margin-bottom: 30px;
}
.mess {
  margin-left: 15px;
}
.top {
  padding: 2px 0 5px 0;
  line-height: 20px;
}
.top span {
  color: rgb(33, 89, 209);
}
.bottom {
  font-size: 10px;
  color: rgb(139, 139, 139);
}

</style>