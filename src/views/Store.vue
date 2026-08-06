<template>


<div class="store">


<h1>
Vue Mini Store
</h1>


<p>
小型电商系统体验
</p>




<div class="products">


<ProductCard

v-for="item in productStore.products"

:key="item.id"

:product="item"

/>


</div>




</div>


</template>






<script setup>


import ProductCard from "../components/ProductCard.vue"


import {useProductStore} from "../stores/product"




const productStore = useProductStore()



</script>







<style scoped>


.store{


max-width:1200px;


margin:0 auto;


padding:60px 40px;


}



h1{


text-align:center;


font-size:36px;


margin-bottom:10px;


}



p{


text-align:center;


color:#666;


font-size:18px;


margin-bottom:50px;


}



.products{


display:grid;


grid-template-columns:

repeat(auto-fit,minmax(260px,1fr));


gap:35px;


}



@media(max-width:700px){


.store{


padding:30px 20px;


}



.products{


grid-template-columns:1fr;


}


}



</style>