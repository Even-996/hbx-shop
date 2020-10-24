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
.tab-content {
    padding: 30px;
}

@media (max-width: 767.98px) {
    .tab-content > p:first-child {
        margin-bottom: 20px;
    }
}

p {
    margin-top: 0;
}

.btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.btn {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1em;
}

.btn-facebook {
    color: #fff;
    background-color: #3b5998;
    border-color: #3b5998;
}

.btn-google {
    color: #fff;
    background-color: #cc3732;
    border-color: #cc3732;
}

.btn-apple {
    color: #fff;
    background-color: #000;
    border-color: #333;
}

.btn-block {
    display: block;
    width: 100%;
}

button[title] {
    background-color: #000;
    color: #fff;
    width: 100%;
}

.or {
    width: 100%;
    margin: 30px 0;
    border-bottom: 1px solid #eee;
    text-align: center;
    line-height: 0;
    color: #999999;
}

.form-group {
    margin-bottom: 30px;
    width: 100%;
}

.form-group > label:not(.form-check-label) {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
}

label {
    display: inline-block;
    /*margin-bottom: .3rem;*/
}

.form-control{
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #000;
    border-radius: 0;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.form-control {
    border-color: #eee;
}

.form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
}

.form-group > label.form-check-label {
    font-size: 14px;
    font-weight: 400;
}

.form-check {
    padding-left: .01rem;
}


.tab-content .form a {
    text-decoration: underline;
}

.text-uppercase {
    text-transform: uppercase !important;
}

@media (min-width: 768px) {
    .text-md-right {
        text-align: right !important;
    }
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.col {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

input[type=checkbox], input[type=radio] {
    box-sizing: border-box;
    padding: 0;
}


.form-check-input {
    position: absolute;
    margin-top: .3rem;
    margin-left: -1.25rem;
}

.form-control:focus{
border-color:#ccc;
box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}

input[type='text']{
    font-size: .15rem;
}

.form-control:last-child{
    font-size: .1rem;
}
</style>
