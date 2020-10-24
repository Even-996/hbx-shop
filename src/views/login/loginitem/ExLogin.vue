<template>
  <div class="tab-content">
        <p>以 Facebook 或 Google 帐号登入</p>
        <div>
          <a href="#" class="btn btn-facebook btn-block">以 Facebook 或 Google 帐号登入</a>
          <a href="#" class="btn btn-google btn-block">以 Google 帐号登入</a>
          <a href="#" class="btn btn-apple btn-block">
            Log in with Apple
          </a>
        </div>
        <div class="or">
          <span>Or</span>
        </div>
        <p>以电邮地址登入</p>
        <form action="#" method="post" class="form">
          <div class="form-group">
            <label for="username">电邮地址/用户名称</label>
            <input type="text" id="username" name="_username" class="form-control" value/>
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <input type="text" id="password" name="_password" class="form-control" value/>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group form-check">
                <input class="form-check-input" id="checkbox_remember_me" type="checkbox" name="_remember_me"
                       value="on"/>
                <label class="form-check-label">记住我吗？</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group text-md-right">
                <a class="text-uppercase">忘记密码？</a>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block" title="login" type="submit">登入</button>
            </div>
          </div>
        </form>
      </div>
</template>

<script>
export default {
  name: "ExLogin.vue"
}
</script>

<style scoped>
@import url('../../../assets/css/exlogin.css');
</style>