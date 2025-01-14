<template>
  <div class="w-full h-full">
    <Header :is-scroll = "isScroll"/>
    <div class=" flex w-full justify-center">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {onMounted, ref} from "vue";
const isScroll = ref(false)
onMounted(()=>{
  window.addEventListener("scroll", () => {
    window.scrollY >60 ? isScroll.value = true : isScroll.value = false
  });
})
</script>

<style lang="scss" scoped>

</style>