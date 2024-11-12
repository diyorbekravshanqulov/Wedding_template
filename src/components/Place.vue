<template>
  <div class="w-full relative bg-second">
    <img
      src="/Calendar.png"
      class="absolute w-1/5 top-1/2 -translate-y-1/2 left-0"
      alt=""
    />
    <div class="container py-32">
      <p class="text-5xl mb-10 font-cormorant text-primary text-center">
        When and where
      </p>
      <div class="mt-[64px] md:flex items-center justify-between">
        <div class="relative"><Calendar class="absolute z-10 md:-top-80 -top-[700px]" /></div>
        <div class="flex h-full md: md:mt-0 mt-[785px]">
          <div class="md:flex  hidden items-center justify-end">
            <div class="flex flex-col items-end">
              <span
                class="text-5xl border-[#AE977F] border-b-2 py-2 pr-[78px]"
                style="letter-spacing: 0.5%"
                >17:30</span
              >
              <span class="text-[#323F36] pr-[78px] mt-4 text-[32px]"
                >The Ceremony</span
              >
              <p class="mt-1 pr-[78px] text-2xl font-light text-end md:w-[513px]">
                Yakka Saroy (ул. Абдуллы Каххара, 40, Яккасарайский район)
              </p>
            </div>
          </div>
          <div
            class="flex flex-col py-7 border-[#AE977F] border-l-4 gap-[123px] items-center justify-start"
          >
            <div class="flex flex-col items-start">
              <span
                class="text-5xl border-[#AE977F] border-b-2 py-2 pl-[39px] md:pl-[78px]"
                style="letter-spacing: 0.5%"
                >17:30</span
              >
              <span class="text-[#323F36] pl-[39px] md:pl-[78px] mt-4 text-[32px]"
                >The Ceremony</span
              >
              <p class="mt-1 pl-[39px] md:pl-[78px] text-2xl font-light md:w-[513px]">
                Yakka Saroy (ул. Абдуллы Каххара, 40, Яккасарайский район)
              </p>
            </div>
            <div class="flex flex-col md:hidden items-start">
              <span
                class="text-5xl border-[#AE977F] border-b-2 py-2 pl-[39px] md:pl-[78px]"
                style="letter-spacing: 0.5%"
                >17:30</span
              >
              <span class="text-[#323F36] pl-[39px] md:pl-[78px] mt-4 text-[32px]"
                >The Ceremony</span
              >
              <p class="mt-1 pl-[39px] md:pl-[78px] text-2xl font-light md:w-[513px]">
                Yakka Saroy (ул. Абдуллы Каххара, 40, Яккасарайский район)
              </p>
            </div>
            <div class="flex flex-col items-start">
              <span
                class="text-5xl border-[#AE977F] border-b-2 py-2 pl-[39px] md:pl-[78px]"
                style="letter-spacing: 0.5%"
                >17:30</span
              >
              <span class="text-[#323F36] pl-[39px] md:pl-[78px] mt-4 text-[32px]"
                >The Ceremony</span
              >
              <p class="mt-1 pl-[39px] md:pl-[78px] text-2xl font-light md:w-[513px]">
                Yakka Saroy (ул. Абдуллы Каххара, 40, Яккасарайский район)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Calendar from "./Calendar.vue";
</script>
