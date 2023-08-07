<script setup lang="ts">
  useSeoMeta({
    title: "My Menu of Drinks",
    ogTitle: "My Menu of Drinks",
    description: "This is my amazing menu of drinks, ",
    ogDescription: "This is my amazing drinks menu. Know the available options.",
    ogImage: "https://diario-de-casa.shoptime.com.br/wp-content/uploads/2022/01/shutterstock_1508166827.jpg",
    twitterCard: "summary_large_image",
  });
</script>

<template>
  <div class="border-t-4 border-gray-500 min-h-screen">
    <div class="flex justify-center content-center">
      <div class="max-w-lg  bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen p-5 self-center">
        <h1 class="center w-full text-white font-extrabold text-7xl">
          Menu Drink's
        </h1>
      </div>
      <div class="min-h-screen p-5 text-cyan-500 text-4xl text-center">
        <div class="p-9">
          Você pode buscar por um drink br  
          <search />
        </div>
        <div class="p-9">
          ou olhar nossas opções: <br><br>
          <router-link to="/drinks" class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 block rounded">Menu Drink's</router-link>
        </div>
      </div>
    </div>
  </div>

</template> 

