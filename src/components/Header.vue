<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="m-4 rounded-xl bg-slate-200 dark:bg-slate-900">
    <div class="flex h-16 items-center justify-between px-8">
      <RouterLink to="/" class="flex items-center gap-2">
        <span class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          QR Generator
        </span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-6">
        <a href="https://vasak.net.ar/" target="_blank" class="text-sm font-medium hover:text-primary transition-colors">
          Vasak Group
        </a>
      </nav>
    </div>
  </header>
</template>
