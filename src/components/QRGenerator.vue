<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import QRCodeStyling from 'qr-code-styling'

const qrContainer = ref<HTMLElement | null>(null)
const qrCode = ref<QRCodeStyling | null>(null)

const options = ref({
  data: 'https://vasak.net.ar',
  width: 300,
  height: 300,
  type: 'svg' as 'svg' | 'canvas',
  image: '',
  dotsOptions: {
    color: '#F6BB31',
    type: 'rounded' as 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded',
  },
  backgroundOptions: {
    color: '#ffffff',
  },
  imageOptions: {
    crossOrigin: 'anonymous',
    margin: 10,
  },
  cornersSquareOptions: {
    type: 'extra-rounded' as 'dot' | 'square' | 'extra-rounded',
    color: '#F46619'
  },
  cornersDotOptions: {
    type: 'dot' as 'dot' | 'square',
    color: '#F46619'
  }
})

const initQR = () => {
  qrCode.value = new QRCodeStyling(options.value)
  if (qrContainer.value) {
    qrCode.value.append(qrContainer.value)
  }
}

const updateQR = () => {
  if (qrCode.value) {
    qrCode.value.update(options.value)
  }
}

const downloadQR = () => {
  if (qrCode.value) {
    qrCode.value.download({ name: 'vasak-qr', extension: 'png' })
  }
}

watch(options, () => {
  updateQR()
}, { deep: true })

onMounted(() => {
  initQR()
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto p-6">
    <!-- Controls -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-800">
      <h2 class="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">Personalizar QR</h2>
      
      <div class="space-y-6">
        <!-- Content -->
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Contenido / URL</label>
          <input 
            v-model="options.data" 
            type="text" 
            class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="https://ejemplo.com"
          >
        </div>

        <!-- Colors -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Color Puntos</label>
            <div class="flex items-center gap-2">
              <input type="color" v-model="options.dotsOptions.color" class="h-10 w-10 rounded cursor-pointer border-0">
              <span class="text-xs text-slate-500">{{ options.dotsOptions.color }}</span>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Color Fondo</label>
            <div class="flex items-center gap-2">
              <input type="color" v-model="options.backgroundOptions.color" class="h-10 w-10 rounded cursor-pointer border-0">
              <span class="text-xs text-slate-500">{{ options.backgroundOptions.color }}</span>
            </div>
          </div>
        </div>

        <!-- Styles -->
        <div class="grid grid-cols-2 gap-4">
           <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Estilo Puntos</label>
            <select v-model="options.dotsOptions.type" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary outline-none">
              <option value="rounded">Redondeado</option>
              <option value="dots">Puntos</option>
              <option value="classy">Classy</option>
              <option value="classy-rounded">Classy Redondeado</option>
              <option value="square">Cuadrado</option>
              <option value="extra-rounded">Extra Redondeado</option>
            </select>
          </div>
           <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Estilo Esquinas</label>
            <select v-model="options.cornersSquareOptions.type" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary outline-none">
              <option value="extra-rounded">Redondeado</option>
              <option value="square">Cuadrado</option>
              <option value="dot">Punto</option>
            </select>
          </div>
        </div>

        <!-- Logo -->
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Logo URL (Opcional)</label>
          <input 
            v-model="options.image" 
            type="text" 
            class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="https://..."
          >
        </div>
      </div>
    </div>

    <!-- Preview -->
    <div class="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
      <div class="bg-white p-4 rounded-xl shadow-lg mb-8" ref="qrContainer"></div>
      
      <button 
        @click="downloadQR"
        class="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
      >
        Descargar QR
      </button>
    </div>
  </div>
</template>
