<template>


<div class="orders">


<h1>
我的订单
</h1>





<div

class="order-card"

v-for="order in orders"

:key="order.id"

@click="goDetail(order.id)"

>





<h3>

订单编号：

{{order.id}}

</h3>





<p>

创建时间：

{{order.createTime}}

</p>






<p>

商品：

</p>





<div

v-for="item in order.items"

:key="item.id"

>


{{item.image}}

{{item.name}}

×

{{item.quantity}}


</div>








<p>

订单金额：

¥{{order.total || order.totalPrice}}


</p>







<p>

订单状态：

{{order.status}}

</p>







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


import {useRouter} from "vue-router"


import {useUserStore} from "../stores/user"





const router = useRouter()



const userStore = useUserStore()



const orders = ref([])








function loadOrders(){



const data = JSON.parse(

localStorage.getItem("orders")

||

"[]"

)





orders.value = data.filter(

order =>

order.username === userStore.user.username

)



}








function goDetail(id){



router.push(

`/project/store/order/${id}`

)



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

margin-bottom:20px;

border-radius:15px;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


cursor:pointer;


}






.order-card:hover{


transform:translateY(-3px);


}







.empty{


text-align:center;

color:#888;

padding:40px;


}



</style>