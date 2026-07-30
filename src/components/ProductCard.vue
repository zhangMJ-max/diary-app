<template>


<div class="product">


<div class="image">

{{product.image}}

</div>



<h3>

{{product.name}}

</h3>



<p class="price">

¥{{product.price}}

</p>


<div class="buttons">


<button @click="goDetail">

查看详情

</button>



<button @click="addCart">

加入购物车

</button>


</div>


</div>

</template>



<script setup>


import {useRouter} from "vue-router"

import {useCartStore} from "../stores/cart"



const router = useRouter()

const cartStore = useCartStore()



const props = defineProps({

product:Object

})



function goDetail(){


router.push(

`/product/${props.product.id}`

)


}



function addCart(){


cartStore.addCart(props.product)


alert("加入购物车成功")


}



</script>



<style scoped>


.product{

padding:25px;

border-radius:15px;

background:white;

box-shadow:0 5px 15px rgba(0,0,0,.1);

text-align:center;

}



.image{

font-size:60px;

}



.price{

font-size:20px;

font-weight:bold;

}



.buttons{

display:flex;

justify-content:center;

gap:10px;

}



button{

padding:10px 15px;

border:none;

background:#222;

color:white;

border-radius:8px;

cursor:pointer;

}


</style>