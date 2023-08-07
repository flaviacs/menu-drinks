<script setup lang="ts">
    defineProps<{
        drinks: any,
        pending: boolean
    }>()

    function routerlink(post: any){
      const r = useRouter().currentRoute;
      const strCategory = post.strCategory ? post.strCategory: r?.value?.params.drink;
      return `/drinks/${strCategory?.toLowerCase()?.replace("/","%2F")}/${post.idDrink}`;
    }
</script>
<template>  
  <div v-if="pending" v-for="post in [1,2,3,4,5,6,7]" class="h-40 md:h-60 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md ease-in duration-100"></div> 
  <div v-else v-for="post in drinks" class="p-4">
    <Product 
      :title="post.strDrink" 
      :src="post.strDrinkThumb" 
      :routerlink="routerlink(post)">
    </Product>
  </div> 
</template>
