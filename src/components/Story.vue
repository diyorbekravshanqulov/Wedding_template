<template>
  <div class="abstract-border w-full"></div>
  <div class="h-full back w-full py-20 pb-40 bg-[#8b9d89]">
    <div class="container">
      <p
        class="text-[#F7F2EE] text-center text-5xl font-cormorant font-semibold"
      >
        RSVP
      </p>
      <div class="mt-[64px] md:flex items-center justify-between">
        <div class="p-7 bg-white w-[402px]">
          <p
            class="text-4xl text-primary font-semibold text-center mb-4 font-cormorant"
          >
            First time we meet
          </p>
          <p class="font-cormorant text-primary font-light text-2xl">
            We met by chance in a small café, both ordering the same drink at
            the same time. Our eyes met as the barista called out our matching
            orders, and from that moment, everything changed. It was as if fate
            had brought us together through a simple coincidence, and from then
            on, we kept running into each other, as if the universe had decided
            our paths should cross.
          </p>
        </div>
        <img
          src="/second.png"
          class="md:w-1/4 w-4/5 mx-auto py-[36px]"
          alt="Image"
        />
        <div class="p-7 bg-white w-[402px]">
          <p
            class="text-4xl text-primary font-semibold text-center mb-4 font-cormorant"
          >
            First time we meet
          </p>
          <p class="font-cormorant font-light text-primary text-2xl">
            We met by chance in a small café, both ordering the same drink at
            the same time. Our eyes met as the barista called out our matching
            orders, and from that moment, everything changed. It was as if fate
            had brought us together through a simple coincidence, and from then
            on, we kept running into each other, as if the universe had decided
            our paths should cross.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="abstract-border-bottom w-full"></div>
</template>

<script setup>
// Add your script here (if needed)
</script>

<style scoped>
.abstract-border {
  background-color: #f7f2ee;
  padding: 60px;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10"%3E%3Cpath fill="%238b9d89" d="M0 0L10 3L20 0L30 5L40 0L50 3L60 0L70 5L80 0L90 3L100 0L100 10L0 10Z"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 50px solid #8b9d89;
}

.abstract-border-bottom {
  background-color: #8b9d89; /* Change background color */
  padding: 60px;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10"%3E%3Cpath fill="%23f7f2ee" d="M0 0L10 3L20 0L30 5L40 0L50 3L60 0L70 5L80 0L90 3L100 0L100 10L0 10Z"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 50px solid #f7f2ee; /* Maintain original SVG color as border */
}

.back {
  background-image: url("/bgSt.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: left 0%;
}
</style>

/* .abstract-border { background-color: #f4f4f4; padding: 20px;
background-image: url('data:image/svg+xml,%3Csvg
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10"%3E%3Cpath
fill="%23c4d6c8" d="M0 0C10 5 30 -5 40 5C50 10 70 -5 80 5C90 15 100 0 100 10L0
10Z"/%3E%3C/svg%3E'); background-repeat: no-repeat; background-size: cover;
border-bottom: 20px solid transparent; } */
