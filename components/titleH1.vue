<script setup lang="ts">
    defineProps<{
        title: string
    }>()
</script>

<template>
    <h1 class="p-9 text-center uppercase text-lg"> {{title}} </h1>
</template>
