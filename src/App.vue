<template>


<div class="app">


<header>


<div class="logo">

Diary App

</div>



<nav>


<router-link to="/">

首页

</router-link>


<router-link to="/create">

写日记

</router-link>


</nav>


</header>



<main>


<router-view />


</main>



</div>


</template>




<style>


:root{

--bg-color:#f7f8fa;

--text-color:#222;

}



*{

margin:0;

padding:0;

box-sizing:border-box;

}



body{


background:var(--bg-color);

color:var(--text-color);


font-family:

"Microsoft YaHei",
Arial,
sans-serif;


}



header{


height:70px;


background:white;


display:flex;


justify-content:space-between;


align-items:center;


padding:0 40px;


box-shadow:

0 2px 10px rgba(0,0,0,0.05);


}



.logo{


font-size:24px;

font-weight:bold;


}



nav{


display:flex;

gap:25px;


}



nav a{


text-decoration:none;

color:#555;


}



nav a.router-link-active{


color:#000;

font-weight:bold;


}



main{


min-height:calc(100vh - 70px);


}



</style>