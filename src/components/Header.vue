<template>
  <div class="header fixed top-0 w-full h-[60px]  flex items-center px-[25px] justify-between transition-all duration-500"
        :class="!isScroll ? 'bg-transparent' : 'bg-blue-400' ">
    <h1 class="font-bold text-[20px]">Wecam Entertaiment</h1>
    <div class="flex space-x-5">
      <router-link v-for="router in HeaderMenu"  :to="router.route" class="font-bold text-white hover:text-black transition-all duration-200">
        {{router.title}}
      </router-link>

    </div>
  </div>
</template>
<script setup lang="ts">

import {HeaderMenu} from "../helpers/Header.ts";
import {watch} from "vue";
interface HeaderProps  {
  isScroll :boolean
}
const props =  defineProps<HeaderProps>()
watch(props, ()=>{
  console.log(props.isScroll)
})
</script>
<style lang="">

</style>