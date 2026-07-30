<template>


<div class="app">


<header>


<div class="logo">


{{logoText}}


</div>





<nav>



<!-- 作品首页 -->

<template v-if="!isStore">


<router-link to="/">

首页

</router-link>


</template>








<!-- 电商系统 -->

<template v-else>



<!-- 返回作品首页 -->

<router-link to="/">

返回作品首页

</router-link>






<!-- 管理员 -->

<template v-if="isAdmin">



<router-link to="/project/store/dashboard">

后台首页

</router-link>





<router-link to="/project/store/admin/products">

商品管理

</router-link>





<router-link to="/project/store/admin/orders">

订单管理

</router-link>



</template>








<!-- 普通用户 -->

<template v-else>



<router-link to="/project/store/shop">

商城

</router-link>





<router-link to="/project/store/cart">

购物车

</router-link>





<router-link to="/project/store/orders">

我的订单

</router-link>





<router-link to="/project/store/profile">

个人中心

</router-link>



</template>




</template>




</nav>



</header>






<main>


<router-view />


</main>



</div>


</template>








<script setup>


import {computed} from "vue"

import {useRoute} from "vue-router"

import {useUserStore} from "./stores/user"



const route=useRoute()


const userStore=useUserStore()





const isStore=computed(()=>{


return route.path.startsWith(

"/project/store"

)


})







const isAdmin=computed(()=>{


return userStore.user?.role==="admin"


})







const logoText=computed(()=>{



if(isAdmin.value){


return "Vue Mini Store Admin"


}



return "Vue Mini Store"



})



</script>








<style>


*{


margin:0;

padding:0;

box-sizing:border-box;


}




body{


background:#f7f8fa;

font-family:

"Microsoft YaHei",
Arial;


}





header{


height:70px;

background:white;

display:flex;

justify-content:space-between;

align-items:center;

padding:0 40px;


box-shadow:

0 2px 10px rgba(0,0,0,.05);


}





.logo{


font-size:24px;

font-weight:bold;


}





nav{


display:flex;

gap:25px;


}




nav a{


text-decoration:none;

color:#555;


}




.router-link-active{


color:#000;

font-weight:bold;


}





main{


min-height:calc(100vh - 70px);


}



</style>