<template>
    <div>
        <div class="article_header_personnel">
            <img   class="personnel_icon"  src="image/人员.png" alt="">
            <p >人员管理</p>
        </div>
        <div class="article_header_role">
            <img  class="role_icon"  src="image/角色管理.png" alt="">
            <p>角色管理</p>
        </div>
    </div>
</template>

<style>
.personnel_icon{
    height: 23px;
    float: left;
    margin-left: 12px;
    margin-top: 14px;

}
.role_icon{
    height: 20px;
    float: left;
    margin-left: 12px;
    margin-top: 14px;
}

.article_header_personnel{

    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    width: 120px;
    height: 48px;
    float: left;
    font-size: 16px;
    text-align:center;
    line-height: 48px;
    border-style: solid;
    border-bottom-color:  red;
}

.article_header_role{
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    width: 120px;
    height: 48px;
    float: left;
    font-size: 16px;
    text-align: center;
    line-height: 48px;
}


.article_header_personnel:hover{background-color: bisque;}
.article_header_role:hover{background-color: bisque;}

</style>