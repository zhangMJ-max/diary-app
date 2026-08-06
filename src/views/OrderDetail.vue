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









<!-- 点击付款 -->

<div 

class="total"

@click="openPay"

>


订单总金额：

¥{{order.total || order.totalPrice}}


<p class="pay-tip">

点击付款

</p>


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






<!-- 付款弹窗 -->


<div

class="mask"

v-if="showPay"


>


<div class="pay-box">


<h2>

确认付款

</h2>



<p>

订单金额：

¥{{order.total || order.totalPrice}}

</p>



<p>

是否付款？

</p>




<div class="pay-actions">


<button

@click="cancelPay"

>

否

</button>



<button

class="confirm"

@click="confirmPay"

>

是

</button>



</div>




</div>


</div>





</div>

</template>









<script setup>


import {ref,onMounted} from "vue"


import {useRoute,useRouter} from "vue-router"



const route = useRoute()


const router = useRouter()



const order = ref(null)



// 控制付款弹窗

const showPay = ref(false)






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









// 打开付款

function openPay(){



if(order.value.status === "已付款"){


alert("该订单已经付款")

return


}



showPay.value=true


}







// 取消付款

function cancelPay(){


showPay.value=false


}







// 确认付款

function confirmPay(){



order.value.status="已付款"





const data = JSON.parse(

localStorage.getItem("orders")

||

"[]"

)



const index=data.findIndex(

item=>item.id==order.value.id

)




if(index!==-1){


data[index]=order.value


}



localStorage.setItem(

"orders",

JSON.stringify(data)

)




showPay.value=false



alert("付款成功")



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

cursor:pointer;


}




.pay-tip{


font-size:14px;

margin-top:10px;

opacity:.7;


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






/* 遮罩 */


.mask{


position:fixed;

top:0;

left:0;

right:0;

bottom:0;

background:rgba(0,0,0,.5);

display:flex;

align-items:center;

justify-content:center;


}






.pay-box{


background:white;

width:350px;

padding:35px;

border-radius:15px;

text-align:center;


}





.pay-actions{


display:flex;

justify-content:center;

gap:30px;

margin-top:25px;


}




.confirm{


background:#2a9d8f;


}



</style>