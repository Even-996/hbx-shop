<template>
	<div>
    <section>
      <div class="leader" v-if="num">
        <div><img src="https://static.hbx.com/bundles/hypebeastweb/images/icons/empty-bag@2x.png?1603274925" /></div>
        <p class="lea">你的购物袋没有商品</p>
        <p><a href="/home" class="led">继续购物</a> </p>
        <p class="lef">如果你已选购产品，但购物车未能正确显示，可能你的浏览器设定已停用Cookie，请重新启用Cookie后再次尝试。</p>
      </div>  
      <div>
        <div id="container" class="container-fluid">
          <div id="site-breadcrumb">
            <div class="row">
              <div class="col-8">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>购物袋</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div class="col-4">
                <ul class="customer-care list-inline mb-0">
                  <li class="first"><span>有更多问题?</span></li>
                  <li class="last"><a href=""><span>与我们联络</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="site-heading" class="hidden-app">
            <h1>购物袋</h1>
            <p class="p-note">请注意：货品不会被存储于购物车内直至您完成结账</p>
          </div>
          <div id="cart-summary">
            <form action="" method="post">
              <div class="row">
                <div class="col-sm-8">
                  <table id="bag-item" class="cart-table table">
                    <thead>
                      <tr class="d-none d-md-table-row">
                        <th class="product">货品</th>
                        <th class="unit-price d-none d-md-table-cell">价格</th>
                        <th class="unit-price d-none d-md-table-cell">關稅</th>
                        <th class="quantity d-none d-md-table-cell">数量</th>
                        <th class="total d-none d-md-table-cell">总价</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="product">
                          <div class="media">
                            <div class="product-thumbnail">
                              <a href=""><img src="https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Ffa%2Fad%2FShoes_2-992NT_0-db10822ae513697a9f7113f69169.jpg?fit=max&q=90&w=120&h=156&v=1" alt="" class="img-fluid"></a>
                            </div>
                            <div class="media-body">
                              <div class="brand"><a href="">New Balance</a></div>
                              <div class="name"><a href="">M99NT</a></div>
                              <ul class="options list-unstyled">
                                <li>尺吋: US 4.5 / W 6</li>
                              </ul>
                              <div class="text-muted">包邮并不适用于此货品</div>
                              <div class="text-muted">折扣并不适用于此货品</div>
                            </div>
                          </div>
                        </td>
                        <td class="unit-price d-none d-md-table-cell">
                          CNY 1675.12
                        </td>
                        <td class="unit-price d-none d-md-table-cell">
                          CNY 167.52
                        </td>
                        <td class="quantity d-none d-md-table-cell">
                          <div class="quantity-control">
                            <div class="d-none d-md-block">
                              <div class="input-group">
                                <span class="input-group-prepend">
                                  <span type="button" class="btn btn-quantity">-</span>
                                </span>
                                <input type="text" id="product-quantity-input" class="form-control" value="1">
                                <span class="input-group-append">
                                  <span type="button" class="btn btn-quantity">+</span>
                                </span>
                              </div>
                            </div>
                           </div>
                          <a href="#" class="remove d-none d-md-inline">移除</a>
                        </td>
                        <td class="total text-center d-none d-md-table-cell">CNY 1842.63</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="cart-table-footer">
                    <span>购物袋 ID: 5729954</span>
                    <button type="submit" class="btn btn-link">更新购物袋</button>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-12">
                  <div id="sticky-sidebar">
                    <div class="free-shipping-meter clearfix not-available full">
                      <div class="message">
                        免费送货需最少一件正价货品。
                      </div>
                    </div>
                    <div class="summary">
                      <h5>订单摘要</h5>
                      <table>
                        <tbody>
                          <tr>
                            <td class="title">购物袋小计</td>
                            <td class="amount">CNY 1842.63</td>
                          </tr>
                          <tr>
                            <td class="title">总运费</td>
                            <td class="amount">CNY 133.85</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="grand-total">
                        <span class="title">总价</span>
                        <span class="amount">CNY 1976.49</span>
                      </div>
                      <a href="" class="checkout-btn btn btn-block btn-primary">前往结账</a>
                      <div class="coupons">
                        <div class="coupon promotional">
                          <a href="" id="promo" class="heading">输入优惠码</a>
                        </div>
                        <div class="coupon gift-card">
                          <a href="" class="heading">输入积分码或礼品卡</a>
                        </div>
                      </div>
                    </div>
                    <div class="cart-message-wrapper hidden-app">
                      <div class="policy">
                        了解更多我们的
                        <a href="">退换细则</a>
                        以及
                        <a href="">送货资料</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
	export default {
    name: "Bags",
    data () {
      return {
        num:''
      }
    }
	}
