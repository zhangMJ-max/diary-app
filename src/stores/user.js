import {defineStore} from "pinia"

import {ref} from "vue"



export const useUserStore = defineStore(
"user",
()=>{


const user = ref(

JSON.parse(

localStorage.getItem("user")

||

"null"

)

)





const users = ref(

JSON.parse(

localStorage.getItem("users")

||

JSON.stringify([

{
username:"user",
password:"123456",
role:"user"
},


{
username:"test",
password:"123456",
role:"user"
},


{
username:"admin",
password:"123456",
role:"admin"
}


])

)

)







function login(username,password){



const account = users.value.find(

item=>

item.username===username

&&

item.password===password

)





if(!account){

return false

}





user.value={

username:account.username,

role:account.role

}



localStorage.setItem(

"user",

JSON.stringify(user.value)

)



return true



}







function register(username,password){



if(
!username ||
!password
){

return false

}





const exist = users.value.find(

item=>

item.username===username

)



if(exist){


return false


}






users.value.push({


username,

password,

role:"user"


})





localStorage.setItem(

"users",

JSON.stringify(users.value)

)





return true



}







function logout(){


user.value=null


localStorage.removeItem("user")


}







return{


user,

users,

login,

register,

logout


}



}

)