<script setup lang="ts">
useSeoMeta({
  title: "My Menu of Drinks",
  ogTitle: "My Menu of Drinks",
  description: "This is my amazing menu of drinks, ",
  ogDescription: "This is my amazing drinks menu. Know the available options.",
  ogImage:
    "https://diario-de-casa.shoptime.com.br/wp-content/uploads/2022/01/shutterstock_1508166827.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="border-t-4 border-gray-500">
    <div class="md:flex w-full">
      <div
        class="max-w-lg bg-gradient-to-r from-cyan-500 to-blue-500 md:min-h-screen p-9 self-center"
      >
        <h1
          class="center w-full text-white font-extrabold text-3xl md:text-7xl text-center md:text-left"
        >
          Menu Drink's
          <BootstrapIcon class="px-1 py-2" name="cup-straw" /> <br />
        </h1>
      </div>
      <div
        class="flex items-center m-auto w-full grid justify-items-center p-5"
      >
        <div class="justify-self-center">
          <p class="p-5 text-cyan-500 text-2xl text-center uppercase">
            Buscar por um drink:
          </p>
          <search />

          <p class="p-5 pt-20 text-cyan-500 text-2xl text-center uppercase">
            Olhar opções do menu:
          </p>
          <router-link
            to="/drinks"
            class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 block rounded text-center"
            >Menu Drink's</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
