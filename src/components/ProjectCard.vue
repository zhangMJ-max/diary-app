<template>

<div class="project-card">


<div class="project-header">

<h3>
{{project.title}}
</h3>


<p>
{{project.description}}
</p>


</div>




<div class="tags">


<span
v-for="item in project.tech"
:key="item"
>

{{item}}

</span>


</div>




<button @click="goDetail">

查看项目

</button>



</div>


</template>





<script setup>


import {useRouter} from "vue-router"



const router = useRouter()



const props = defineProps({

project:Object

})



function goDetail(){


router.push(`/project/${props.project.id}`)


}


</script>







<style scoped>


.project-card{


width:360px;


min-height:280px;


padding:35px;


background:white;


border-radius:20px;


box-shadow:

0 10px 30px rgba(0,0,0,.08);


display:flex;


flex-direction:column;


justify-content:space-between;


transition:.3s;


}



.project-card:hover{


transform:translateY(-8px);


box-shadow:

0 15px 35px rgba(0,0,0,.15);


}




h3{


text-align:center;


font-size:24px;


margin-bottom:20px;


}




p{


color:#666;


line-height:1.8;


font-size:15px;


}



.tags{


display:flex;


justify-content:center;


gap:10px;


flex-wrap:wrap;


margin:25px 0;


}



.tags span{


background:#f3f3f3;


padding:8px 14px;


border-radius:20px;


font-size:13px;


color:#555;


}




button{


display:block;


margin:0 auto;


padding:12px 35px;


background:#222;


color:white;


border:none;


border-radius:10px;


font-size:15px;


cursor:pointer;


transition:.3s;


}



button:hover{


opacity:.85;


transform:scale(1.05);


}


</style>