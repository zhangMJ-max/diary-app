import {defineStore} from "pinia"

import {ref} from "vue"

import {useUserStore} from "./user"



export const useOrderStore = defineStore(
"order",
()=>{


const userStore = useUserStore()



const orders = ref(

JSON.parse(

localStorage.getItem("orders")

||

"[]"

)

)





function saveOrders(){

localStorage.setItem(

"orders",

JSON.stringify(orders.value)

)

}






function createOrder(
cartItems,
totalPrice
){


const order={


id:Date.now(),


orderNo:

"ORD"+Date.now(),



username:

userStore.user.username,



items:[...cartItems],



totalPrice,



status:"待付款",



createTime:

new Date().toLocaleString()



}



orders.value.push(order)



saveOrders()



return order


}








// 用户付款

function payOrder(id){



const order=

orders.value.find(

item=>item.id===id

)



if(order){


order.status="已付款"


saveOrders()


}


}








// 管理员修改订单状态

function updateStatus(id,status){



const order=

orders.value.find(

item=>item.id===id

)



if(order){


order.status=status


saveOrders()


}


}






return{


orders,

createOrder,

payOrder,

updateStatus


}



}

)