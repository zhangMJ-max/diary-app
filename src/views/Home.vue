<template>

<div class="home">


<h1>
我的日记
</h1>


<button
class="create-btn"
@click="goCreate"
>

+ 新建日记

</button>



<div class="diary-list">


<DiaryCard

v-for="diary in diaries"

:key="diary.id"

:diary="diary"

/>


</div>


</div>


</template>



<script setup>


import {ref,onMounted} from "vue"

import {useRouter} from "vue-router"

import DiaryCard from "../components/DiaryCard.vue"



const router = useRouter()



const diaries = ref([])



function goCreate(){

router.push("/create")

}



function loadDiaries(){


const data = localStorage.getItem("diaries")


if(data){

diaries.value = JSON.parse(data)

}


}



onMounted(()=>{


loadDiaries()


})



</script>




<style scoped>


.home{


padding:40px;

max-width:1200px;

margin:auto;


}



h1{


text-align:center;

margin-bottom:20px;


}



.create-btn{


display:block;

margin:0 auto 40px;


padding:12px 25px;


background:#333;

color:white;


border:none;

border-radius:8px;


cursor:pointer;


}



.create-btn:hover{


opacity:0.8;


}




.diary-list{


display:grid;


grid-template-columns:repeat(2,1fr);


gap:25px;


}




@media(max-width:700px){


.diary-list{


grid-template-columns:1fr;


}



.home{


padding:20px;


}


}


</style>