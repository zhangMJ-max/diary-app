import {defineStore} from "pinia"

import {ref,watch} from "vue"



export const useProductStore = defineStore(
"product",
()=>{

const products = ref(

JSON.parse(

localStorage.getItem("products")

||

JSON.stringify([

{
id:1,
name:"机械键盘",
price:399,
image:"⌨️"
},

{
id:2,
name:"无线耳机",
price:599,
image:"🎧"
},

{
id:3,
name:"办公鼠标",
price:199,
image:"🖱️"
}

])

)

)



function addProduct(product){


products.value.push(product)


}




function deleteProduct(id){


products.value = products.value.filter(

item=>item.id!==id

)


}




function updatePrice(id,price){


const product = products.value.find(

item=>item.id===id

)



if(product){


product.price = Number(price)


}


}




watch(

products,

(value)=>{


localStorage.setItem(

"products",

JSON.stringify(value)

)


},

{

deep:true

}

)



return{


products,

addProduct,

deleteProduct,

updatePrice


}



}

)