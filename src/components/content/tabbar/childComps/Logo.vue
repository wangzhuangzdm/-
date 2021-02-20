<template>
    <div class="logo">
     <div class="logo-img">
        <img src="~assets/img/content/yun.jpg" alt="" >
     </div>
      <div class="title">王以雲音乐</div>
      <div class="back" @click="backClick">
          <img src="~assets/img/content/back.svg" alt />
      </div>
    </div>
</template>

<script>

export default {
 name:'Logo',
 methods:{
  backClick() {
     this.$router.go(-1)
  }
}
}
</script>

<style scoped>
.logo {
  
  display: flex;
  align-items: center;
  
}
.logo .logo-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
margin: 0 5px 0 10px;
cursor: pointer;
}
.logo-img img {
  width: 100%;
  height: 100%;
  
}
.logo .title {
  color: #ffff;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
}
.logo .back img {
  margin:5px 0 0 108px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>