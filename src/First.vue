<template>
<div class="main">
    <div class="header">
    <div class="header_left">
       <img class="logo" src="../src/assets/业绩.png" alt="">
        <p class="header_title">单位管理</p>
    </div>
    <div class="header_right">
         <img class="user_icon" src="../src/assets/系统管理员.png" alt="">
        <div class="userBox">
            <p>admin</p>
            <p>超级管理员</p>
        </div>
        <img class="loginOut_icon" src="../src/assets/退出.png" alt="">
    </div>
    </div>
 <article class="article">
   <article class="article_header">
    <Middle></Middle>
   </article>
  <article class="article_content">
      <Left></Left>
      
      <Right></Right>
  </article>


 </article>
  

</div>
</template>



<style>


*{padding: 0;
margin: 0;}

/*头部 */
.header{background-color: crimson;
    height:68px;
    width: 100%;
    position: relative;
}
.header_left{
    float: left;}

.logo{
    float: left;
    width: 55px;
    height: 55px;
    margin-left:5px;
    margin-top: 5px;}

.header_title{
    float: left;
    font-size: 40px;
    margin-left: 7px;
    color: white;
    font-weight: bolder;
    line-height: 70px;
    font-family: 华文行楷;
}

.header_right{
    float:right;
    margin-right: 20px;}
.user_icon{
    display: block;
    float: left;
    height: 35px;
    margin-top: 15px;
}

.userBox{
    float: left;
    margin-top: 15px;
    color: white;
    font-size: 14px;
    margin-left: 5px;
}

 .loginOut_icon{
    height: 35px;
    float: left;
    margin-top: 15px;
    margin-left: 15px;
}
/*中部选择栏 */
.article_header {
    background-color: white;
    width: 100%;
    height: 50px;
    position: relative;
    float: left;
}
/*主要内容 */
.article_content{

    width:100% ;
    height:600px;

}
</style>

<script type="java/script">
import Left from '../src/components/Left.vue'
import Right from '../src/components/Right.vue'
import  Middle from '../src/components/Middle.vue'


export default{
    components:{
        Left,
        Right,
        Middle,
        
    },
    data(){}
}
</script>