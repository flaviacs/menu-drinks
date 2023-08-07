<template>
  <div
    class="bg-gradient-to-r from-cyan-500 to-blue-500 border-t-4 border-gray-500 p-5 grid grid-cols-1 md:grid-cols-2"
  >
    <header class="font-extrabold text-center md:text-left pb-5">
      <router-link to="/drinks" class="text-white md:text-2xl"
        >Menu Drink's
        <BootstrapIcon class="px-1 py-2" name="cup-straw" />
      </router-link>
    </header>
    <search />
  </div>
  <Breadcrumb></Breadcrumb>
</template>
