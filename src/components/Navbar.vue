<template>
  <div
    class="fixed z-20 top-0 w-full left-0"
    :class="isScrolled ? 'backdrop-blur-lg bg-white/30' : 'bg-transparent'"
  >
    <div class="container md:py-[42px] py-6 md:block flex items-center justify-center">
      <div class="flex items-center gap-[62px]">
        <span
          class="font-cormorant font-medium md:text-3xl text-2xl cursor-pointer"
          v-for="(item, index) in texts"
          :key="index"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const texts = ref(["Story", "Place", "Place"]);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
