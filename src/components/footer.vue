<template>
  <div id="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3">
          <div class="footer-heading">关注我们</div>
          <div id="footer-social" class="footer-body">
            <ul class="list-inline social-icons">
              <li class="list-inline-item first">
                <a href="" target="_blank">
                  <i class="fab fa-fw"><div class="iconfont icon-facebook" width="28px" height="28px"></div></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="" target="_blank">
                  <i class="fab fa-fw"><div class="iconfont icon-Instagram" width="28px" height="28px"></div></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="" target="_blank">
                  <i class="fab fa-fw"><div class="iconfont icon-twitter" width="28px" height="28px"></div></i>
                </a>
              </li>
              <li class="list-inline-item last">
                <a href="" target="_blank">
                  <i class="fab fa-fw"><div class="iconfont icon-weibo" width="28px" height="28px"></div></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-heading">下载 HBX 购物应用程式</div>
          <div id="footer-app" class="footer-body">
            <a href="">
              <span class="sprite sprite-footer-app-icon"></span>
              <span>专为 iOS 及 Android 系统的电话及平板电脑度身订造</span>
            </a>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-heading">订阅我们电子讯息</div>
          <div id="footer-newsletter" class="footer-body">
            <form action="" method="post">
              <input type="hidden" name="source" value="Store footer newsletter box">
              <input type="email" name="email" placeholder="订阅我们电子讯息可获第一个订单九折优惠！" required="required" class="form-control">
              <a href="#" class="zc">注册</a>
            </form>
          </div>
        </div>
        <div class="d-none d-sm-block col-sm-6 col-md-3">
          <div class="footer-heading">送货至</div>
          <div id="footer-country" class="footer-body">
            <img src="../assets/img/cn.jpg" class="loading">
            <span>China (CNY)</span>
            <a href="">更改</a>
          </div>
        </div>
      </div>
      <div id="footer-lower-section">
        <div id="footer-links" class="d-none d-md-block">
          <ul class="list-inline">
            <li class="link-inline-item">
              <a href="">关于</a>
            </li>
            <li class="list-inline-item">
              <a href="">帮助</a>
            </li>
            <li class="list-inline-item">
              <a href="">职位空缺</a>
            </li>
            <li class="list-inline-item">
              <a href="">联属营销计划</a>
            </li>
            <li class="list-inline-item">
              <a href="">HBX PRO</a>
            </li>
            <li class="list-inline-item last">
              <a href="">客户推荐计划</a>
            </li>
          </ul>
        </div>
        <div id="footer-copyright">
          <div>
            <span>
              2020 
              <a href="">Hypebeast Limited</a>
              . 版權所有
            </span>
            <a href="" class="internal-link hidden-xs">网站声明</a>
            <a href="" class="internal-link hidden-xs">隐私政策</a>
          </div>
          <span>HBX® is a registered trademark of Hypebeast Hong Kong Ltd.</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
*{
  box-sizing: border-box;
}
#site-footer{
  border-top: 1px solid #000;
  padding: 30px 0;
  font-size: 12px;
  text-transform: uppercase;
}
.container{
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
}
.row{
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-lg-3{
  flex: 0 0 25%;
  max-width: 25%;
}
.col-md-6{
  flex: 0 0 50%;
  max-width: 50%;
}
.footer-heading{
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 700;
}
.footer-body{
  margin-bottom: 30px;
}
.list-inline{
  padding-left: 0;
  list-style: none;
}
ul{
  margin-top: 0;
  margin-bottom: 1rem;
}
.list-inline-item:not(:last-child){
  margin-right: .5rem;
}
.list-inline-item{
  display: inline-block;
}
a{
  display: inline-block;
  text-decoration: none;
  color: #000;
  background-color: transparent;
}
.zc{
  float: right;
}
.fab{
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}
.fa-fw{
  text-align: center;
  width: 1.25em;
}
#footer-app a .sprite{
  font-weight: 700;
  flex-shrink: 0;
  margin-right: 8px;
}
.sprite{
  vertical-align: middle;
  display: inline-block;
}
.sprite-footer-app-icon{
  background-image: url(../assets/img/sprite.png);
  background-position: -264px -168px;
  width: 40px;
  height: 40px;
}
#footer-newsletter .form-control{
  text-align: right;
  padding: 0;
  border-style: solid;
  border-width: 0 0 1px;
  font-size: 12px;
  box-shadow: none;
}
form{
  display: block;
  margin-top: 0em;
}
input{
  overflow: visible;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
/* .form-control{
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;  
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #000;
  border-radius: 0;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
} */
#footer-country{
  display: flex;
  align-items: center;
}
.loading{
  box-sizing: content-box;
  width: 30px;
  height: 17.5px;
  border: 1px solid #eee;
  vertical-align: middle;
  border-style: none;
}
#footer-country>*+* {
  margin-left: 8px;
}
@media (min-width: 1200px){
  #footer-lower-section{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  font-weight: 700;
  line-height: 1em;
  }
}
/* @media (min-width: 768px){
  .d-md-block {
    display: block!important;
  }
  .d-none {
    display: none!important;
}
} */
.list-inline{
  padding-left: 0;
  list-style: none;
}
.list-inline li{
  margin-right: 0.5rem;
}
.list-inline-item{
  display: inline-block;
}
</style>