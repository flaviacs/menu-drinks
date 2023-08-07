<script setup lang="ts">
    defineProps<{
        routerlink: any,
        src: string,
        title: string
    }>()
</script>
<template>  
    <router-link :to="routerlink">
        <img :src='src' :alt='title' :title='title' class="rounded-md">
        <p class="p-2"> {{ title }} </p>
    </router-link>
</template>
