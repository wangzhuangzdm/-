
import {request} from './request';
//最新歌单
export function getPlaylist(cat,limit,offset){
  return request({
    url:'/top/playlist',
    params:{
      cat:cat,
      limit:limit,
      offset:offset
  }
  })
};

// 精品歌单
export function getHighquality(cat,limit){
  return request({
      url:'/top/playlist/highquality',
      params:{
          cat:cat,
          limit:limit,
          // time:new Date().getTime()
      }
  })
}
//获取热门歌曲
export function getMusicListHot(){
  return request({
      url:'/playlist/hot',
  })
}
//home歌单
  export function  getPersonalized(num){
    return request({
      url:'/personalized',
      params:{
        limit:num
      } 
    })
  }

  //home热门音乐
  export function getHotSongs(){
    return request({
        url:'/personalized/newsong',
    })
}

//home 推荐MV
export function getHomeMv(){
  return request({
      url:'personalized/mv',
  })
}
//主页面最新音乐
export function getTopSongs(type){
  return request({
      url:'top/song',
      params:{
        type:type
      }
  })
}
