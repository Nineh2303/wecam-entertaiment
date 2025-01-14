<template>
  <div class="w-full flex flex-col items-center">
    <div
      class="bg-[url('assets/home.jpg')] h-[600px] object-fill flex items-center justify-center w-full"
    >
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-white text-[50px]">Portfolio</h1>
      </div>
    </div>
    <div class="flex justify-center mt-2 flex-col items-center w-[70%]">
      <div class="w-full flex justify-center py-2 border-b-2 my-2">
        <h1 class="font-bold uppercase text-[20px]">Các hoạt động tiêu biểu</h1>
      </div>
      <div class="grid grid-cols-2 w-full mt-2 space-x-8">
        <div class="flex flex-col justify-center w-full">
          <h1 class="font-bold text-[20px]">
            TIỆC YEAR END PARTY CỦA CÔNG TY XÂY DỰNG NỘI THẤT PRESTIGE
          </h1>
          <p>Tại The Art Tea Lounge & Event</p>
        </div>
        <div class="flex space-x-2">
          <img
            src="/src/assets/pt2.jpg"
            alt=""
            class="h-[300px] w-[300px] object-cover rounded-lg"
          />
          <img
            src="/src/assets/pt1.jpg"
            alt=""
            class="h-[300px] w-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 w-full mt-5 space-x-8">
        <div>
          <img
            src="/src/assets/pt4.jpg"
            alt=""
            class="h-[350px] object-cover rounded-lg"
          />
        </div>
        <div class="flex flex-col justify-center w-full">
          <h1 class="font-bold text-[20px]">LỄ HỘI THANH NIÊN THỦ ĐỨC</h1>
          <p>
            Vinh dự diễn chính trong chương trình Lễ hội Thanh niên Thủ Đức lần
            1 năm 2024 diễn ra ngày 23/03/2024
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 w-full mt-2 space-x-8">
        <div class="flex flex-col justify-center w-full">
          <h1 class="font-bold text-[20px] uppercase">Nhà tài trợ Vàng</h1>
          <p>
            Chương trình "Tôi là sinh viên 2021" được tổ chức bởi Hội cựu học
            sinh trường Chuyên Trần Hưng Đạo - Bình Thuận
          </p>
        </div>
        <div class="flex space-x-2">
          <img
            src="/src/assets/reward.jpg"
            alt=""
            class="h-[350px] w-[600px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-5 flex-col items-center w-[75%]">
      <div class="w-full flex justify-center py-2 border-b-2 my-2">
        <h1 class="font-bold uppercase text-[20px]">Sự kiện đồng tổ chức</h1>
      </div>
      <div class="flex w-full mt-2 space-x-8 justify-center">
        <div class="flex space-x-2 flex-col items-center">
          <img
            src="/src/assets/vvv.jpg"
            alt=""
            class="h-[350px] object-cover rounded-lg"
          />
          <h1 class="font-bold text-[20px]">Minishow "Vibe & Verb"</h1>
          <p>
            Được tài trợ bởi Anh Ngữ Langspace, trình diễn tại Mẹ Ơi Acoustic
          </p>
        </div>
        <div class="flex space-x-2 flex-col items-center">
          <img
            src="/src/assets/yeb.jpg"
            alt=""
            class="h-[350px] object-cover rounded-lg"
          />
          <h1 class="font-bold text-[20px]">Year End Party</h1>
          <p>Tại Villa Song Saigon</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-5 flex-col items-center w-[75%]">
      <div class="w-full flex justify-center py-2 border-b-2 my-2">
        <h1 class="font-bold uppercase text-[20px]">Các dự án âm nhạc</h1>
      </div>
      <div class="flex space-x-8 mt-5">
        <div class="flex flex-col space-x-5 items-center">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/C68dRBw9ZQM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
          <h1 class="font-bold text-[20px]">MV "Bơ Vơ" - Minh Huy</h1>
        </div>
        <div class="flex flex-col space-x-5 items-center">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/lSZzzjaq0O4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
          <h1 class="font-bold text-[20px]">MV "Ở lại với anh" - Minh Huy</h1>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-5 flex-col items-center w-[75%]">
      <div class="w-full flex justify-center py-2 border-b-2 my-2">
        <h1 class="font-bold uppercase text-[20px]">Giải thưởng đã đạt được</h1>
      </div>
      <div class="flex flex-col items-center">
        <img
            src="/src/assets/reward2.jpg"
            alt=""
            class="h-[350px] object-cover rounded-lg"
          />
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-[20px]">Top 20 Nhà làm phim xuất sắc 2019</h1>
              <p>Được tổ chức bởi SONY</p>
          </div>
      </div>
    </div>
    <div class="flex justify-center mt-5 flex-col items-center w-[75%]">
      <div class="w-full flex justify-center py-2 border-b-2 my-2">
        <h1 class="font-bold uppercase text-[20px]">Các khách hàng/đối tác</h1>
      </div>
      <div class="grid grid-cols-3 grid-rows-3 gap-3 items-center justify-center mt-5 w-[75%] ">
            <a  v-for="sponsor in sponsors" :href="sponsor.url" target="_blank"
                class=" w-full h-full flex flex-col rounded-lg border-2 items-center justify-center px-2 py-2 hover:shadow-xl transition-all hover:font-bold duration-200">
              <div class="w-[50%] h-[90%] flex items-center justify-center">
                <img :src="sponsor.img" alt="" class="object-cover w-[80%]" >
                </div>
              <h1>{{ sponsor.name }}</h1>
            </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { sponsors } from './static';

</script>

<style lang="scss" scoped></style>
