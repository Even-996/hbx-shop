<template>
  <div id="container" class="container">
    <div id="root-state-container">
      <div></div>
    </div>
    <div id="login-register-container">
      <div class="tab-header">
        <div class="tab-header-item">
          <router-link to="/login/exlogin" class="tab-item">
            <span class="heading-primary">登入</span>
            <span class="heading-secondary">现有客户</span>
          </router-link>
        </div>
        <div class="tab-header-item">
          <router-link to="/login/register" class="tab-item">
            <span>建立新账户</span>
            <span>新客户</span>
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
}
</script>

<style scoped>
@import url('../../assets/css/login.css');
</style>
