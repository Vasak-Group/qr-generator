<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
  <ThemeToggle />
</template>

<style>
/* Global styles if needed */
</style>
