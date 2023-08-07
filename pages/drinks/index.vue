<script setup lang="ts">
  const { pending, data: categories } = await  useFetch(`/api/list?list=c`, {
    lazy: true,
  });
  const error = categories.statusCode ? true : false;


  useSeoMeta({
    title: "My Menu of Drinks",
    ogTitle: "My Menu of Drinks",
    description: "This is my amazing menu of drinks, ",
    ogDescription: "This is my amazing drinks menu. Know the available options.",
    ogImage: "https://diario-de-casa.shoptime.com.br/wp-content/uploads/2022/01/shutterstock_1508166827.jpg",
    twitterCard: "summary_large_image",
  });

  const r = await useRouter().currentRoute;
  const term = r.value?.params;
  const title = "Busca: " + r.value?.query?.s?.toString();
  const router = "/search?s=" + r.value?.query?.s?.toString()?.toLowerCase();
</script>

<template>
  <Header />
  <TitleH1 title="Escolha uma categoria de drink"></TitleH1>

  <div class="w-full md:w-9/12 m-auto text-center">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
      <div v-if="error" class="p-4">
        <p>{{ categories.statusMessage }}</p>
      </div>
    
      <div v-if="pending" v-for="post in [1,2,3,4,5]" class="h-20 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md ease-in duration-100"></div> 
  
      <div v-else v-for="post in categories" class="inline-block align-middle">
        <router-link :to="'/drinks/'+ post.strCategory?.toLowerCase()?.replace('/','%2F')" class="rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 block uppercase p-6 bg-sky-200 font-medium">
          {{ post.strCategory }}
        </router-link>
      </div> 
    </div>
  </div>
  
</template>
