<template>

<div class="manage">


<h1>
商品管理
</h1>





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




<button @click="add">

新增商品

</button>



</div>







<div class="list">


<h2>
商品列表
</h2>





<div

class="item"

v-for="product in productStore.products"

:key="product.id"

>



<div class="info">



<p>

商品编号：

{{product.id}}

</p>



<p>

<span class="emoji">

{{product.image}}

</span>


{{product.name}}

</p>



</div>





<div class="price-box">


¥


<input

class="price"

v-model="product.price"

/>



</div>







<button

@click="save(product)"

>

保存价格

</button>







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


import {ref} from "vue"


import {useProductStore} from "../stores/product"



const productStore=useProductStore()





const name=ref("")

const price=ref("")

const image=ref("")







function add(){



if(
!name.value ||
!price.value
){


alert("请输入商品信息")

return

}





productStore.addProduct({


id:Date.now(),


name:name.value,


price:Number(price.value),


image:image.value || "📦"


})





name.value=""

price.value=""

image.value=""



alert("商品新增成功")



}








function save(product){



productStore.updatePrice(

product.id,

Number(product.price)

)



alert("价格修改成功")


}








function remove(id){



if(
confirm("确定删除该商品吗？")
){


productStore.deleteProduct(id)


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


width:250px;


}





.info p{


margin:8px 0;


}




.emoji{


font-size:30px;

margin-right:15px;


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