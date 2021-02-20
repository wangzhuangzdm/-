<template>
  <div class="newmv-card" 
  ref="playlists">
    <div class="newmv-tags">
      <div class="areaTabs-wrop">
     地区： 
        <div class="areaTabs" v-for="(item,index) in areaTabs" 
          @click="areaTabsClick(index)" 
          :class="{active:areaTabsIndex == index}">{{item}}
        </div>
      </div>
      <div class="typeTabs-wrop">
        类型： 
        <div class="typeTabs" v-for="(item,index) in typeTabs" 
        @click="typeTabsClick(index)"
        :class="{active:typeTabsIndex==index}">{{item}}
        </div>
      </div>
      <div class="sortTabs-wrop">
        排序： 
         <div class="sortTabs" v-for="(item,index) in sortTabs" 
         @click="sortTabsClick(index)"
         :class="{active:sortTabsIndex==index}">{{item}}
         </div>
      </div>
    </div>
    <new-mv-item  :mvList="mvList"></new-mv-item>
     <el-pagination
     :page-size="40"
     :current-page.sync="currentPage"
     layout="prev, pager, next"
     :total="count"
     @current-change="onPageChange"
     class="pagination"
    >
   </el-pagination>
  </div>
</template>

<script>
import { getPageOffset,scrollInto } from 'assets/common/tool';
import {AllMv, MV} from 'network/mv';
import NewMvItem from './NewMvItem';
export default {
  name:'NewMvCard',
  props:{
    areaTabs:{
      type:Array,
      default() {
        return []
      }
    },
    typeTabs:{
      type:Array,
      default() {
        return []
      }
    },
    sortTabs:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    NewMvItem
  },
  data() {
    return {
       areaTabsIndex: 0,
       typeTabsIndex: 0,
       sortTabsIndex: 0,
       limit:40,
       areaTabsMvs:[],
       typeTabsMvs:[],
       sortTabsMvs:[],
       mvList:[],
       count:0,
       currentPage: 0,
    }
  },
  created() {
       AllMv(this.areaTabs[this.areaTabsIndex],this.typeTabs[this.typeTabsIndex],this.sortTabs[this.sortTabsIndex],this.limit).then(res => {
        this.areaTabsMvs = res.data
        this.count = res.count
        console.log(res);
        for (let i of res.data) {
          let mv = new MV(i.id, i.cover, i.name, i.artistName, i.playCount);
          this.mvList.push(mv);
        }
        // console.log(res);
      })
  },
  methods:{
    areaTabsClick(index) {
      this.mvList=[]
      this.areaTabsIndex = index
      AllMv(this.areaTabs[this.areaTabsIndex],this.typeTabs[this.typeTabsIndex],this.sortTabs[this.sortTabsIndex],this.limit,getPageOffset(this.currentPage,this.limit)).then(res => {
        this.areaTabsMvs = res.data
        
        for (let i of res.data) {
          let mv = new MV(i.id, i.cover, i.name, i.artistName, i.playCount);
          this.mvList.push(mv);
        }
        // console.log(this.count);
      })
    },
    typeTabsClick(index) {
      this.mvList=[]
      this.typeTabsIndex = index
      AllMv(this.areaTabs[this.areaTabsIndex],this.typeTabs[this.typeTabsIndex],this.sortTabs[this.sortTabsIndex],this.limit,getPageOffset(this.currentPage,this.limit)).then(res => {
        this.typeTabsMvs = res.data
        for (let i of res.data) {
          let mv = new MV(i.id, i.cover, i.name, i.artistName, i.playCount);
          this.mvList.push(mv);
        }
        // console.log(res);
      })
    },
    sortTabsClick(index) {
      this.mvList=[]
      this.sortTabsIndex = index
      AllMv(this.areaTabs[this.areaTabsIndex],this.typeTabs[this.typeTabsIndex],this.sortTabs[this.sortTabsIndex],this.limit,getPageOffset(this.currentPage,this.limit)).then(res => {
       this.sortTabsMvs = res.data
        for (let i of res.data) {
          let mv = new MV(i.id, i.cover, i.name, i.artistName, i.playCount);
          this.mvList.push(mv);
        }
        // console.log(getPageOffset(this.currentPage,this.limit));
        //  console.log(this.count);
      })
    },
     onPageChange(page) {
      this.mvList=[]
      this.currentPage = page
      AllMv(this.areaTabs[this.areaTabsIndex],this.typeTabs[this.typeTabsIndex],this.sortTabs[this.sortTabsIndex],this.limit,getPageOffset(this.currentPage,this.limit)).then(res => {
      //  console.log(res);
      this.areaTabsMvs = res.data
      for (let i of res.data) {
          let mv = new MV(i.id, i.cover, i.name, i.artistName, i.playCount);
        this.mvList.push(mv);
        }
       scrollInto(this.$refs.playlists)
      //  console.log(res.count);
      });
    },
  }
}
</script>

<style scoped>
.areaTabs-wrop,
.typeTabs-wrop,
.sortTabs-wrop {
  display: flex;
  font-size: 14px;
  margin: 20px;
  color: rgb(183, 184, 184);
}
.areaTabs-wrop .areaTabs,
.typeTabs-wrop .typeTabs,
.sortTabs-wrop .sortTabs {
  margin: 0 20px;
  color: rgb(121, 121, 121);
  cursor: pointer;
}
.newmv-card .active {
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