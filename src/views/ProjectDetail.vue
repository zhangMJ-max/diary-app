<template>


<div class="detail">


<h1>
Vue Mini Store
</h1>




<h2>
项目介绍
</h2>


<p>

基于 Vue3 开发的小型电商系统，实现商品展示、购物车、订单管理、用户权限管理等功能。

</p>





<h2>
技术栈
</h2>




<div class="tags">


<span>
Vue3
</span>


<span>
Vue Router
</span>


<span>
Pinia
</span>


<span>
JavaScript
</span>


<span>
CSS3
</span>



</div>






<h2>
主要功能
</h2>



<ul>


<li>
商品展示
</li>



<li>
商品详情
</li>



<li>
购物车管理
</li>



<li>
订单生成
</li>



<li>
用户登录与权限控制
</li>



<li>
后台商品管理
</li>



<li>
订单状态管理
</li>


</ul>





<button

@click="enterStore"

>

进入商城体验

</button>





</div>


</template>






<script setup>


import {useRouter} from "vue-router"



const router = useRouter()




function enterStore(){


router.push(

"/project/store/login"

)


}



</script>






<style scoped>


.detail{


max-width:900px;


margin:auto;


padding:40px;


background:white;


border-radius:15px;


box-shadow:

0 5px 20px rgba(0,0,0,.08);


}



h1{


text-align:center;


margin-bottom:40px;


}



h2{


margin-top:30px;


}




.tags{


display:flex;


gap:10px;


flex-wrap:wrap;


}



.tags span{


background:#eee;


padding:8px 15px;


border-radius:8px;


}




li{


margin:12px 0;


}




button{


margin-top:40px;


padding:12px 30px;


background:#222;


color:white;


border:none;


border-radius:8px;


cursor:pointer;


font-size:16px;


}



button:hover{


opacity:.8;


}



</style>