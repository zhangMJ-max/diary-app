import { createRouter, createWebHistory } from "vue-router"



import Home from "../views/Home.vue"

import Create from "../views/Create.vue"

import Detail from "../views/Detail.vue"

import ProjectDetail from "../views/ProjectDetail.vue"



import Store from "../views/Store.vue"

import Cart from "../views/Cart.vue"

import Login from "../views/Login.vue"


import ProductManage from "../views/ProductManage.vue"

import Dashboard from "../views/Dashboard.vue"

import Order from "../views/Order.vue"

import OrderDetail from "../views/OrderDetail.vue"

import AdminOrders from "../views/AdminOrders.vue"

import AdminOrderDetail from "../views/AdminOrderDetail.vue"


import Register from "../views/Register.vue"


const router=createRouter({


history:createWebHistory(),


routes:[




// =================
// 作品展示首页
// =================


{
path:"/",
component:Home
},






// =================
// 日记
// =================


{
path:"/create",
component:Create
},



{
path:"/detail/:id",
component:Detail
},






// =================
// 项目介绍
// =================


{
path:"/project/:id",
component:ProjectDetail
},






// =================
// Vue Mini Store
// =================




// 商城

{
path:"/project/store/shop",
component:Store
},





// 购物车

{
path:"/project/store/cart",
component:Cart
},





// 登录

{
path:"/project/store/login",
component:Login
},


{
path:"/project/store/register",
component:Register
},


// =================
// 用户订单
// =================



{
path:"/project/store/orders",
component:Order
},




// ⭐用户订单详情

{
path:"/project/store/order/:id",
component:OrderDetail
},






// =================
// 管理后台
// =================




// Dashboard

{
path:"/project/store/dashboard",
component:Dashboard
},






// 商品管理

{
path:"/project/store/admin/products",
component:ProductManage
},






// 管理员订单列表

{
path:"/project/store/admin/orders",
component:AdminOrders
},






// 管理员订单详情

{
path:"/project/store/admin/order/:id",
component:AdminOrderDetail
},




]



})






export default router