<template>


<div class="create-page">


<h1>
新建笔记
</h1>




<div class="form">


<input

v-model="title"

placeholder="请输入笔记标题"

/>



<input

v-model="category"

placeholder="请输入分类，例如 Vue3、JavaScript"

/>




<textarea

v-model="content"

placeholder="请输入笔记内容"

></textarea>





<button @click="saveNote">

保存笔记

</button>



</div>



</div>


</template>





<script setup>


import {ref} from "vue"



const title = ref("")


const category = ref("")


const content = ref("")





function saveNote(){



if(!title.value || !content.value){


alert("请输入完整内容")


return


}






const oldData = localStorage.getItem("notes")




const notes = oldData

?

JSON.parse(oldData)

:

[]





const newNote={


id:Date.now(),


title:title.value,


category:category.value,


date:new Date().toLocaleDateString(),


content:content.value


}





notes.push(newNote)




localStorage.setItem(

"notes",

JSON.stringify(notes)

)





alert("保存成功")





title.value=""


category.value=""


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