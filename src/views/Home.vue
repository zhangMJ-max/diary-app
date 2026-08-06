<template>

<div class="home">


<h1>
我的技术笔记
</h1>


<button
class="create-btn"
@click="goCreate"
>

+ 新建笔记

</button>



<div class="note-list">


<NoteCard

v-for="note in notes"

:key="note.id"

:note="note"

/>


</div>





<!-- 项目展示 -->


<section class="projects">


<h1>
我的项目
</h1>




<div class="project-list">


<ProjectCard

v-for="project in projects"

:key="project.id"

:project="project"

/>


</div>



</section>




</div>

</template>







<script setup>


import {ref,onMounted} from "vue"


import {useRouter} from "vue-router"



import NoteCard from "../components/NoteCard.vue"


import ProjectCard from "../components/ProjectCard.vue"



import projects from "../data/projects"


import {notes as noteData} from "../data/notes"





const router = useRouter()



const notes = ref([])





function goCreate(){


router.push("/create")


}






function loadNotes(){



const saveNotes = localStorage.getItem("notes")



if(saveNotes){



const userNotes = JSON.parse(saveNotes)



notes.value=[

...userNotes,

...noteData

]



}else{


notes.value = noteData


}



}





onMounted(()=>{


loadNotes()


})





</script>









<style scoped>



.home{


max-width:1200px;


margin:0 auto;


padding:40px;


}







h1{


text-align:center;


margin-bottom:30px;


font-size:32px;


}







.create-btn{


display:block;


margin:0 auto 50px;


padding:12px 30px;


background:#333;


color:white;


border:none;


border-radius:10px;


cursor:pointer;


font-size:15px;


}





.create-btn:hover{


opacity:.8;


}







.note-list{


display:grid;


grid-template-columns:repeat(2,1fr);


gap:25px;


}









.projects{


margin-top:100px;


}





.project-list{


display:flex;


justify-content:center;


align-items:center;


gap:30px;


flex-wrap:wrap;


}









@media(max-width:700px){



.note-list{


grid-template-columns:1fr;


}




.project-list{


flex-direction:column;


}




.home{


padding:20px;


}



}



</style>