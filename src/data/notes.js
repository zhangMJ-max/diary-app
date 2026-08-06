export const notes = [

{
    id:1,

    title:"Vue3组件化开发理解",

    date:"2026-08-06",

    category:"Vue3",

    content:`

本项目使用 Vue3 + Vite 构建。

Vue3采用组件化开发思想。

页面拆分为多个独立组件：

DiaryCard：
负责笔记卡片展示。

ProductCard：
负责商品展示。

组件之间通过props传递数据。

组件化可以提高代码复用性和维护性。

`
},


{
    id:2,

    title:"Pinia状态管理理解",

    date:"2026-08-06",

    category:"Vue3",

    content:`

项目使用Pinia进行状态管理。

例如购物车功能：

Store页面添加商品。

Cart页面读取商品。

通过ref实现响应式数据更新。

Pinia解决了多组件之间数据共享问题。

`
},


{
    id:3,

    title:"Vue Router路由设计",

    date:"2026-08-06",

    category:"工程化",

    content:`

项目使用Vue Router实现SPA应用。

主要页面：

首页 Home

商城 Store

购物车 Cart

登录 Login


通过路由切换页面，
不需要刷新浏览器。

`
},


{
    id:4,

    title:"前后端分离开发理解",

    date:"2026-08-06",

    category:"后端",

    content:`

物流项目采用：

前端

↓

REST API

↓

Node.js Express

↓

MySQL


前端负责页面展示。

后端负责业务逻辑。

数据库负责数据存储。

`
},


{
    id:5,

    title:"AI辅助开发能力与项目实践",

    date:"2026-08-06",

    category:"AI开发",

    content:`

AI已经成为现代软件开发的重要辅助工具。


项目开发过程中，
使用AI辅助完成：


1. 项目架构设计

分析需求，
规划组件结构、页面关系和数据流程。


2. 技术问题分析

通过AI分析报错原因，
理解问题并完成代码修复。


3. 代码优化

辅助检查：

组件设计

代码结构

项目组织方式


4. 项目功能开发

在HXMC物流系统和Vue项目中，

辅助完成：

需求拆解

接口设计

数据库分析

前后端交互设计


AI辅助开发流程：

需求分析

↓

技术方案设计

↓

AI辅助编码

↓

人工理解修改

↓

测试优化


AI不是替代开发者，

而是提高开发效率的工具。

开发者需要具备：

理解代码

分析问题

设计系统

验证结果

的能力。

`
},


{
    id:6,

    title:"Vue Mini Store项目部署架构理解",

    date:"2026-08-06",

    category:"项目实践",

    content:`

Vue Mini Store项目采用前后端分离架构。


本地开发环境：


Vue3前端

↓

Node.js + Express

↓

MySQL数据库


前端负责页面展示和用户交互。

Node.js负责接口处理和业务逻辑。

MySQL负责数据存储。


目前线上版本主要部署Vue前端页面，
用于展示项目功能。


完整线上部署需要：

Vue前端

↓

云服务器Node.js

↓

云数据库MySQL


通过该项目理解：

前后端分离开发流程。

REST API接口设计。

数据库与前端数据交互。


后续可以继续扩展：

云服务器部署。

AI Agent智能功能。

`

}

]