</script>

<style scoped="scoped">
@media (min-width: 768px){
  .d-md-block{
    display: block!important;
  }
}
	.leader {
		margin-top: 1.5rem;
		text-align: center;
	}

	.leader p {
		text-align: center;
	}

	.leader img {
		width: 0.73rem;
	}

	.lea {
		margin: 20px 0 50px;
		font-size: 30px;
		font-weight: 700;
	}

	.led {
		width: 0.82rem;
		height: 0.46rem;
		line-height: 0.46rem;
		font-size: 0.14rem;
		display: inline-block;
		color: #fff;
		background-color: #000;
		border-color: #000;
		outline: none;
		text-decoration: none;
	}

	.lef {
		max-width: 590px;
		margin: 1rem auto 50px;
		font-size: 14px;
		color: #999;
	}
  #container{
    min-height: 650px;
  }
  .container-fluid{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  #site-breadcrumb{
    margin: 30px 0;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-8{
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-4{
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .customer-care{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
  }
  .mb-0{
    margin-bottom: 0 !important;
  }
  .list-inline{
    padding-left: 0;
    list-style: none;
  }
  .customer-care>li:first-child{
    font-weight: 700;
  }
  #site-heading{
    padding: 30px 0;
    text-align: center;
  }
  #site-heading>h1{
    margin: 0;
    font-size: 32px;
  }
  .p-note{
    display: none;
    margin: 0;
    font-size: 12px;
    color: #999;
  }
  #cart-summary{
    margin-bottom: 30px;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
  }
  .table{
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
  }
  table{
    border-collapse: collapse;
  }
  .cart-table>thead{
    border-bottom: 1px solid #000;
  }
  .cart-table>thead>tr>th{
    padding: 0 0 15px;
    border: 0;
    font-size: 12px;
    text-transform: uppercase;
  }
  .table thead th{
    vertical-align: bottom;
    border-bottom: 2px solid #000;
  }
  .table th{
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #000;
  }
  .table td{
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #000;
  }
  .cart-table>tbody>tr>td.product{
    position: relative;
  }
  .cart-table>tbody>tr>td{
    border: 0;
    padding: 15px 0;
    vertical-align: middle;
  }
  .cart-table-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .cart-table-footer span{
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .cart-table-footer .btn{
    padding: 0;
    font-size: 16px;
    font-weight: 700;
    text-decoration: underline;
  }
  .btn:not(:disabled):not(.disabled){
    cursor: pointer;
  }
  .free-shipping-meter{
    position: relative;
    width: 100%;
    font-size: 12px;
    text-transform: uppercase;
    background-color: #000!important;
  }
  .message{
    padding: 15px;
  }
  .summary{
    width: 100%;
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid #000;
    font-size: 14px;
    text-transform: uppercase;
  }
  .summary h5{
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
  }
  .summary table{
    width: 100%;
  }
  .summary table tr td.title{
    text-align: left;
  }
  .summary table tr td{
    vertical-align: top;
    text-align: right;
    padding: 10px 0;
  }
  .grand-total{
    display: flex;
    justify-content: space-between;
    margin: 10px 0 30px;
    font-size: 16px;
    font-weight: 700;
  }
  .apple-pay-btn{
    display: none;
    height: 49px;
    margin-bottom: 15px;
  }
  .btn-primary{
    color: #fff;
    background-color: #000;
    border-color: #000;
  }
  .btn{
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1em;
  }
  .btn-block{
    display: block;
    width: 100%;
  }
  .coupons .coupon .heading{
    display: block;
    position: relative;
    margin: 20px 0 0;
    text-transform: none;
  }
  .coupons .coupon .content{
    display: none;
    margin-top: 20px;
  }
  .input-group{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group-prepend{
    margin-right: -1px;
    display: flex;
  }
  .cart-table>tbody>tr>td.quantity .input-group .input-group-prepend{
    align-items: center;
  }
  .input-group>.form-control{
    margin: 0 5px;
    text-align: center;
    flex: 1;
    width: 1%;
  }
  .input-group .input-group-append{
    align-items: center;
    background-color: transparent;
  }
  .input-group .input-group-prepend .btn{
    width: 18px;
    height: 18px;
    padding: 0 0 1px;
    border: 1px solid #000;
    border-radius: 50%;
    text-decoration: none;
  }
  .input-group .input-group-append .btn{
    width: 18px;
    height: 18px;
    padding: 1px 0 4px;
    border: 1px solid #000;
    border-radius: 50%;
    text-decoration: none;
    margin-top: 7.5px;
  }
  .cart-message-wrapper{
    text-align: center;
  }
  .cart-message-wrapper .policy{
    color: #999;
    font-size: 12px;
  }
  .cart-message-wrapper .policy a{
    text-decoration: underline;
    color: #999;
  }
  .media{
    display: flex;
    align-items: flex-start;
  }
  .media-body{
    width: 100%;
  }
  .media .product-thumbnail{
    width: 100px;
    margin-right: 15px;
  }
  .img-fluid{
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none; 
  }
  .media .media-body{
    line-height: 1em;
  }
  .media-body{
    flex: 1;
  }
  .brand{
    margin: 0 0 5px;
    white-space: nowrap;
  }
  .brand>a{
    margin: 0 0 5px;
    white-space: nowrap;
  }
  .name{
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 700;
  }
  .name>a{
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 700;
  }
  .options{
    margin-bottom: 7px;
  }
  .list-unstyled{
    padding-left: 0;
    list-style: none;
  }
  .text-muted{
    color: #999!important;
  }
  .unit-price{
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
  }
  .cart-table>tbody>tr>td.quantity{
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    width: 15%;
  }
  .d-none .d-md-table-cell{
    text-align: center;
  }
 .el-breadcrumb__item>>>.el-breadcrumb__inner.is-link{
    font-weight: 100!important;
    color: #999;
    font-size: 12px;
  }
  .el-breadcrumb__item>>>.el-breadcrumb__inner.is-link:hover{
    color: #000;
  }
  .el-breadcrumb__item>>>.el-breadcrumb__inner{
    color: #999;
    font-size: 12px;
  }
  .el-breadcrumb__item>>>.el-breadcrumb__inner:hover{
    color: #000;
  }
  .last>a{
    color: #000;
  }
  .last>a:hover{
    color: #999;
    text-decoration:none
  }
  .brand>a{
    color: #000;
  }
  .brand>a:hover{
    color: #999;
    text-decoration:none
  }
  .name>a{
    color: #000;
  }
  .name>a:hover{
    color: #999;
    text-decoration:none
  }
  .remove{
    color: #000;
    text-decoration: underline;
    font-size: 10px;
  }
  .remove:hover{
    color: #999;
    text-decoration:none;
  }
  .message{
    color: #fff;
  }
  .btn-link{
    color: #000;
  }
  .btn-link:hover{
    color: #999;
  }
  .d-md-table-cell{
    font-weight: 700;
  }
  .heading{
    color: #000;
  }
  .heading:hover{
    color: #999;
    text-decoration:none;
  }
  .policy>a:hover{
    color: #000;
    text-decoration:none;
  }
  .hidden-app>h1{
    font-weight: 700;
  }
</style>
