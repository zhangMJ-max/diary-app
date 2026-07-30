<template>


<div class="orders">


<h1>
我的订单
</h1>




<div

class="order-card"

v-for="order in orders"

:key="order.id"

>



<div class="header">


<h3>

订单号：

{{order.id}}

</h3>


<span>

{{order.createTime}}

</span>


</div>





<div

class="products"

v-for="item in order.items"

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






<div class="footer">


<p>

收货人：

{{order.username}}

</p>


<p>

地址：

{{order.address}}

</p>



<h3>

金额：

¥{{order.total}}

</h3>



<p>

状态：

<span :class="order.status">

{{order.status}}

</span>


</p>




<button

v-if="order.status==='待付款'"

@click="payOrder(order.id)"

>


立即付款


</button>



</div>



</div>






<div

v-if="orders.length===0"

class="empty"

>

暂无订单

</div>



</div>


</template>






<script setup>


import {ref,onMounted} from "vue"



const orders = ref([])




function loadOrders(){


const data = localStorage.getItem(

"orders"

)



if(data){


orders.value = JSON.parse(data)


}


}




function payOrder(id){



const order = orders.value.find(

item=>item.id===id

)



if(order){


order.status="已付款"



localStorage.setItem(

"orders",

JSON.stringify(orders.value)

)


alert("付款成功")


}



}







onMounted(()=>{


loadOrders()


})



</script>






<style scoped>


.orders{


max-width:900px;

margin:auto;

padding:40px;


}




h1{


text-align:center;

margin-bottom:40px;


}





.order-card{


background:white;

padding:25px;

border-radius:15px;

margin-bottom:25px;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


}




.header{


display:flex;

justify-content:space-between;

margin-bottom:20px;


}




.products{


display:flex;

justify-content:space-between;

padding:15px 0;

border-bottom:1px solid #eee;


}




.footer{


margin-top:20px;


}




button{


margin-top:15px;

padding:12px 25px;

background:#222;

color:white;

border:none;

border-radius:8px;

cursor:pointer;


}



button:hover{


opacity:.8;


}




.待付款{


color:#e67e22;

font-weight:bold;


}




.已付款{


color:#2a9d8f;

font-weight:bold;


}





.empty{


text-align:center;

color:#999;


}


</style>