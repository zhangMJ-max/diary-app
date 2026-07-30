<template>

<div class="detail">


<div class="image">

{{product.image}}

</div>


<h1>

{{product.name}}

</h1>


<h2>

¥{{product.price}}

</h2>



<p>

{{product.description}}

</p>



<button @click="addCart">

加入购物车

</button>


</div>

</template>



<script setup>


import {computed} from "vue"

import {useRoute} from "vue-router"

import {useCartStore} from "../stores/cart"



const route = useRoute()


const cartStore = useCartStore()



const products=[


{
id:1,
name:"机械键盘",
price:399,
image:"⌨️",
description:"机械轴体，RGB背光，适合程序员办公"
},


{
id:2,
name:"无线耳机",
price:599,
image:"🎧",
description:"降噪蓝牙耳机，适合办公和娱乐"
},


{
id:3,
name:"办公鼠标",
price:199,
image:"🖱️",
description:"人体工学设计，长时间使用舒适"
}


]



const product = computed(()=>{


return products.find(

item=>item.id==route.params.id

)


})




function addCart(){


cartStore.addCart(product.value)


alert("加入购物车成功")


}



</script>




<style scoped>


.detail{


max-width:600px;

margin:50px auto;

background:white;

padding:40px;

border-radius:15px;

text-align:center;


box-shadow:

0 5px 20px rgba(0,0,0,.1);


}



.image{


font-size:100px;

margin-bottom:30px;


}



h2{


margin:20px 0;

color:#e63946;


}



button{


padding:12px 30px;

border:none;

background:#222;

color:white;

border-radius:8px;

cursor:pointer;


}



</style>