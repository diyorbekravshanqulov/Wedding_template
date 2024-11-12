<template>
  <div class="bg-[#F7F2EE] relative w-full">
    <img src="/pat.png" class="w-1/3 absolute top-0 left-0" alt="Image" />
    <div
      class="container py-[164px] md:flex w-full items-center justify-between"
    >
      <div>
        <p
          class="font-cormorant font-medium md:text-[128px] text-[54px] md:text-left text-center  text-primary"
        >
          Maria & Vlad
        </p>
        <p
          class="font-cormorant mt-6 md:text-4xl text-2xl text-primary md:text-left text-center"
        >
          We are getting married Mart 8, 2025
        </p>
        <div class="flex mt-6 items-center">
          <div
            v-for="(item, index) in texts"
            :key="index"
            class="flex flex-col justify-start gap-5 px-6"
            :class="{
              'border-black border-r': index != 2,
              'pl-0': index == 0,
            }"
          >
            <p
              class="font-khula text-primary text-3xl md:text-[64px] md:text-left text-center"
            >
              {{ item.num }}
            </p>
            <p class="font-khula text-primary text-[26px] md:text-4xl">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 w-4/5 mx-auto md:m-0 mt-[64px]">
        <img src="/Main.png" class="w-full" alt="Image" />
      </div>
    </div>
    <img
      src="/pat2.png"
      class="md:w-1/4 w-1/2 md:-bottom-1/4 bottom-0 absolute right-0"
      alt="Image"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const texts = ref([
  {
    num: "184",
    text: "days",
  },
  {
    num: "23",
    text: "hours",
  },
  {
    num: "30",
    text: "minutes",
  },
]);
</script>
