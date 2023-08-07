<script setup lang="ts">
function clickSearch(event:any) {
    if(event?.target?.previousSibling?.value == null || event?.target?.previousSibling?.value == ""){
        return;
    }

    const router = useRouter();
    router.push({ path: '/search', query: { s: event.target.previousSibling.value } })
}

</script>
<template>  
    <input class="w-full bg-gray rounded-sm shadow-sm px-5 outline-none " type="search" name="search" placeholder="Encontre seu drink...">
    <button class="bg-gray-500 text-white px-5 rounded-sm" type="submit" @click="(clickSearch)">Search</button>
</template>
