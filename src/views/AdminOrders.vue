<template>


<div class="admin-orders">


<h1>
订单管理
</h1>




<div

class="order-card"

v-for="order in orders"

:key="order.id"

@click="viewDetail(order.id)"

>



<div class="header">


<h3>

订单编号：

{{order.orderNo || order.id}}

</h3>


<span>

{{order.status}}

</span>


</div>





<p>

用户：

{{order.username}}

</p>





<p>

创建时间：

{{order.createTime || "暂无"}}

</p>





<h3>
商品信息
</h3>



<div

class="product"

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






<p class="money">


订单金额：

¥{{getMoney(order)}}

</p>







<div

@click.stop


>


<select

:value="order.status"

@change="changeStatus(order.id,$event.target.value)"

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


import {useRouter} from "vue-router"

import {useOrderStore} from "../stores/order"




const router=useRouter()



const orderStore=useOrderStore()



const orders=orderStore.orders






function getMoney(order){



return Number(

order.totalPrice

||

order.total

||

0

)


}








function changeStatus(id,status){



orderStore.updateStatus(

id,

status

)


alert("订单状态修改成功")


}








function viewDetail(id){


router.push(

`/project/store/admin/order/${id}`

)


}



</script>







<style scoped>


.admin-orders{


max-width:1000px;

margin:auto;

padding:40px;


}




h1{


text-align:center;

margin-bottom:40px;


}




.order-card{


background:white;

padding:30px;

margin-bottom:25px;

border-radius:15px;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


cursor:pointer;


transition:.2s;


}





.order-card:hover{


transform:translateY(-3px);


}





.header{


display:flex;

justify-content:space-between;

align-items:center;


}




.header span{


padding:6px 15px;

background:#eee;

border-radius:20px;


}





.product{


display:flex;

justify-content:space-between;

padding:12px 0;

border-bottom:1px solid #eee;


}





.money{


font-size:20px;

font-weight:bold;

margin-top:20px;


}




select{


margin-top:20px;

padding:10px;

border-radius:8px;

border:1px solid #ddd;


}





.empty{


text-align:center;

padding:50px;

color:#999;


}



</style>