<template>
<div class="article_content_right">
   <div class="content_header">

     <table class="table1" cellspacing="0" border="1">
                      <tr >
                          <td class="td" colspan="4">机构信息</td>
                      </tr>
                   <tr>
                       <td width="170" >机构名称</td>
                       <td  width="400">柳州市公安局</td>
                       <td width="170">所属单位</td>
                       <td width="400"></td>
                   </tr>
                   <tr>
                       <td>机构简称</td>
                       <td>柳州</td>
                       <td>上级机构名称</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td>机构代码</td>
                       <td>4502000000</td>
                       <td>业务上级机构</td>
                       <td></td>
                   </tr>

               </table>

    </div>
         <div class="content_body">
             <table class="table2" cellspacing="0" border="1">
                 <tr >
                      <td class="td" colspan="7">人员信息</td>
                  </tr>

                  <tr >
                      <td  colspan="7" class="td2"><input type="text" value="请输入警号" style=" text-align:inherit; height:25px">
                      <span class="button1" style="color: white ;"><img src="../assets/搜索.png"width="23"height="20"></span>
                         <span class="button2" style="color: white;vertical-align:middle;">新增</span></td>

                  </tr>

                  <tr class="tr1">
                      <td width="60" >序号</td>
                      <td width="150">警号</td>
                      <td width="150">姓名</td>
                      <td width="150">账号名称</td>
                      <td width="150">角色名称</td>
                      <td width="150">权限机构</td>
                      <td width="400">操作</td>

                  </tr>

                  <tr class="tr2">
                      <td  >1</td>
                      <td  >3974684</td>
                      <td >韦飘香</td>
                      <td >354155</td>
                      <td >领导角色</td>
                      <td >柳州市公安局</td>
                      <td><div class="tr_img"><img src="../assets/编辑.png" width="20"height="20" ><span style="color:orangered" >编辑</span>
                      <img src="../assets/播放 .png"width="20"height="20"><span style="color: limegreen">授权</span>
                          <img src="../assets/暂停.png"width="20"height="20"><span style="color: red">取消授权</span>
                          <img src="../assets/删除.png"width="20"height="20"><span style="color: red">删除</span>
                          <img src="../assets/编辑.png"width="20"height="20"><span style="color: orangered">重置密码</span>
                      </div></td>
                  </tr>

                  <tr class="td2">
                      <td  >2</td>
                      <td  >3985566</td>
                      <td >吴振兴</td>
                      <td >20010</td>
                      <td >领导角色</td>
                      <td >柳州市公安局</td>
                      <td><div class="tr_img"><img src="../assets/编辑.png" width="20"height="20" ><span style="color:orangered" >编辑</span>
                          <img src="../assets/播放 .png"width="20"height="20"><span style="color: limegreen">授权</span>
                          <img src="../assets/暂停.png"width="20"height="20"><span style="color: red">取消授权</span>
                          <img src="../assets/删除.png"width="20"height="20"><span style="color: red">删除</span>
                          <img src="../assets/编辑.png"width="20"height="20"><span style="color: orangered">重置密码</span>
                      </div></td>
                  </tr>

                <tr class="tr2">
                      <td  >3</td>
                      <td >200274</td>
                      <td >郭毅</td>
                      <td>200274</td>
                      <td >领导角色</td>
                      <td>柳州市公安局</td>
                      <td >
                          <div class="tr_img">
                        <div class="tr_img_box"><img src="../assets/编辑.png" width="20"height="20" ><span style="color:orangered" >编辑</span></div>
                         <div class="tr_img_box"> <img src="../assets/播放 .png"width="20"height="20"><span style="color: limegreen">授权</span></div>
                         <div class="tr_img_box"> <img src="../assets/暂停.png"width="20"height="20"><span style="color: red">取消授权</span></div>
                         <div class="tr_img_box"> <img src="../assets/删除.png"width="20"height="20"><span style="color: red">删除</span></div>
                          <div class="tr_img_box"> <img src="../assets/编辑.png"width="20"height="20"><span style="color: orangered">重置密码</span></div>
                      </div></td>
                  </tr> 

             </table>
             <!-- <div class="number"><p><</p></div>
                  <div class="number1"><p>1</p></div>
                  <div class="number2"><p>></p></div>
                  <div class="number3"><p>15条/页⮟</p></div> -->



            <div class="page-bar">
                  <ul>
                   <li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>
                   <li v-if="cur==1"><a class="banclick">上一页</a></li>
                   <li v-for="index in indexs" v-bind:class="{ 'active': cur == index}">
                   <a v-on:click="btnClick(index)">{{ index }}</a>
                  </li>
                   <li v-if="cur!=all"><a v-on:click="cur++,pageClick()">下一页</a></li>
                   <li v-if="cur == all"><a class="banclick">下一页</a></li>
                   <li><a>共<i>{{all}}</i>页</a></li>
                 </ul>
            </div>        


            


             </div>

             
 </div>
</template>
<style>
 /*右侧表格栏*/
