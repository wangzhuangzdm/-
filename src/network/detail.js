import {request} from "./request";
import {formatDate} from "assets/common/tool";
export function getMusicListDetail(id) {
  return request({
      url:'/playlist/detail',
      params:{
          id:id
      }
  })
}

export function getSongsDetail(arr) {
  return request({
      url:'/song/detail',
      params:{
          ids:arr
      }
  })
}

export function getRecommends(id,limit){
  return request({
      url:'/comment/playlist',
      params:{
          id:id,
          limit:limit
      }
  })
}
//通过es6的构造函数把复杂数据提取出来
export class baseInfo{
 constructor(playlist) {
  this.img=playlist.coverImgUrl;
  this.title=playlist.description;
  this.name=playlist.name;
  this.shareCount=playlist.shareCount;
  this.subscribedCount=playlist.subscribedCount;
  this.playCount=playlist.playCount;
  this.trackCount=playlist.trackCount;
  this.tags=playlist.tags[0];
  this.avatarUrl=playlist.creator.avatarUrl
  this.nickname=playlist.creator.nickname
 }
}

export class songDetail{
  constructor(songs) {
    this.id = songs[0].id;
    this.name = songs[0].name;
    this.album = songs[0].al.name;
    this.song = songs[0].ar[0].name;
    this.pic = songs[0].al.picUrl;
    this.time = formatDate(new Date(songs[0].dt),'mm:ss')
  }
}