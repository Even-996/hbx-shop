<template>
    <div>
       <div class="container-fluid det">
			 <h1>货品详情</h1>
			 <div class="row">
				 <div class="col-md-6 tion">
					 <h3>商品介绍</h3>
					 <ul class="ull">
						 <li v-for="item in text1">{{item}}</li>
					 </ul>
					 <div><p>货品编号：282092</p> </div>
				 </div>
				 <div class="col-md-6 len">
					 <div class="set1">
					 <h4 @click="tshow()">尺寸</h4>
					 <table class="table" :class="isshow?'aa':'bb'">
						 <thead>
							 <tr>
								 <th v-for="item in text2" id="th">{{item}}</th>
							 </tr>
						 </thead>
						 <tbody>
							 <tr v-for="item in text3">
								 <td v-for="vv in item.value">{{vv}}</td>
							 </tr>
						 </tbody>
						 <p>尺寸数据仅供参考</p>
					 </table>
					 </div>
					 <div class="set2">
						 <h3  @click="hh()">关于退货</h3>
						 <p :class="{pp:istrue}">如欲了解更多退货细则，请 按此.</p>
					 </div>
					 <div class="set3">
						 <span>有更多问题?</span>
						 <p>与我们联络</p>
					 </div>
				 </div>
			 </div>
		 </div>

    </div>

</template>

<script>
	export default{
		data(){
			return{
				text1:['Converse','Converse x Feng Chen Wang Chuck 70 Hi 2 In 1','Converse x Feng Chen Wang 联乘合作','高筒运动鞋','帆布鞋面','双层中底','绑带设计','橡胶外底','颜色：柿子橙/象牙/白鹭','质料：100% 纺织；100% 橡胶','更多 运动鞋'],
				text2:['US(M)','US(W)','EU','UK','CM'],
				text3:[
					{value:['3','5','35','3','22']},
					{value:['3.5','5.5','36','3.5','22.5']},
					{value:['4','6','36.5','4','23']},
					{value:['4.5','6.5','37','4.5','23.5']},
					{value:['5','7','37.5','5','24']},
					{value:['5.5','7.5','38','5.5','24.5']},
					{value:['6','8','39','6','24.5']},
					{value:['6.5','8.5','39.5','6.5','25']},
					{value:['7','9','40','7','25.5']},
					{value:['7.5','9.5','41','7.5','26']},
					{value:['8','10','41.5','8','26.5']},
					{value:['8.5','10.5','42','8.5','27']},
					{value:['9','11','42.5','9','27.5']},
					{value:['9.5','11.5','43','9.5','28']},
					{value:['10','12','44','10','28.5']},
					{value:['10.5','12.5','44.5','10.5','29']},
					{value:['11','13','45','11','29.5']},
					{value:['11.5','13.5','46','11.5','30']},
					{value:['12','14','46.5','12','30.5']},
				],
				istrue:true,
				isshow:true
			}
		},
		methods:{
			hh(){
				this.istrue=!this.istrue
			},
			tshow(){
				this.isshow=!this.isshow
			}
		}
		
		
	}
</script>


<style scoped="scoped">
	@media (min-width:768px) {
		.container-fluid{
			 width: 100%;
			 padding-right: 30px;
			 padding-left: 30px;
			 margin-right: auto;
			 margin-left: auto;
		}
	}
	@media (max-width:769px) {
		.container-fluid{
		 width: 100%;
		 padding-right: 15px;
		 padding-left: 15px;
		 margin-right: auto;
		 margin-left: auto;
	}
	}
	.det h1{
		text-align: center;
		font-size: 0.32rem;
		font-weight: 700;
		margin: 0 0 30px;
	}
	.tion{
		border-top: 1px solid #eee;
	}
	.tion h3{
		 margin: 0;
		 padding: 20px 0;
		 font-size: 14px;
		 font-weight: 700;
	}
	.ull{
		column-count: 2;
	}
	.ull li{
		margin-right: 4px;
	}
	.ull li:first-child{
		text-decoration: underline;
	}
	.ull li:first-child:hover{
		text-decoration: none;
		color: #999;
	}
	.len{
		border-top: 1px solid #eee;
	}
	.len h4:hover,h3:hover{
		color: #999;
		cursor: pointer;
	}
	.table{
		width: 100%;
		border-collapse: collapse;
	}
	.table tr{
		height: 28px;
	}
	.table #th{
		border-top:1px inset #ddd ;
		background-color: #fafafa;
		text-align: center;
		width: 1rem;
	}
	.table th,td{
		border: 1px inset #ddd;
		text-align: center;
		font-size: 12px;
	}
	.pp{
		display: none;
	}
	.set1{
		border-bottom: 1px inset #ddd;
	}
	.aa{
		visibility: visible;
	}
	.bb{
		display: none;
	}
	.set1 p{
		padding-top: 20px;
	}
	.set2{
		border-bottom: 1px inset #ddd;
	}
	.set2 p{
		padding-top: 10px;
	}
	.set2 h3{
		font-size: 15px;
		font-weight: 600;
	}
	.set3{
		padding: 15px 0;
	}
	.set3 span{
		font-size: 15px;
		font-weight: 600;
		float: left;
	}
	.set3 p{
		text-decoration: underline;
	}
	.set3 p:hover{
		color: #999;
		text-decoration: none;
	}
</style>
