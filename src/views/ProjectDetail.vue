<template>

<div class="detail">


<h1>
Vue Mini Store
</h1>


<h2>
项目介绍
</h2>


<p>
基于 Vue3 开发的小型电商系统，实现商品展示、购物车管理、用户登录等核心功能。
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
用户登录
</li>


<li>
用户状态管理
</li>


<li>
页面路由管理
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


margin:60px auto;


padding:50px;


background:white;


border-radius:20px;


box-shadow:

0 10px 30px rgba(0,0,0,.08);


}



h1{


text-align:center;


font-size:36px;


margin-bottom:40px;


}



h2{


margin-top:30px;


font-size:22px;


}



p{


line-height:1.8;


color:#555;


font-size:16px;


}



.tags{


display:flex;


gap:12px;


flex-wrap:wrap;


margin-top:15px;


}



.tags span{


background:#f1f1f1;


padding:8px 16px;


border-radius:20px;


font-size:14px;


}



ul{


padding-left:20px;


}



li{


margin:14px 0;


}



button{


display:block;


margin:40px auto 0;


padding:14px 45px;


background:#222;


color:white;


border:none;


border-radius:10px;


cursor:pointer;


font-size:16px;


}



button:hover{


opacity:.8;


}



</style>