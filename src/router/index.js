import { createRouter, createWebHistory } from "vue-router"


import Home from "../views/Home.vue"
import Create from "../views/Create.vue"
import Detail from "../views/Detail.vue"



const router = createRouter({

    history:createWebHistory(),


    routes:[


        {
            path:"/",
            component:Home
        },


        {
            path:"/create",
            component:Create
        },


        {
            path:"/detail/:id",
            component:Detail
        }


    ]

})


export default router