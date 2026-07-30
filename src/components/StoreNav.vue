<template>


<nav class="store-nav">


<router-link to="/project/store">

首页

</router-link>


<router-link to="/project/store/shop">

商城

</router-link>


<router-link to="/project/store/cart">

购物车

</router-link>


<router-link to="/project/store/login">

登录

</router-link>



</nav>


</template>



<style scoped>


.store-nav{


display:flex;

gap:25px;

padding:20px;

background:white;


}



a{


text-decoration:none;

color:#333;


}


</style>