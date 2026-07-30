<template>

<div class="detail">


<h1>
订单详情
</h1>



<div v-if="order">



<div class="card">


<h2>
订单编号：

{{order.id}}

</h2>


<p>
创建时间：

{{order.createTime}}

</p>


<p>
订单状态：

<span class="status">

{{order.status}}

</span>

</p>


</div>







<div class="card">


<h2>
商品信息
</h2>




<div

class="product"

v-for="item in order.items"

:key="item.id"

>



<div>

{{item.image}}

{{item.name}}

</div>



<div>

数量：

{{item.quantity}}

</div>



<div>

¥{{item.price * item.quantity}}

</div>



</div>


</div>








<div class="card">


<h2>
收货信息
</h2>



<p>

姓名：

{{order.username}}

</p>




<p>

电话：

{{order.phone || "暂无"}}

</p>




<p>

地址：

{{order.address || "暂无"}}

</p>



</div>








<div class="total">


订单总金额：

¥{{order.total || order.totalPrice}}


</div>






<div class="actions">



<button

@click="back"

>

返回我的订单

</button>




<button

class="delete"

@click="deleteOrder"

>

删除订单

</button>



</div>





</div>




<div v-else>


<h2>

订单不存在

</h2>


</div>



</div>

</template>






<script setup>


import {ref,onMounted} from "vue"


import {useRoute,useRouter} from "vue-router"



const route = useRoute()


const router = useRouter()



const order = ref(null)






function loadOrder(){



const data = JSON.parse(

localStorage.getItem("orders")

||

"[]"

)




order.value = data.find(

item =>

item.id == route.params.id

)



}








function deleteOrder(){



const data = JSON.parse(

localStorage.getItem("orders")

||

"[]"

)




const newOrders = data.filter(

item =>

item.id != order.value.id

)





localStorage.setItem(

"orders",

JSON.stringify(newOrders)

)



alert("订单删除成功")



router.push(

"/project/store/orders"

)



}







function back(){


router.push(

"/project/store/orders"

)


}






onMounted(()=>{


loadOrder()


})



</script>






<style scoped>


.detail{


max-width:900px;

margin:auto;

padding:40px;


}




h1{


text-align:center;

margin-bottom:40px;


}





.card{


background:white;

padding:25px;

border-radius:15px;

margin-bottom:25px;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


}





.product{


display:flex;

justify-content:space-between;

padding:15px 0;

border-bottom:1px solid #eee;


}





.status{


color:#2a9d8f;

font-weight:bold;


}







.total{


background:#222;

color:white;

padding:25px;

border-radius:12px;

font-size:25px;

text-align:center;


}







.actions{


display:flex;

justify-content:center;

gap:20px;

margin-top:30px;


}





button{


padding:12px 30px;

border:none;

border-radius:8px;

background:#222;

color:white;

cursor:pointer;


}




.delete{


background:#e63946;


}



</style>