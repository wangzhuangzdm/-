<template>
  <div class="login">
    <div class="userlogo">
      <img src="~assets/img/content/userlogo.jpg" alt="">
    </div>
    <div class="username">
      <el-dropdown>
        <span class="el-dropdown-link">
          暗黑迪迦<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>  
</template>

<script>
export default {
  name:'Login'
}
</script>

<style>
.login {
  display: flex;
  align-items: center;
}
.userlogo {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
}
.userlogo img {
  width: 35px;
  height: 35px;
}
.username {
  cursor: pointer;
  padding: 0 30px 0 10px;
   color: #ffff;
  font-size: 14px;
}
.el-dropdown-link {
  color: #ffff;
}
</style>