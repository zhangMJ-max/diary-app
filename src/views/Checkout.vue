<template>


<div class="checkout">


<h1>
确认订单
</h1>



<div class="order-list">


<h2>
商品信息
</h2>


<div

class="item"

v-for="item in cartStore.cartItems"

:key="item.id"

>


<span>

{{item.image}}

{{item.name}}

</span>


<span>

x {{item.quantity}}

</span>


<span>

¥{{item.price * item.quantity}}

</span>


</div>


</div>





<div class="address">


<h2>

收货信息

</h2>



<input

v-model="username"

placeholder="请输入姓名"

/>



<input

v-model="address"

placeholder="请输入收货地址"

/>



<input

v-model="phone"

placeholder="请输入联系电话"

/>



</div>





<div class="total">


<h2>

总金额：

¥{{cartStore.totalPrice}}

</h2>



<button

@click="submitOrder"

>

提交订单

</button>


</div>



</div>


</template>





<script setup>


import {ref} from "vue"

import {useRouter} from "vue-router"

import {useCartStore} from "../stores/cart"



const router = useRouter()


const cartStore = useCartStore()



const username = ref("")

const address = ref("")

const phone = ref("")





function submitOrder(){



if(
!username.value ||
!address.value ||
!phone.value
){

alert("请填写完整信息")

return

}



const order={


id:Date.now(),

username:username.value,

address:address.value,

phone:phone.value,

items:cartStore.cartItems,

total:cartStore.totalPrice,


createTime:new Date().toLocaleString(),

status:"待付款"


}



const oldOrders = JSON.parse(

localStorage.getItem("orders") || "[]"

)



oldOrders.push(order)



localStorage.setItem(

"orders",

JSON.stringify(oldOrders)

)



cartStore.cartItems.splice(0)



alert("订单提交成功")



router.push("/")

}



</script>





<style scoped>


.checkout{


max-width:800px;

margin:auto;

padding:40px;


}



h1{

text-align:center;

margin-bottom:40px;

}




.order-list,
.address,
.total{


background:white;

padding:25px;

border-radius:15px;

margin-bottom:25px;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


}



.item{


display:flex;

justify-content:space-between;

padding:15px 0;

border-bottom:1px solid #eee;


}



input{


width:100%;

padding:12px;

margin-top:15px;

border:1px solid #ddd;

border-radius:8px;


}



button{


width:100%;

padding:15px;

background:#222;

color:white;

border:none;

border-radius:10px;

cursor:pointer;


}



</style>