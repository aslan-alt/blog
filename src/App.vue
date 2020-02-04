<template>
  <div id="app">
    <Header id="header"/>
    <main id="main"><router-view /></main>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
body{
    font: 14px/1.6 Arial,"Microsoft YaHei","黑体","宋体",sans-serif;
    color: #333;
}

*{margin:0;padding: 0;box-sizing: border-box}
*::before,*::after{margin:0;padding: 0;box-sizing: border-box}
ol,ul>li{list-style:none;}
a{text-decoration:none;}
::-webkit-scrollbar {
display: none
}
#app{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
}
#header{
  background: black;
}
#main{
  
  flex-grow: 1;
  
}
#footer{
  width: 100%;
  background: black;
  color: #666666;
  display: flex;
  justify-content: center;
  bottom: 0;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
}


</style>
