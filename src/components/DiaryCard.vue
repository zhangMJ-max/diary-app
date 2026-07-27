<template>

  <div 
  class="diary-card"
  @click="goDetail"
  >


    <h2>
      {{ diary.title }}
    </h2>


    <p class="date">
      {{ diary.date }}
    </p>


    <p class="content">
      {{ diary.content }}
    </p>


  </div>

</template>



<script setup>


import {useRouter} from "vue-router"



const props = defineProps({

  diary:{
    type:Object,
    required:true
  }

})



const router = useRouter()



function goDetail(){


router.push(
    
`/detail/${props.diary.id}`

)


}


</script>



<style scoped>


.diary-card{


padding:25px;

background:white;

border-radius:16px;

box-shadow:

0 4px 12px rgba(0,0,0,0.08);


transition:

transform 0.3s ease,

box-shadow 0.3s ease;


cursor:pointer;


}



.diary-card:hover{


transform:translateY(-5px);


box-shadow:

0 10px 25px rgba(0,0,0,0.15);


}



.diary-card h2{


margin-bottom:12px;


}



.date{


font-size:14px;

color:#888;

margin-bottom:15px;


}



.content{


line-height:1.8;

color:#555;


}


</style>