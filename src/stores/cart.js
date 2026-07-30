import {defineStore} from "pinia"

import {ref,computed} from "vue"



export const useCartStore = defineStore(
"cart",
()=>{


const cartItems = ref([])




// 添加商品

function addCart(product){


const item = cartItems.value.find(

item=>item.id===product.id

)



if(item){


item.quantity++


}else{


cartItems.value.push({

...product,

quantity:1

})


}


}




// 增加数量

function increase(id){


const item = cartItems.value.find(

item=>item.id===id

)


if(item){


item.quantity++


}



}






// 减少数量

function decrease(id){


const item = cartItems.value.find(

item=>item.id===id

)



if(item){


if(item.quantity>1){


item.quantity--


}else{


removeCart(id)


}


}



}






// 删除商品

function removeCart(id){


cartItems.value = cartItems.value.filter(

item=>item.id!==id

)


}







const cartCount = computed(()=>{


return cartItems.value.reduce(

(total,item)=>

total+item.quantity,

0

)


})






const totalPrice = computed(()=>{


return cartItems.value.reduce(

(total,item)=>

total+item.price*item.quantity,

0


)


})






return{


cartItems,

addCart,

increase,

decrease,

removeCart,

cartCount,

totalPrice


}



}

)