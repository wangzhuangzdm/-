import Vue from 'vue'
import Vuex from 'vuex'
import {getSongUrl} from 'network/suggest';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sugSongsid:0,
    url:'',
    songobj:{},
    isPlay:false,
    musicArtists:[],
    searchSongs:[],
    // detailUrl:[]
  },
  mutations: {
    playMusic(state,songobj) {
    if(songobj.length) {
      for(let i = 0;i<songobj.length;i++) {
        state.url = songobj[i].data[0].url;
        state.sugSongsid = songobj[i].data[0].id;
        }
    }else {
      for(let i = 0;i<songobj.data.length;i++) {
        state.url = songobj.data[i].url;
        state.sugSongsid = songobj.data[i].id;
        }
    }
    
     
      
      state.songobj =songobj
      if(state.url !== '') {
        state.isPlay = true
      } else {
        state.isPlay = !state.isPlay
      }
    },
    musicArtists(state,artists) {
      state.musicArtists = artists
    },
    searchSongs(state,data) {
      state.searchSongs = data
    },
  },
  actions: {
    getSugId(context,id) {
      let songobj = {};
      getSongUrl(id).then(res => {
        songobj = res;
        context.commit('playMusic', songobj)
      })
    },
  },
  modules: {
  },
  getters: {
  }
})
