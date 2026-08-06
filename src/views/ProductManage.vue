<template>

<div class="manage">


<h1>
商品管理
</h1>



<!-- 新增商品 -->

<div class="add">


<h2>
新增商品
</h2>



<input

v-model="name"

placeholder="商品名称"

/>



<input

v-model="price"

placeholder="商品价格"

/>



<input

v-model="image"

placeholder="商品图标"

/>



<input

v-model="description"

placeholder="商品描述"

/>



<button @click="add">

新增商品

</button>



</div>






<!-- 商品列表 -->

<div class="list">


<h2>
商品列表
</h2>




<div

class="item"

v-for="(product,index) in productStore.products"

:key="product.id"

>




<div class="info">


<p>

商品编号：

{{index + 1}}

</p>



<p>

<span class="emoji">

{{product.image}}

</span>


{{product.name}}

</p>



<p>

{{product.description}}

</p>


</div>







<div class="price-box">


¥


<input

class="price"

v-model="product.price"

/>




<button

@click="update(product)"

>

保存修改

</button>



</div>






<button

class="delete"

@click="remove(product.id)"

>

删除

</button>





</div>




</div>




</div>

</template>







<script setup>


import {ref,onMounted} from "vue"

import axios from "axios"

import {useProductStore} from "../stores/product"



const productStore = useProductStore()



const name = ref("")

const price = ref("")

const image = ref("")

const description = ref("")






// 页面加载商品

onMounted(()=>{


productStore.fetchProducts()


})







// 新增商品

async function add(){



if(

!name.value ||

!price.value

){


alert("请输入商品信息")

return

}



try{


await axios.post(

"http://localhost:3000/api/products",

{


name:name.value,

price:Number(price.value),

image:image.value || "📦",

description:description.value


}

)



alert("商品添加成功")



productStore.fetchProducts()



name.value=""

price.value=""

image.value=""

description.value=""


}

catch(error){


console.log(error)

alert("添加失败")


}



}








// 修改价格

async function update(product){



try{


await axios.put(

`http://localhost:3000/api/products/${product.id}`,

{


price:Number(product.price)


}

)



alert("价格修改成功")



productStore.fetchProducts()



}

catch(error){


console.log(error)

alert("修改失败")


}



}









// 删除商品

async function remove(id){



if(

!confirm("确定删除该商品吗？")

){


return

}



try{


await axios.delete(

`http://localhost:3000/api/products/${id}`

)



alert("删除成功")



productStore.fetchProducts()



}

catch(error){


console.log(error)

alert("删除失败")


}



}





</script>







<style scoped>


.manage{


max-width:1000px;

margin:auto;

padding:40px;


}



h1{


text-align:center;

margin-bottom:40px;


}



.add,
.list{


background:white;

padding:30px;

border-radius:15px;

margin-bottom:30px;


box-shadow:

0 5px 15px rgba(0,0,0,.1);


}



input{


padding:10px;

margin:10px;

border-radius:8px;

border:1px solid #ddd;


}



button{


padding:10px 20px;

border:none;

background:#222;

color:white;

border-radius:8px;

cursor:pointer;


}




.item{


display:flex;

align-items:center;

justify-content:space-between;

padding:20px 0;

border-bottom:1px solid #eee;


}



.info{


width:350px;


}




.info p{


margin:8px 0;


}




.emoji{


font-size:28px;

margin-right:10px;


}




.price-box{


display:flex;

align-items:center;

gap:10px;


}



.price{


width:80px;


}



.delete{


background:#e63946;


}



@media(max-width:700px){


.item{


flex-direction:column;

gap:15px;


}


}



</style>