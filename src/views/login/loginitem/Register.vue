<template>
  <div class="tab-content">
    <p>向我们分享您的意见，还可获得最新消息及独家优惠</p>
    <div class="row">
      <div class="col text-center">
        <a class="btn btn-facebook btn-block facebook-connect " href="#" >
          以 Facebook 帐号登入
        </a>
      </div>
      <div class="col">
        <a class="btn btn-google btn-block google-login" href="#">
          以 Google 帐号登入
        </a>
      </div>
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
      <div class="form-group">
        <label for="birthday">生日月份</label>
        <select id="birthday" name="birthday" class="form-control">
          <option value></option>
          <option value="1970-01-01">1 - January</option>
          <option value="1970-02-01">2 - February</option>
          <option value="1970-03-01">3 - March</option>
          <option value="1970-04-01">4 - April</option>
          <option value="1970-05-01">5 - May</option>
          <option value="1970-06-01">6 - June</option>
          <option value="1970-07-01">7 - July</option>
          <option value="1970-08-01">8 - August</option>
          <option value="1970-09-01">9 - September</option>
          <option value="1970-10-01">10 - October</option>
          <option value="1970-11-01">11 - November</option>
          <option value="1970-12-01">12 - December</option>
        </select>
      </div>
      <div class="form-group form-check">
        <input class="form-check-label" for="checkbox_agree_terms" type="checkbox">
        成功注册后，代表你同意我们的
        <a href="#">条款</a>
        及
        <a href="#">隐私政策</a>
        声明
      </div>
      <div class="form-row">
        <div class="form-group">
          <button class="btn btn-primary btn-block" title="login" type="submit">注册</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>


export default {
  name: "Login",
}
</script>

<style scoped>
@import url('../../../assets/css/register.css');
</style>
