<template>  
    <div class="bg-gradient-to-r from-cyan-500 to-blue-500  border-t-4 border-gray-500 p-5 grid grid-cols-1 md:grid-cols-2">
        <header class="font-extrabold">
            <router-link to="/drinks" class="text-white tracking-wide">Menu Drink's</router-link>
        </header>  
        <div class="inline-flex gap-2">
            <search />
        </div>
    </div>
    <Breadcrumb></Breadcrumb>
</template>
