<script setup lang="ts">
    interface Links {
        title: string
        routerlink: string
    }

    const r = useRouter().currentRoute;
    const term = r.value.fullPath;
    
    let links: Links[] = [];

    if(term.includes("/search?s=")){
        const s = r.value.query.s;
        
        links.push({
            title: 'Drinks',
            routerlink: '/drinks'
        });
        links.push({
            title: 'Busca por ' + s?.toString().replaceAll("%2F", "and"),
            routerlink: term
        })
    } else{
        const linkSplit = term.split("/");
        let pre = "";
        linkSplit.forEach(element => {
            if(element == null || element == "") return;
            pre = pre + "/" + element;
            links.push({
                title: element.toString().replaceAll(" %2F ", " and "),
                routerlink: pre
            })
        });
        
    }
</script>

<template>
    <nav aria-label="breadcrumb" class="bg-indigo-50 text-center text-sm text-gray-400">
        <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="flex p-3">
            <li v-for="(link, index) in links" :key="index" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <router-link :to="link.routerlink" itemprop="item">
                    <span v-if="index != 0" class="px-1 py-2">-> </span>
                    <span itemprop="name" class="px-1 py-2">
                        {{ link.title }} 
                    </span>
                    <meta content='{{index}}' itemprop="position">
                </router-link>
            </li>
        </ol>
    </nav>
</template>
