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
    <div >
      <div class="form-group">
        <label for="username">电邮地址/用户名称</label>
        <input type="text" id="username" v-model="email" name="_username" class="form-control" placeholder="请输入邮箱" value/>
      </div>
      <div class="form-group">
        <label for="code"  class="col-md-8" id="inputCode">请输入验证码</label>
        <div class="get-code">
          <div class="text-box">
            <input type="text" id="code" v-model="code"  name="_password" class="form-control" placeholder="点击发送验证码" value/>
          </div>
          <div id="getCode" class="col-md-4">
            <span @click="sendCode" v-if="getYanZheng">
               获取验证码
            </span>
            <span v-else>{{countNum}}秒后重发</span>
          </div>
        </div>
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
          <button class="btn btn-primary btn-block" @click="checkEmailAndCode" title="login" >登入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {sendEmail} from "../../../network/login";
  import {sendEmailAndCode} from "../../../network/login";

  export default {
    name: "ExLogin.vue",
    data() {
      return {
        email: "",
        code: "",
        getYanZheng: true,
        countNum: 60,
      }
    },
    methods: {
      sendCode() {
        sendEmail(this.email).then(res => {


          this.getYanZheng = false;
          setTime();

          let _this = this;
          let count = 60;

          function setTime() {
            if (count == 1) {
              _this.getYanZheng = true;
              return;
            } else {
              count--;
            }

            setTimeout(function () {
              setTime()
              _this.countNum = count;
            }, 1000);
          }

        }).catch(err => {
          this.$message.error("发送验证码失败");
        })
      },
      checkEmailAndCode() {

        sendEmailAndCode(this.email, this.code).then(res => {
          if (res.data) {
            // this.$store.state.phone = this.phone;
            console.log(res.data);
            localStorage.setItem("email", this.email);
            this.$message.success("登录成功");
            this.$router.push("/home");
          } else {
            this.$message.error("登录失败");
          }

        }).catch(err => {
          this.$message.error("登录失败");
        })
      }
    }
  }
</script>

<style scoped>
.tab-content {
  padding: 30px;
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
  /*padding: .375rem .75rem;*/
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
}

.form-control {
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

.form-control:focus {
  border-color: #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.form-group > label.form-check-label {
  font-size: 14px;
  font-weight: 400;
  padding-left: .18rem;
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

input[type='text'] {
  font-size: .15rem;
}


.get-code {
  overflow: hidden;
  display: flex;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.get-code .text-box {
  flex: 1;
  overflow: hidden;
  font-size: 12px;
}

.get-code .text-box #code {
  padding: 10px 10px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  -webkit-appearance: none;
}

.get-code #getCode {
  display: flex;
  align-items: center;
  justify-content: center;
  /*width: 30.1vw;*/
  font-size: 14px;
  cursor: pointer;
  color: #FFFFFF;
  background-color: #DEC27C;
}

#inputCode{
  padding: 0px;
}


input::-webkit-input-placeholder {
  /* placeholder颜色 */
  color: #aab2bd;
  /* placeholder字体大小 */
  font-size: 12px;
}

input:focus::-webkit-input-placeholder{
            text-indent: -999em;
            z-index: -20;
        }
</style>