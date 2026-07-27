<template>


<div class="detail-page">


<h1>
日记详情
</h1>



<div class="detail-card">


<h2>

{{ diary.title }}

</h2>



<p class="date">

{{ diary.date }}

</p>



<p>

{{ diary.content }}

</p>



</div>


</div>


</template>




<script setup>


import {ref,onMounted} from "vue"

import {useRoute} from "vue-router"



const route = useRoute()



const diary = ref({})




function loadDiary(){


const data = localStorage.getItem("diaries")



if(data){


const diaries = JSON.parse(data)



const result = diaries.find(item=>{


return item.id == route.params.id


})



if(result){


diary.value=result


}


}



}



onMounted(()=>{


loadDiary()


})



</script>




<style scoped>


.detail-page{


padding:40px;


}



h1{

text-align:center;

margin-bottom:30px;

}



.detail-card{


max-width:600px;

margin:auto;

padding:30px;

background:#f5f5f5;

border-radius:12px;


}



.date{


color:#888;

margin:15px 0;


}



</style>