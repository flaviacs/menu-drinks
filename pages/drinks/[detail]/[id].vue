<script setup lang="ts">
const r = useRouter().currentRoute;
const id = r?.value?.params?.id;

const { pending, data: drinks } = await useFetch(`/api/detail?cocktail=${id}`, {
  lazy: true,
});

const error = (await drinks?.value?.statusCode) == 404 ? true : false;

const drink = await drinks.value; //drinks.value?.length > 0 ? drinks.value[0] :

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
  <Header />

  <div v-if="pending" class="p-4">
    <div class="w-full md:w-9/12 m-auto text-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py md:py-9">
        <div
          class="min-h-300 md:h-full bg-gradient-to-r from-slate-200 to-slate-300 rounded-md ease-in duration-100"
        ></div>
        <div>
          <div
            class="h-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md ease-in duration-100 mb-5"
          ></div>
          <div
            class="h-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md ease-in duration-100 mb-5"
          ></div>
          <div
            class="h-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md ease-in duration-100 mb-5"
          ></div>
          <div
            class="h-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md ease-in duration-100 mb-5"
          ></div>
          <div
            class="h-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md ease-in duration-100 mb-5"
          ></div>
          <div
            class="h-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md ease-in duration-100 mb-5"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <div v-else v-if="error" class="p-4">
    <div class="w-full md:w-9/12 m-auto text-center">
      <p>{{ drinks?.statusMessage }}</p>
      error
    </div>
  </div>

  <div v-else v-for="drink in drinks" data-id="{{ drink.idDrink }}">
    <div class="w-full md:w-9/12 m-auto text-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py md:py-9">
        <div>
          <img
            :src="drink.strDrinkThumb"
            :alt="drink.strDrink"
            :title="drink.strDrink"
          />
        </div>
        <div class="text-left px-5">
          <h1 class="text-gray text-2xl py-2">{{ drink.strDrink }}</h1>
          <p class="">
            {{ drink?.strCategory }} <br />
            {{ drink.strAlcoholic }} <br />
            {{ drink.strGlass }} <br />
          </p>

          <h2 class="mt-5 text-lg">Ingredientes:</h2>
          <ul class="list-disc px-5">
            <li v-if="drink.strIngredient1">{{ drink.strIngredient1 }}</li>
            <li v-if="drink.strIngredient2">{{ drink.strIngredient2 }}</li>
            <li v-if="drink.strIngredient3">{{ drink.strIngredient3 }}</li>
            <li v-if="drink.strIngredient4">{{ drink.strIngredient4 }}</li>
            <li v-if="drink.strIngredient5">{{ drink.strIngredient5 }}</li>
            <li v-if="drink.strIngredient6">{{ drink.strIngredient6 }}</li>
            <li v-if="drink.strIngredient7">{{ drink.strIngredient7 }}</li>
            <li v-if="drink.strIngredient8">{{ drink.strIngredient8 }}</li>
            <li v-if="drink.strIngredient9">{{ drink.strIngredient9 }}</li>
            <li v-if="drink.strIngredient10">{{ drink.strIngredient10 }}</li>
            <li v-if="drink.strIngredient11">{{ drink.strIngredient11 }}</li>
            <li v-if="drink.strIngredient12">{{ drink.strIngredient12 }}</li>
            <li v-if="drink.strIngredient13">{{ drink.strIngredient13 }}</li>
            <li v-if="drink.strIngredient14">{{ drink.strIngredient14 }}</li>
            <li v-if="drink.strIngredient15">{{ drink.strIngredient15 }}</li>
          </ul>

          <h2 class="mt-5 text-lg">Forma de fazer:</h2>
          <p>{{ drink.strInstructions }}</p>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
