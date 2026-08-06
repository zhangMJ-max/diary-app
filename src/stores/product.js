import { defineStore } from "pinia"

import { ref } from "vue"

import axios from "axios"



export const useProductStore = defineStore(
"product",
()=>{


const products = ref([])



// 获取商品列表

async function fetchProducts(){


    try{


        const res = await axios.get(

            "http://localhost:3000/api/products"

        )


        products.value = res.data



    }catch(error){


        console.log(
            "获取商品失败",
            error
        )


    }


}




// 添加商品（暂时保留）

async function addProduct(product){


    products.value.push(product)


}



// 删除商品（暂时保留）

function deleteProduct(id){


    products.value = products.value.filter(

        item => item.id !== id

    )


}



// 修改价格（暂时保留）

function updatePrice(id,price){


    const product = products.value.find(

        item => item.id === id

    )


    if(product){


        product.price = Number(price)


    }


}



return{


    products,


    fetchProducts,


    addProduct,


    deleteProduct,


    updatePrice


}



}

)