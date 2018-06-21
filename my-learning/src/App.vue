<template>
<div class="cls">
<header class="hed">
<div  class="cls" >
<img src="./assets/logo.png" style="width:100px;height:100px">
</div>
<nav class="na">
<ul>
<li v-for=" item in list">
<a @click='$goRoute(item.route)'>{{item.text}}</a>
</li>
</ul>
</nav>
</header>
<router-view></router-view>
<div>
<footer>
<ul class="lit">
<li v-for="lis in ul" >{{lis.li}}</li>
</ul>
<p class="ps">Copyright&nbsp;&copy;&nbsp;{{author}} - 2016 All rights reserved</p>
</footer>
</div>
</div>

</template>

<script>

 export default {
 name:'app', 
 data () {
    return {
      list:[
      {
       text:'圆白菜',
       route:'/home'
       },
       {
        text:'长生菜',
        route:'/page01'
       },
       {
        text:'卷心菜',
        route:'/page02'
       }

      ],
      ul: [
          { li: '琉璃之金' },
          { li: '朦胧之森' },
          { li: '缥缈之滔' },
          { li: '逍遥之火' },
          { li: '璀璨之沙' }
        ],

      img:{
    backgroundImage:'url('+ require('./assets/logo.png') +')'
  }
  }
  },
  computed:{
    author:function  () {
    return this.$store.state.author
    }
  }
}
</script>

<style>
.cls{
  width: 100%;
}
.hed{
  
}
.na{
  width: 100%;
  height: 25px;
  background-color: #bebebe;

}
.na ul{
  overflow: none;
  width: 25%;
  height: 25px;
}
/*ul{
  border: 1px solid red;
  overflow: none;
  width: 25px;
}*/
.na ul li{
  
  list-style: none;
  letter-spacing: 2px;
  
}
.na ul li a{
  
  float: left;
  margin: 1px 4px;
  padding: 0 2px;
  color: #FFF;
  display: block;
  border-right: 1px solid #FFF;
  text-align: center;


}
.na ul li a:hover{
  background-color: red;
}
.cls{

}
.lit li{
  list-style: none;
  float: left;
  margin:0 20px;
  display: block;
}
.lit{
  height: 25px;
/*  margin: 0 auto;
*/  text-align: center;
}
.ps{
  text-align: center;
}
</style>
