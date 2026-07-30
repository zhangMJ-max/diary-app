<template>


<div class="cart">


<h1>
购物车
</h1>




<div

class="cart-item"

v-for="item in cartStore.cartItems"

:key="item.id"

>



<div class="emoji">

{{item.image}}

</div>





<div class="info">


<h3>

{{item.name}}

</h3>


<p>

价格：

¥{{item.price}}

</p>





<div class="control">


<button

@click="cartStore.decrease(item.id)"

>

-

</button>




<span>

{{item.quantity}}

</span>




<button

@click="cartStore.increase(item.id)"

>

+

</button>



<button

class="delete"

@click="cartStore.removeCart(item.id)"

>

删除

</button>



</div>



</div>




</div>







<div class="summary">


<h2>

商品数量：

{{cartStore.cartCount}}

</h2>



<h2>

总价格：

¥{{cartStore.totalPrice}}

</h2>




<button

@click="checkout"

>

立即结算

</button>


</div>




</div>


</template>







<script setup>


import {useCartStore} from "../stores/cart"

import {useOrderStore} from "../stores/order"

import {useRouter} from "vue-router"



const cartStore=useCartStore()


const orderStore=useOrderStore()


const router=useRouter()





function checkout(){


if(cartStore.cartItems.length===0){


alert("购物车为空")


return


}



orderStore.createOrder(

cartStore.cartItems,

cartStore.totalPrice

)



cartStore.cartItems=[]



router.push(

"/project/store/orders"

)


}



</script>







<style scoped>


.cart{


max-width:900px;

margin:auto;

padding:40px;


}



h1{


text-align:center;

margin-bottom:40px;


}



.cart-item{


display:flex;

align-items:center;

gap:30px;


background:white;

padding:25px;

margin-bottom:20px;


border-radius:12px;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


}




.emoji{


font-size:50px;


}




.control{


display:flex;

align-items:center;

gap:15px;

margin-top:15px;


}



button{


padding:8px 15px;

border:none;

background:#222;

color:white;

border-radius:6px;

cursor:pointer;


}




.delete{


background:#c0392b;


}





.summary{


margin-top:40px;

background:#f5f5f5;

padding:25px;

border-radius:12px;


}



.summary button{


margin-top:20px;

padding:12px 30px;


}



</style>