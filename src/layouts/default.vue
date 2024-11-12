<template>
  <div>
    <Navbar/>
    <Up/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Up from '../components/Up.vue';
</script>
