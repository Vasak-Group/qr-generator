<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <RouterLink to="/" class="flex items-center gap-2">
        <span class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Vasak Group
        </span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-6">
        <a href="https://vasak.net.ar/" target="_blank" class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">
          Inicio
        </a>
        <a href="https://vasak.net.ar/about" target="_blank" class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">
          Nosotros
        </a>
        <a href="https://vasak.net.ar/services" target="_blank" class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">
          Servicios
        </a>
        <a href="https://vasak.net.ar/tools" target="_blank" class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">
          Herramientas
        </a>
      </nav>
      
      <!-- Mobile Menu Button (Placeholder) -->
      <button class="md:hidden text-slate-600 dark:text-slate-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </header>
</template>
