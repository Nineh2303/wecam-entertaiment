<template>
  <div class="w-full flex flex-col items-center">
    <div class="bg-[url('assets/home.jpg')] h-[600px] object-fill flex items-center justify-center w-full">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-white text-[50px]">Wecam</h1>
        <h1 class="font-bold text-white text-xl">
          Cung cấp ban nhạc, ca sĩ, MC, dancer, âm thanh ánh sáng, quay chụp
        </h1>
      </div>
    </div>
    <div class="flex space-x-8 w-[75%] mt-5 justify-center border-b-2 py-[20px] ">
      <router-link v-for="option in OptionHome" to="">
        <button class="w-[250px] h-[40px] bg-blue-400 rounded-lg font-bold text-white ">{{ option.title }}</button>
      </router-link>
    </div>
    <div class="w-full flex flex-col justify-center items-center py-5">
      <h1 class="font-bold text-[25px] uppercase">Nơi nào có hát hò, nơi đó có Wecam</h1>
      <div class="flex space-x-[50px] mt-5 w-[75%] justify-center">
        <div v-for="option in Options" class="flex flex-col items-center">
          <img :src="option.url" alt="" class="w-[500px] rounded-lg">
          <h1 class="font-bold text-xl">{{ option.title }}</h1>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col items-center justify-center mt-5">
      <p class="w-[50%] font-bold text-lg flex text-center">
        Wecam chuyên tổ chức buổi trình diễn âm nhạc, cung cấp ban nhạc,
        ca sĩ, vũ công và quay phim, chụp ảnh. Chúng tôi biến mọi không gian thành sân khấu sống động,
        từ quán cà phê, bar, resort đến sinh nhật, tiệc cưới và sự kiện nội bộ của công ty.
      </p>
      <h1 class="mt-5 font-bold text-xl uppercase">Đồng hành cùng Langspace để sự kiện của bạn thêm thăng hoa và đáng nhớ.</h1>
     
    </div>
  </div>
</template>
<script setup lang="ts">
import {OptionHome} from "../helpers/Header.ts";
import {Options} from "../helpers/static.ts";
</script>
<style lang="">

</style>