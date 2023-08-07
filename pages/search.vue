<script setup lang="ts">
const r = await useRouter().currentRoute;
const term = r.value?.query?.s;

const { pending, data: drinks } = await useFetch(
  `/api/search?searchName=${term}`,
  {
    lazy: true,
  }
);
const error = drinks?.value?.statusCode == 404 ? true : false;

function routerlink(post: any) {
  return `/drinks/${post.strCategory?.toLowerCase()?.replace("/", "%2F")}/${
    post.idDrink
  }`;
}

const title = "Busca: " + r.value?.query?.s?.toString();
const router = "/search?s=" + r.value?.query?.s?.toString()?.toLowerCase();

useSeoMeta({
  title: title + "My Menu of Drinks",
  ogTitle: title + "My Menu of Drinks",
  description: "This is my amazing menu of drinks, ",
  ogDescription: "This is my amazing drinks menu. Know the available options.",
  ogImage:
    "https://diario-de-casa.shoptime.com.br/wp-content/uploads/2022/01/shutterstock_1508166827.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Header />
  <TitleH1 :title="'RESULTADO DE ' + title"></TitleH1>

  <div class="w-full md:w-9/12 m-auto text-center">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-if="error" class="p-4">
        <p>{{ drinks.statusMessage }}</p>
      </div>
      <ProductList :pending="pending" :drinks="drinks"> </ProductList>
    </div>
  </div>

  <Footer />
</template>
