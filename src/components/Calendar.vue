<template>
  <div class="flex items-center md:w-[542px] justify-center md:h-[601px] bg-primary">
    <div class="calendar bg-primary text-second rounded-lg w-full md:px-[38px] px-[28px] py-[37px] md:py-[46px]">
      <!-- Static calendar header displaying March 2025 -->
      <div class="flex items-center w-full justify-between mb-8">
        <p class="text-second text-4xl md:text-[40px] font-cormorant">March</p>
        <p class="text-second text-3xl md:text-4xl ">2025</p>
      </div>
      <div class="days-of-week grid grid-cols-7 gap-1 mb-3 text-gray-400 font-semibold">
        <div v-for="day in daysOfWeek" class="md:text-2xl text-[20px] text-second" :key="day">{{ day }}</div>
      </div>
      <hr style="border: 0.1px solid #F7F2EE99;">
 
      <div class="dates grid grid-cols-7 gap-1">
        <!-- Empty divs for alignment before the 1st day of March 2025 -->
        <div v-for="i in firstDayOfMonth" :key="`empty-${i}`" class="empty"></div>
        <div
          v-for="day in daysInMonth"
          :key="day"
          class="date flex items-center text-[20px] md:text-2xl justify-center p-2 w-[50px] h-[50px] rounded-full"
          :class="{
            'border-4 border-[#CAB9A7] text-second': day === 8
          }"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Static month and day names
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Set static values for March 2025
const selectedYear = ref(2025);
const selectedMonth = ref(2); // March (0-based index for months)
const selectedDay = ref(8);

// Computed property to calculate days in March 2025
const daysInMonth = computed(() => {
  return Array.from(
    { length: new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate() },
    (_, i) => i + 1
  );
});

// Computed property to find the first day of March 2025 (adjusted for grid start)
const firstDayOfMonth = computed(() => {
  const firstDay = new Date(selectedYear.value, selectedMonth.value, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1; // Adjust to make Monday start
});
</script>

<style scoped>
.empty {
  visibility: hidden;
}
</style>
