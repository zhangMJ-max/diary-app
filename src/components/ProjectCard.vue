<template>

<div class="project-card">


<h3>
{{project.title}}
</h3>


<p>
{{project.description}}
</p>



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


padding:20px;


border-radius:12px;


background:white;


box-shadow:0 5px 15px rgba(0,0,0,.1);


}




.tags{


display:flex;


gap:10px;


margin:15px 0;


}




.tags span{


background:#eee;


padding:5px 10px;


border-radius:5px;


font-size:12px;


}





button{


border:none;


padding:10px 20px;


background:#222;


color:white;


border-radius:8px;


cursor:pointer;


}



button:hover{


opacity:.8;


}


</style>