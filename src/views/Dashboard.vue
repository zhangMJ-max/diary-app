<template>

<div class="dashboard">


<h1>
后台管理中心
</h1>




<div class="cards">



<div class="card">

<h3>
商品数量
</h3>

<p>
{{productCount}}
</p>

</div>





<div class="card">

<h3>
订单数量
</h3>

<p>
{{orderCount}}
</p>

</div>





<div class="card">

<h3>
销售总额
</h3>

<p>
¥{{totalSales}}
</p>

</div>



</div>






<div class="orders">


<h2>
最近订单
</h2>




<div

class="order"

v-for="order in recentOrders"

:key="order.id"

@click="goDetail(order.id)"

>



<div>

订单号：

{{order.id}}

</div>




<div>

用户：

{{order.username}}

</div>




<div>

金额：

¥{{getOrderMoney(order)}}

</div>




<div>

状态：

{{order.status}}

</div>



</div>






<div

v-if="orders.length===0"

class="empty"

>

暂无订单

</div>



</div>



</div>


</template>






<script setup>


import {ref,computed,onMounted} from "vue"

import {useRouter} from "vue-router"



const router=useRouter()



const orders=ref([])



const products=ref([])





const productCount=computed(()=>{


return products.value.length


})






const orderCount=computed(()=>{


return orders.value.length


})







// 计算所有用户销售额

const totalSales=computed(()=>{


return orders.value.reduce(

(total,order)=>{


return total + getOrderMoney(order)


},

0

)


})







// 兼容旧订单 total 和新订单 totalPrice

function getOrderMoney(order){


return Number(

order.totalPrice

||

order.total

||

0

)


}







// 最近订单

const recentOrders=computed(()=>{


return orders.value

.slice()

.reverse()

.slice(0,5)


})







function loadData(){



const orderData=

localStorage.getItem("orders")




if(orderData){


orders.value=

JSON.parse(orderData)


}






const productData=

localStorage.getItem("products")





if(productData){


products.value=

JSON.parse(productData)


}else{


products.value=[

{
id:1,
name:"机械键盘",
price:399
},

{
id:2,
name:"无线耳机",
price:599
},

{
id:3,
name:"办公鼠标",
price:199
}

]


}



}







function goDetail(id){


router.push(

`/project/store/admin/order/${id}`

)


}







onMounted(()=>{


loadData()


})



</script>






<style scoped>


.dashboard{


max-width:1200px;

margin:auto;

padding:40px;


}



h1{


text-align:center;

margin-bottom:40px;


}



.cards{


display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;


}



.card{


background:white;

padding:30px;

border-radius:15px;

text-align:center;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


}




.card h3{


color:#666;


}




.card p{


font-size:40px;

font-weight:bold;

margin-top:20px;


}





.orders{


margin-top:50px;

background:white;

padding:30px;

border-radius:15px;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


}




.order{


display:flex;

justify-content:space-between;

padding:15px;

border-bottom:1px solid #eee;

cursor:pointer;


}




.order:hover{


background:#f5f5f5;


}



.empty{


text-align:center;

padding:30px;

color:#999;


}





@media(max-width:700px){


.cards{


grid-template-columns:1fr;


}



.order{


flex-direction:column;

gap:10px;


}


}



</style>