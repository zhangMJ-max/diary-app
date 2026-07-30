<template>


<div class="register">


<h1>
Vue Mini Store 注册
</h1>




<input

v-model="username"

placeholder="用户名"

/>





<input

v-model="password"

type="password"

placeholder="密码"

/>






<button

@click="handleRegister"

>

注册

</button>





<div

class="back"

@click="goLogin"

>

已有账号？返回登录

</div>



</div>


</template>





<script setup>


import {ref} from "vue"

import {useRouter} from "vue-router"

import {useUserStore} from "../stores/user"




const router = useRouter()


const userStore = useUserStore()



const username = ref("")


const password = ref("")







function handleRegister(){



const result = userStore.register(

username.value.trim(),

password.value.trim()

)






if(!result){


alert("注册失败，用户名已存在或信息为空")


return


}






alert("注册成功，请登录")



router.push(

"/project/store/login"

)



}







function goLogin(){


router.push(

"/project/store/login"

)


}



</script>





<style scoped>


.register{


width:400px;

margin:100px auto;

padding:40px;

background:white;

border-radius:15px;

box-shadow:

0 5px 20px rgba(0,0,0,.1);


}




input{


width:100%;

padding:12px;

margin:10px 0;

border:1px solid #ddd;

border-radius:8px;


}




button{


width:100%;

padding:12px;

margin-top:20px;

background:#222;

color:white;

border:none;

border-radius:8px;


}




.back{


margin-top:25px;

text-align:center;

color:#666;

cursor:pointer;


}



</style>