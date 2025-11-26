<script setup lang="ts">
import QRGenerator from '@/components/QRGenerator.vue'
</script>

<template>
  <div class="py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
        Generador de <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Códigos QR</span>
      </h1>
      <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Crea códigos QR personalizados con el estilo de Vasak Group. Rápido, fácil y gratuito.
      </p>
    </div>
    <QRGenerator />
  </div>
</template>
