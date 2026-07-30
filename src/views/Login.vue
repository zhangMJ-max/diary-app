<template>


<div class="login">


<h1>
Vue Mini Store 登录
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

@click="handleLogin"

>

登录

</button>





<button

class="register"

@click="goRegister"

>

注册账号

</button>






<div class="demo">


<p>
普通用户：user / 123456
</p>


<p>
测试用户：test / 123456
</p>


<p>
管理员：admin / 123456
</p>



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






function handleLogin(){



const result = userStore.login(

username.value.trim(),

password.value.trim()

)





if(!result){


alert("用户名或密码错误")


return


}







if(

userStore.user.role==="admin"

){


router.push(

"/project/store/dashboard"

)


}else{


router.push(

"/project/store/shop"

)


}




}






function goRegister(){


router.push(

"/project/store/register"

)


}



</script>





<style scoped>


.login{


width:400px;

margin:100px auto;

padding:40px;

background:white;

border-radius:15px;

box-shadow:

0 5px 20px rgba(0,1,0,.1);


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

cursor:pointer;


}



.register{


background:#555;


}



.demo{


margin-top:30px;

color:#777;

font-size:14px;


}



</style>