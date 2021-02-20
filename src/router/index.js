import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
   path:'/',
   redirect:'/home'
  },
  {
    path:'/home',
    component: () => import('views/home/Home')
  },
  {
    path:'/suggest',
    component: () => import('views/suggest/Suggest')
  },
  {
    path:'/newsongs',
    component: () => import('views/newsongs/NewSongs')
  },
  {
    path:'/newmv',
    component: () => import('views/newmv/NewMv')
  },
  {
    path:'/musiclistdetail/:id',
    component: () => import('components/content/playlistcard/childComps/MusicListDetail')
    
  },
  {
    path:'/playmv/:id',
    component: () => import('components/content/mv/PlayMv')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
