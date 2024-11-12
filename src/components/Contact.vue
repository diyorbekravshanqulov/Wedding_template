<template>
  <div class="abstract-border w-full"></div>
  <div class="h-full back w-full py-20  bg-[#8b9d89]">
    <div class="container">
      <p
        class="text-[#F7F2EE] text-center text-5xl font-cormorant font-semibold"
      >
        RSVP
      </p>
      <div
        class="mt-[64px] md:grid gap-[101px] grid-cols-12 w-full items-center justify-between"
      >
        <div class="col-span-7">
          <p class="md:text-4xl text-2xl text-second md:w-[800px]">
            Please confirm your attendance at our celebration by March 8, 2025
            by any means convenient for you or fill out the form
            <Icon
              icon="teenyicons:top-right-outline"
              class="rotate-45 md:inline hidden ml-2"
            />
          </p>
          <img src="/last.png" class="w-full mt-16" alt="Image" />
        </div>
        <div
          class="md:rounded-tl-[200px] rounded-tl-[150px] md:m-0 mt-[35px] col-span-5 md:rounded-br-[200px] rounded-br-[150px] bg-[#F7F2EE] py-32 px-20"
        >
          <label for="name" class="text-2xl block text-[#323F36]"
            >Your name</label
          >
          <input
            id="name"
            v-model="name"
            type="text"
            class="text-3xl px-6 w-full text-[#323F36] mt-[14px] py-4 border-[#607065] placeholder:text-[#C7C7C7] rounded-lg bg-transparent border"
            placeholder="Ivan Abramov"
          />

          <div class="mt-9">
            <label class="text-[#323F36] block text-2xl"
              >Will you be able to come to our wedding?</label
            >
            <div class="mt-[18px]">
              <div class="custom-radio">
                <input
                  type="radio"
                  id="yes"
                  value="Yes, I can come"
                  v-model="attendance"
                />
                <label for="yes" class="text-[#323F36] text-[20px]"
                  >Yes, I can come</label
                >
              </div>

              <div class="custom-radio">
                <input
                  type="radio"
                  id="notSure"
                  value="I'm not sure yet"
                  v-model="attendance"
                />
                <label for="notSure" class="text-[#323F36] text-[20px]"
                  >I'm not sure yet</label
                >
              </div>
              <div class="custom-radio">
                <input
                  type="radio"
                  id="no"
                  value="Unfortunately, I can’t"
                  v-model="attendance"
                />
                <label for="no" class="text-[#323F36] text-[20px]"
                  >Unfortunately, I can’t</label
                >
              </div>
            </div>
          </div>

          <label for="family" class="mt-9 block text-[24px] text-primary">
            If you will be with a couple or family, enter all the names:
          </label>
          <input
            id="family"
            v-model="familyNames"
            type="text"
            class="text-3xl px-6 w-full text-[#323F36] mt-[14px] py-4 border-[#607065] placeholder:text-[#C7C7C7] rounded-lg bg-transparent border"
            placeholder="Klaus Gilson, Viktoriya Kim, Ann Gilbert"
          />

          <label for="allergies" class="mt-9 block text-[24px] text-primary"
            >Are you allergic to any foods?</label
          >
          <input
            id="allergies"
            v-model="allergies"
            type="text"
            class="text-3xl px-6 w-full text-[#323F36] mt-[14px] py-4 border-[#607065] placeholder:text-[#C7C7C7] rounded-lg bg-transparent border"
            placeholder="Nuts, strawberries"
          />

          <button
            @click.prevent="submitForm"
            class="text-[#CAB9A7] rounded-lg py-4 px-[67px] bg-[#323F36] mt-11 mx-auto block"
          >
            Send a reply
          </button>
        </div>
      </div>
      <div>
        <p class="font-semibold mt-[204px] text-5xl font-cormorant text-second text-center">Details</p>
        <div class="md:mt-24 mt-9 text-second md:flex items-center justify-between gap-[186px]">
          <div>
            <p class="md:text-4xl text-[32px]">Dress code</p>
            <p class="md:text-[32px] text-[20px] mt-[14px]">
              We will be very grateful if you support the style and color of our
              wedding in your outfits.
            </p>
          </div>
          <div class="md:mt-0 mt-9">
            <p class="text-[32px] md:text-4xl">Presents</p>
            <p class="text-[20px] md:text-[32px] mt-[14px]">
              We would like our hearts to be light on this day, our souls to be
              open, our mood to be festive, and our gifts to be packed in
              envelopes.
            </p>
          </div>
        </div>
      </div>
      <div class="md:mt-[301px] mt-36 text-second">
        <p class="md:text-[64px] text-[32px] text-center font-cormorant font-semibold">Love makes the world go round</p>
        <div class="mt-[64px] flex justify-center items-center gap-[64px]">
          <p v-for="(item, index) in ['Story', 'Place', 'Place']" :key="index" class="text-[32px] font-medium font-cormorant">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const name = ref("");
const attendance = ref("");
const familyNames = ref("");
const allergies = ref("");

const submitForm = () => {
  // Handle form submission
  if (name.value && attendance.value && familyNames.value && allergies.value) {
    alert(
      `Name: ${name.value}\nAttendance: ${attendance.value}\nFamily Names: ${familyNames.value}\nAllergies: ${allergies.value}`
    );
    name.value = "";
    attendance.value = "";
    familyNames.value = "";
    allergies.value = "";
  }
};
</script>

<style scoped>
.abstract-border {
  background-color: #f7f2ee;
  padding: 50px;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10"%3E%3Cpath fill="%238b9d89" d="M0 0L10 3L20 0L30 5L40 0L50 3L60 0L70 5L80 0L90 3L100 0L100 10L0 10Z"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 50px solid #8b9d89;
}

.back {
  background-image: url("/bgNd.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: left 10%;
}

.custom-radio {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 12px;
}

.custom-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.custom-radio label {
  position: relative;
  padding-left: 40px;
  cursor: pointer;
}

.custom-radio input[type="radio"] + label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #607065;
  background-color: transparent;
  transition: all 0.3s ease;
}

.custom-radio input[type="radio"]:checked + label::before {
  background-color: transparent;
  border-color: #4a5d45;
}

.custom-radio input[type="radio"]:checked + label::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 8px; /* Keep this value to position the inner circle correctly */
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #607065;
}

.custom-radio input[type="radio"]:hover + label::before {
  border-color: #4a5d45;
}
</style>

/* .abstract-border { background-color: #f4f4f4; padding: 20px;
background-image: url('data:image/svg+xml,%3Csvg
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10"%3E%3Cpath
fill="%23c4d6c8" d="M0 0C10 5 30 -5 40 5C50 10 70 -5 80 5C90 15 100 0 100 10L0
10Z"/%3E%3C/svg%3E'); background-repeat: no-repeat; background-size: cover;
border-bottom: 20px solid transparent; } */
