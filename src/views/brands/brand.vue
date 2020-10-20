<template>
  <div class="homepage-featured-brands-container">
    <div class="container-fluid">
      <div class="featured-brands">
        <div class="header">
          <h2 class="heading">注目男装品牌</h2>
          <a href="">全部男装品牌</a>
        </div>
        <ul class="brand-groups col-xs-6 col-sm-6 col-md-3"  v-for="items in brandMan" :key="items.id">
          <li class="brand-group">
            <span class="brand-group-title">{{items.letter}}</span>
            <ul class="brand-group-items" v-for="item in items.all" :key="item.id">
              <li class="brand-group-item">
                <a href="" title="#FR2">{{item}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="featured-brands"></div>
      <div class="featured-brands"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      brandMan:[
        {
          letter:'#',
          all:['#FR2','1017 ALYX 9SM','11 By Boris Bidjan Saberi']
        },
        {
          letter:'A',
          all:['A.P.C','ACNE STUDIOS','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
        },
        {
          letter:'A',
          all:['A.P.C','ACNE STUDIOS','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
        },
        {
          letter:'A',
          all:['A.P.C','ACNE STUDIOS','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
        },
        {
          letter:'A',
          all:['A.P.C','ACNE STUDIOS','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
        },
        {
          letter:'A',
          all:['A.P.C','ACNE STUDIOS','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
        },
        {
          letter:'A',
          all:['A.P.C','ACNE STUDIOS','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
        },
        {
          letter:'A',
          all:['A.P.C','ACNE STUDIOS','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
        },
        {
          letter:'A',
          all:['A.P.C','ACNE STUDIOS','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
        },
        {
          letter:'A',
          all:['A.P.C','ACNE STUDIOS','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
        }
      ]
    }
  }
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .homepage-featured-brands-container{
    border-top: 1px solid #000;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media (min-width: 768px){
    .container-fluid{
      width: 100%;
      padding-right: 30px;
      padding-left: 30px;
      margin-right: auto;
      margin-left: auto;
    }
  }
  .homepage-featured-brands-container .featured-brands{
    font-size: .12rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  .header {
    display: flex;
    align-items: flex-end;
    margin: 0 0 20px;
  }
  a{
    color: #000;
    margin-left: .15rem;
    font-weight: 700;
    /* text-decoration: underline; */
    background-color: transparent;
  }
  h2{
    font-size: .18rem;
    font-weight: 700;
  }
  .brand-groups{
    padding-left: 0;
    list-style: none;
    margin-bottom: .15rem;
    /* -moz-column-count: 4;
    column-count: 4;
    -moz-column-gap: 30px;
    column-gap: 30px;
    -moz-column-break-inside: avoid;
    break-inside: avoid; */
  }
  .brand-group-items{
    padding-left: 0;
    /* line-height: 1.2rem; */
    list-style: none;
  }
</style>