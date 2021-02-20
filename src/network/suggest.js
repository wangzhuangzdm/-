import {request} from "./request"
//关键词搜索结果
export function Search(key){
  return request({
      url:'/search',
      params:{
          keywords:key,
          limit:50
      }
  })
}
//关键词搜索结果
export function Suggest(keywords){
  return request({
      url:'/search/suggest',
      params:{
          keywords:keywords
      }
  })
}
//歌曲url
export function getSongUrl(id){
  return request({
      url:`/song/url?id=${id}`,
   
  })
}




