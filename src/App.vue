<template>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <Transition 
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeInRight" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/views/Footer.vue'
</script>

<style>
.fade-enter-form,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5 ease-out;
}
</style>
