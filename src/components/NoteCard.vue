<template>

  <div 
  class="note-card"
  @click="goDetail"
  >


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

</template>




<script setup>


import {useRouter} from "vue-router"



const props = defineProps({

  note:{
    type:Object,
    required:true
  }

})



const router = useRouter()



function goDetail(){


router.push(

`/detail/${props.note.id}`

)


}


</script>




<style scoped>


.note-card{


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



.note-card:hover{


transform:translateY(-5px);


box-shadow:

0 10px 25px rgba(0,0,0,0.15);


}



.note-card h2{


margin-bottom:12px;


}



.category{


display:inline-block;


background:#333;


color:white;


padding:5px 12px;


border-radius:20px;


font-size:13px;


margin-bottom:15px;


}



.date{


font-size:14px;


color:#888;


margin-bottom:15px;


}



.content{


line-height:1.8;


color:#555;


display:-webkit-box;


-webkit-line-clamp:4;


-webkit-box-orient:vertical;


overflow:hidden;


}



</style>