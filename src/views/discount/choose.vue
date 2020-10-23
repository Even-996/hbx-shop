<template>
  <div>
    <div class="container-fluid">
      <div class="banner-row-title">按类别选购</div>
      <div class="row">
        <div class="col-sm-6 col-md-4 col-xs-12" v-for="(items,index) in imgs" :key="index">
          <div class="banner">
            <div class="banner-image">
              <img :src="items.urls" alt="" width="100%" height="auto">
            </div>
            <div class="banner-body">
              <a href="" class="banner-cta">
                选购男装
              </a>
              <a href="" class="banner-cta">
                选购女装
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs:[
        {urls:'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Ft-shirts-1500x1000.jpg?q=75&w=331&fit=max&v=1'},
        {urls:'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fsneakers-1500x1000.jpg?q=75&w=331&fit=max&v=1'},
        {urls:'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fbags-1500x1000_.jpg?q=75&w=331&fit=max&v=1'},
        {urls:'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fhoodies-1500x1000.jpg?q=75&w=331&fit=max&v=1'},
        {urls:'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fpants-1500x1000.jpg?q=75&w=331&fit=max&v=1'},
        {urls:'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fjackets-1500x1000.jpg?q=75&w=331&fit=max&v=1'}
      ]
    }
  },
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.container-fluid{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px){
  .container-fluid{
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;
  }
  .col-md-6{
    flex: 0 0 50%;
    max-width: 50%;
  }
}
.banner-row-title{
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: .32rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.row{
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-md-6{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.banner{
  margin-bottom: 50px;
}
.banner-body{
  text-align: center;
  text-transform: uppercase;
}
.banner-cta{
  margin-left: 7.5px !important;
  margin-right: 7.5px !important;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;
}
a{
  color: #000;
  background-color: transparent;
}
.banner-image{
}
</style>