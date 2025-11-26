<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

type Theme = 'light' | 'dark' | 'system'

const currentTheme = ref<Theme>('system')

const applyTheme = (theme: Theme) => {
  const root = document.documentElement
  
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    root.classList.toggle('dark', prefersDark)
  } else {
    root.classList.toggle('dark', theme === 'dark')
  }
}

const cycleTheme = () => {
  const themes: Theme[] = ['light', 'dark', 'system']
  const currentIndex = themes.indexOf(currentTheme.value)
  const nextIndex = (currentIndex + 1) % themes.length
  currentTheme.value = themes[nextIndex] as Theme
  
  localStorage.setItem('theme', currentTheme.value)
  applyTheme(currentTheme.value)
}

const getIcon = () => {
  if (currentTheme.value === 'light') return 'sun'
  if (currentTheme.value === 'dark') return 'moon'
  return 'circle-half-stroke'
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') as Theme | null
  if (savedTheme) {
    currentTheme.value = savedTheme
  }
  applyTheme(currentTheme.value)
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme.value === 'system') {
      applyTheme('system')
    }
  })
})
</script>

<template>
  <button
    @click="cycleTheme"
    class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg bg-white/90 dark:bg-slate-800/80 flex items-center justify-center hover:scale-105 transition-transform"
    :aria-label="`Current theme: ${currentTheme}`"
    :title="`Cycle theme (current: ${currentTheme})`"
  >
    <FontAwesomeIcon :icon="['fas', getIcon()]" class="text-xl text-slate-700 dark:text-slate-200" />
  </button>
</template>
