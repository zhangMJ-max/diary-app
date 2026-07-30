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


padding:40px;


max-width:1200px;


margin:auto;


}



h1{


text-align:center;


}



.products{


display:grid;


grid-template-columns:repeat(3,1fr);


gap:30px;


margin-top:40px;


}





@media(max-width:700px){


.products{


grid-template-columns:1fr;


}


}


</style>