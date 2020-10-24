<template>
  <div class="homepage-featured-brands-container">
    <div class="container-fluid">
      <div class="featured-brands">
        <div class="header">
          <h2 class="heading">注目品牌</h2>
          <a href="">全部品牌</a>
        </div>
		  <div >
        <ul class="brand-groups count" >
          <li class="brand-group "  v-for="items in brandMan" >
            <span class="brand-group-title">{{items.letter}}</span>
            <ul class="brand-group-items" >
              <li class="brand-group-item" v-for="tt in items.all" >
                <a href="" title="#FR2">{{tt}}</a>
              </li>
            </ul>
          </li>
        </ul>
		  </div>
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
		    letter:'B',
		    all:['BILLIONAIRE BOYS CLUB','BOTTEGA VENETA','BRAIN DEAD','BURBERRY']
		  },
		  {
		    letter:'C',
		    all:[' CANADA GOOSE','CARHARTT WORK IN PROGRESS','CHAMPION REVERSE WEAVE','COMMON PROJECTS','CONVERSE',' CP COMPANY']
		  },
        {
          letter:'F',
          all:['F.C. Real Bristol','FEAR OF GOD' ]
        },
		  {
			letter:'G',
			all:['G-SHOCK']  
		  },
		  {
		    letter:'H',
		    all:['HAVAIANAS','HAVE A GOOD TIME','HELMUT LANG','HERON PRESTON','HUMAN MADE']
		  },
		  {
		    letter:'J',
		    all:['JOHN ELLIOTT','JORDAN BRAND']
		  },
		  {
		    letter:'K',
		    all:['KANGOL']
		  },
		  {
		    letter:'L',
		    all:[' LOEWE']
		  },
		  {
		    letter: 'M',
		    all:['MAHARISHI','MAISON KITSUNE','MAISON MARGIELA','MAISON MIHARA YASUHIRO','MARCELO BURLON','MASTERMIND JAPAN','MASTERMIND WORLD','MEDICOM TOY','MISBHV','MONCLER','MONCLER GENIUS']
		  },
		  {
		    letter:'N',
		    all:[' NANAMICA','NEEDLES','ACRONYM','NEW BALANCE','NIKE']
		  },
		  {
		    letter:'O',
		    all:['OFF-WHITE']
		  },
		  {
		    letter:' P',
		    all:['PALM ANGELS','PLACES + FACES','PLEASURES','PRADA']
		  },
		  {
		    letter: 'R',
		    all:['RAF SIMONS','REEBOK','RHUDE','RICK OWENS DRKSHDW','ROKIT']
		  },
		  {
		    letter:'S',
		    all:['SACAI','SAINT LAURENT','STONE ISLAND',' STUSSY','SUICOKE']
		  },
		  {
		    letter:'T',
		    all:['TAKAHIROMIYASHITA THESOLOIST','THOM BROWNE','ACRONYM','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','AMBUSH','ASICS','AWAKE']
		  },
		  {
		    letter:'U',
		    all:[' UNDERCOVER','UNIFORM EXPERIMENT']
		  },
		  {
		    letter:'V' ,
		    all:['VALENTINO','VANS','VERDY X MINIONS','VERSACE']
		  },
		  {
		    letter: 'W',
		    all:['WACKO MARIA','WE11DONE','WHITE MOUNTAINEERING']
		  },
        {
			 letter: 'Y',
          all:['Y-3']
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
	 .count{
		column-count: 4;
		column-gap: 30px;
		break-inside: avoid; 
	 }
  }
  @media (max-width:768px) {
  	.count{
  			column-count: 2;
  			column-gap: 30px;
  			break-inside: avoid; 
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
	 margin-bottom: 20px;
	/* height: 30px;
	 line-height: 30px; */
  }
  .header h2{
	  margin: 0;
	  font-size: 18px;
  }
  .header a{
	 margin-left: .15rem;
	 text-decoration:underline; 
	 font-weight: 500;
  }
  .header a:hover{
	  text-decoration: none;
	  color: #ccc;
  }
  a{
    color: #000;
    font-weight: 700;
    background-color: transparent;
  }
  h2{
    font-size: .18rem;
    font-weight: 700;
  }
  ul{
	      padding-inline-start: 0px;
			margin-block-start: 0em;
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
  .brand-group{
	 margin-bottom: 0.15rem;
  }
  .brand-group a{
	  text-decoration: none;
  }
  .brand-group-items{
    padding-left: 0;
    list-style: none;
  }
  .brand-group-item a:hover{
	  text-decoration: none;
	  color: #999999;
  }
</style>