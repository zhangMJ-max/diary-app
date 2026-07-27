<template>


<div class="create-page">


<h1>
写日记
</h1>



<div class="form">


<input

v-model="title"

placeholder="请输入日记标题"

/>



<textarea

v-model="content"

placeholder="请输入日记内容"

></textarea>



<button @click="saveDiary">

保存日记

</button>


</div>


</div>


</template>




<script setup>


import {ref} from "vue"



const title = ref("")


const content = ref("")




function saveDiary(){


const oldData = localStorage.getItem("diaries")



const diaries = oldData

?
JSON.parse(oldData)

:

[]




const newDiary={


id:Date.now(),


title:title.value,


date:new Date().toLocaleDateString(),


content:content.value


}



diaries.push(newDiary)



localStorage.setItem(

"diaries",

JSON.stringify(diaries)

)



alert("保存成功")



title.value=""

content.value=""


}



</script>




<style scoped>


.create-page{

padding:40px;

}



h1{

text-align:center;

margin-bottom:30px;

}



.form{


display:flex;

flex-direction:column;

gap:20px;

max-width:600px;

margin:auto;


}



input,
textarea{


padding:15px;

font-size:16px;

border:1px solid #ddd;

border-radius:8px;


}



textarea{

height:200px;

}



button{


padding:12px;

background:#333;

color:white;

border:none;

border-radius:8px;

cursor:pointer;


}



</style>