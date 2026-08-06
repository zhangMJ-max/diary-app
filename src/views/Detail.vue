<template>


<div class="detail-page">


<h1>
笔记详情
</h1>



<div class="detail-card">


<h2>

{{ note.title }}

</h2>



<p class="category">

{{ note.category }}

</p>



<p class="date">

{{ note.date }}

</p>



<p class="content">

{{ note.content }}

</p>



</div>


</div>


</template>





<script setup>


import {ref,onMounted} from "vue"

import {useRoute} from "vue-router"



import {notes} from "../data/notes"



const route = useRoute()



const note = ref({})





function loadNote(){



const result = notes.find(item=>{


return item.id == route.params.id


})



if(result){


note.value=result


}



}





onMounted(()=>{


loadNote()


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


max-width:800px;


margin:auto;


padding:40px;


background:#f5f5f5;


border-radius:12px;


}



.detail-card h2{


font-size:28px;


margin-bottom:20px;


}




.category{


display:inline-block;


background:#333;


color:white;


padding:5px 15px;


border-radius:20px;


font-size:14px;


margin-bottom:20px;


}



.date{


color:#888;


margin:15px 0;


}



.content{


line-height:2;


white-space:pre-line;


font-size:16px;


}



</style>