.article_content_right{
    width: 1000px;
    height: 548px;


    position: relative;
     left: 500px;
}
/*右侧表格栏上部分*/
.content_header{

    width: 1165px;
    height: 220px;
    border-top: 1px solid #dcdfe6;
    border-left: 1px solid #dcdfe6;
    border-right: 1px solid #dcdfe6;
    margin-bottom: 0px;
    display: flex;
    position: relative;
    bottom: 591px;
    right: 140px;
}
.content_body{

     width: 1167px;
     height: 320px;
    border-left:1px solid gainsboro;
    border-right:1px solid gainsboro;
    border-bottom:1px solid gainsboro;
    position: relative;
    bottom: 590px;
    right: 140px;
}
/*机构信息*/
.table1{margin-top: 10px;margin-left: 10px;margin-bottom: 10px;margin-right: 10px;border-color: #dcdfe6}
td{line-height: 37px;text-align: center;font-size: 12px;}
.td{text-align: left;padding-left: 10px;background-color: #fdedde;}
.table1 tr td:nth-of-type(2n-1){background-color: #fdedde}

/*人员信息*/
.table2{margin-top: 0px;margin-left: 10px;margin-bottom: 10px;margin-right: 10px;border-color:  #dcdfe6}
.table2  td{text-align: left;padding-left: 10px;}
.td2{background-color: white;text-align: center;}
.tr1{background-color: lavender;text-align: center;}
.tr2{background-color: lightgray;text-align: center;}

/*操作按钮*/
.tr_img{line-height: 5px;margin-top: 5px;vertical-align:middle;}
.tr_img_box{width:67px ; display: inline;padding-top: 5px;vertical-align:middle;display: inline;}
.tr_img span{margin-left: 2px;line-height: 37px;font-size: 12px;text-align: center;vertical-align:middle;}

/*按钮*/
.button1{background-color: crimson ;
  
    margin-left: 0px;
    border-radius:3px 3px 3px 3px;
    padding-top: 7px;
    padding-left: 6px;
    padding-right: 6px;
    padding-bottom: 6px;
}

.button2{background-color: crimson;
float: right;
width: 47px;height: 25px;margin-right: 7px;
margin-top: 3px;text-align: center;
padding-bottom: 5px;
padding-top: 0px;
font-size: 10px;
border-radius:3px 3px 3px 3px;
}

.number{ border: 1px solid black;width: 30px;height: 30px;
position: relative;
left: 930px;
top:30px;text-align: center;}

.number1{ border: 1px solid black;width: 30px;height: 30px;
    position: relative;
    left: 970px;
    bottom: 2px;text-align: center;}

.number2{border: 1px solid black;width: 30px;height: 30px;
    position: relative;
    left: 1010px;
    bottom:34px;
    text-align: center;}
.number3{border: 1px solid black;width: 90px;height: 30px;text-align: center;
    position: relative;
    left: 1050px;
bottom: 66px;}

/*分页*/
.page-bar{
margin:10px auto;
margin-top: 30px;
margin-left: 650px;

}
ul,li{
margin: 0px;
padding: 0px;
}
li{
list-style: none
}
.page-bar li:first-child>a {
margin-left: 0px
}
.page-bar a{
border: 1px solid #ddd;
text-decoration: none;
position: relative;
float: left;
padding: 6px 12px;
margin-left: -1px;
line-height: 1.42857143;
color: #5D6062;
cursor: pointer;
margin-right: 10px;
}
.page-bar a:hover{
background-color: #eee;
}
.page-bar a.banclick{
cursor:not-allowed;
}
.page-bar .active a{
color: #fff;
cursor: default;
background-color: #E96463;
border-color: #E96463;
}
.page-bar i{
font-style:normal;
color: #d44950;
margin: 0px 4px;
font-size: 12px;
}

 
</style>

<script type="java/script">
export default {
    data () {
return {
all: 5, //总页数
cur: 1,//当前页码
totalPage: 0,//当前条数
}
},
methods: {
//请求数据
dataListFn: function(index){
this.$axios.get("http://127.0.0.1:8090/demand/selectListByPage",
{
params:{
page: index,
limit:'5',
state: 0
}
}).then((res) => {
if(res.data.message == "success"){
this.dataList=[];
for(let i=0;i<res.data.data.length;i++){
this.dataList.push(res.data.data[i])
}
this.all = res.data.totalPage;//总页数
this.cur = res.data.pageNum;
this.totalPage = res.data.totalPage;
}

});
},
//分页
btnClick: function(data){//页码点击事件
if(data != this.cur){
this.cur = data
}
//根据点击页数请求数据
this.dataListFn(this.cur.toString());
},
pageClick: function(){
//根据点击页数请求数据
this.dataListFn(this.cur.toString());
}
},
computed: {
//分页
indexs: function(){
var left = 1;
var right = this.all;
var ar = [];
if(this.all>= 5){
if(this.cur > 3 && this.cur < this.all-2){
left = this.cur - 2
right = this.cur + 2
}else{
if(this.cur<=3){
left = 1
right = 5
}else{
right = this.all
left = this.all -4
}
}
}
while (left <= right){
ar.push(left)
left ++
}
return ar
}
}
}
</script>