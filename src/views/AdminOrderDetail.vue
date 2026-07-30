<template>


<div class="admin-order">


<h1>
后台订单管理
</h1>



<div v-if="order" class="card">


<h2>
订单编号：
{{order.id}}
</h2>


<p>
创建时间：
{{order.createTime}}
</p>


<p>
客户：
{{order.username}}
</p>


<p>
地址：
{{order.address}}
</p>


<h2>
商品信息
</h2>



<div

class="item"

v-for="item in order.items"

:key="item.id"

>


<span>

{{item.image}}

{{item.name}}

</span>


<span>

数量：

{{item.quantity}}

</span>


<span>

¥{{item.price * item.quantity}}

</span>


</div>



<h2>

订单金额：

¥{{order.total}}

</h2>




<div class="status">


当前状态：

<strong>

{{order.status}}

</strong>



</div>





<h3>
修改订单状态
</h3>



<select

v-model="newStatus"

>


<option>
待付款
</option>


<option>
已付款
</option>


<option>
已发货
</option>


<option>
已完成
</option>


</select>



<button @click="updateStatus">

保存修改

</button>



</div>



<div v-else>


订单不存在

</div>



</div>


</template>





<script setup>


import {ref,onMounted} from "vue"

import {useRoute} from "vue-router"



const route = useRoute()



const order = ref(null)


const newStatus = ref("")





function loadOrder(){


const data = localStorage.getItem(

"orders"

)



if(data){


const orders = JSON.parse(data)



order.value = orders.find(

item=>item.id == route.params.id

)



if(order.value){


newStatus.value = order.value.status


}



}


}






function updateStatus(){


const data = JSON.parse(

localStorage.getItem("orders")

)



const index = data.findIndex(

item=>item.id == route.params.id

)



if(index!==-1){


data[index].status = newStatus.value


localStorage.setItem(

"orders",

JSON.stringify(data)

)



order.value.status = newStatus.value



alert("订单状态更新成功")


}


}





onMounted(()=>{


loadOrder()


})



</script>





<style scoped>


.admin-order{


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

padding:30px;

border-radius:15px;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


}



.item{


display:flex;

justify-content:space-between;

padding:15px 0;

border-bottom:1px solid #eee;


}



.status{


margin:30px 0;

font-size:20px;


}



select{


padding:10px;

width:200px;

border-radius:8px;


}



button{


display:block;

margin-top:20px;

padding:12px 30px;

background:#222;

color:white;

border:none;

border-radius:8px;

cursor:pointer;


}


</style>