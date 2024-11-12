<template>
  <div class="fixed z-30 w-full bottom-5 right-5">
    <div class="relative container">
      <button
        @click="scrollToTop"
        :class="{ 'scale-0': isNearTop, 'scale-100': !isNearTop }"
        class="transform transition-transform duration-500 rounded-lg md:py-8 px-[25px] py-[15px] md:px-[46px] absolute bg-second bottom-32 right-0 -rotate-90"
      >
        <Icon
          icon="teenyicons:top-right-outline"
          class="rotate-45 text-4xl text-primary"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { Icon } from "@iconify/vue";

const scrollTop = ref(0);
const threshold = 400; // Adjust this value based on how far from the top the button should scale

const handleScroll = () => {
  scrollTop.value = window.scrollY || document.documentElement.scrollTop;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const isNearTop = computed(() => scrollTop.value <= threshold);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initialize scrollTop on mount
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
