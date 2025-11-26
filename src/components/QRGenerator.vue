<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import QRCodeStyling from 'qr-code-styling'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const qrContainer = ref<HTMLElement | null>(null)
const qrCode = ref<QRCodeStyling | null>(null)

// Content type
type ContentType = 'url' | 'wifi' | 'playstore' | 'sms' | 'phone' | 'email'
const contentType = ref<ContentType>('url')

// Content data
const urlData = ref('https://vasak.net.ar')
const wifiSSID = ref('')
const wifiPassword = ref('')
const wifiEncryption = ref('WPA')
const playstoreId = ref('')
const smsNumber = ref('')
const smsMessage = ref('')
const phoneNumber = ref('')
const emailAddress = ref('')
const emailSubject = ref('')
const emailBody = ref('')

// QR Options
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
    hideBackgroundDots: true,
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

// Download options
const downloadWidth = ref(1000)
const downloadHeight = ref(1000)
const downloadFormat = ref<'png' | 'svg' | 'jpeg' | 'webp'>('png')

// Image upload
const useCustomImage = ref(false)
const imageFile = ref<File | null>(null)

const getQRData = () => {
  switch (contentType.value) {
    case 'wifi':
      return `WIFI:T:${wifiEncryption.value};S:${wifiSSID.value};P:${wifiPassword.value};;`
    case 'playstore':
      return `https://play.google.com/store/apps/details?id=${playstoreId.value}`
    case 'sms':
      return `SMSTO:${smsNumber.value}:${smsMessage.value}`
    case 'phone':
      return `tel:${phoneNumber.value}`
    case 'email':
      return `mailto:${emailAddress.value}?subject=${encodeURIComponent(emailSubject.value)}&body=${encodeURIComponent(emailBody.value)}`
    default:
      return urlData.value
  }
}

const updateQRData = () => {
  options.value.data = getQRData()
}

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

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    imageFile.value = file
    const reader = new FileReader()
    reader.onload = (e) => {
      options.value.image = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = () => {
  options.value.image = ''
  imageFile.value = null
  useCustomImage.value = false
}

const downloadQR = () => {
  if (qrCode.value) {
    const tempOptions = { ...options.value, width: downloadWidth.value, height: downloadHeight.value }
    qrCode.value.update(tempOptions)
    
    setTimeout(() => {
      qrCode.value?.download({ name: 'vasak-qr', extension: downloadFormat.value })
      // Restore original size
      qrCode.value?.update(options.value)
    }, 100)
  }
}

watch(options, () => {
  updateQR()
}, { deep: true })

watch(contentType, () => {
  updateQRData()
})

watch([urlData, wifiSSID, wifiPassword, wifiEncryption, playstoreId, smsNumber, smsMessage, phoneNumber, emailAddress, emailSubject, emailBody], () => {
  updateQRData()
})

onMounted(() => {
  initQR()
})
</script>

<template>
  <div class="mx-24 p-6">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Panel: Content & Customization -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Content Type Selection -->
        <div class="bg-slate-200 dark:bg-slate-900 rounded-xl p-6">
          <h2 class="text-2xl font-bold mb-4 text-primary">Tipo de Contenido</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <button
              v-for="type in [
                { value: 'url', label: 'URL' },
                { value: 'wifi', label: 'WiFi' },
                { value: 'playstore', label: 'PlayStore' },
                { value: 'sms', label: 'SMS' },
                { value: 'phone', label: 'Teléfono' },
                { value: 'email', label: 'Email' }
              ]"
              :key="type.value"
              @click="contentType = type.value as ContentType"
              :class="[
                'px-4 py-2 rounded-xl font-medium transition-all',
                contentType === type.value
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'
              ]"
            >
              {{ type.label }}
            </button>
          </div>

          <!-- Content Inputs -->
          <div class="mt-6 space-y-4">
            <!-- URL -->
            <div v-if="contentType === 'url'">
              <label class="block text-sm font-medium mb-2">URL</label>
              <input 
                v-model="urlData" 
                type="url" 
                class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="https://ejemplo.com"
              >
            </div>

            <!-- WiFi -->
            <div v-if="contentType === 'wifi'" class="space-y-3">
              <div>
                <label class="block text-sm font-medium mb-2">SSID (Nombre de Red)</label>
                <input v-model="wifiSSID" type="text" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="Mi WiFi">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Contraseña</label>
                <input v-model="wifiPassword" type="text" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="contraseña123">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Encriptación</label>
                <select v-model="wifiEncryption" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none">
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">Sin Contraseña</option>
                </select>
              </div>
            </div>

            <!-- PlayStore -->
            <div v-if="contentType === 'playstore'">
              <label class="block text-sm font-medium mb-2">ID de la App</label>
              <input v-model="playstoreId" type="text" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="com.ejemplo.app">
            </div>

            <!-- SMS -->
            <div v-if="contentType === 'sms'" class="space-y-3">
              <div>
                <label class="block text-sm font-medium mb-2">Número</label>
                <input v-model="smsNumber" type="tel" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="+54 9 11 1234-5678">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Mensaje</label>
                <textarea v-model="smsMessage" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" rows="3" placeholder="Hola!"></textarea>
              </div>
            </div>

            <!-- Phone -->
            <div v-if="contentType === 'phone'">
              <label class="block text-sm font-medium mb-2">Número de Teléfono</label>
              <input v-model="phoneNumber" type="tel" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="+54 9 11 1234-5678">
            </div>

            <!-- Email -->
            <div v-if="contentType === 'email'" class="space-y-3">
              <div>
                <label class="block text-sm font-medium mb-2">Dirección de Email</label>
                <input v-model="emailAddress" type="email" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="ejemplo@email.com">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Asunto</label>
                <input v-model="emailSubject" type="text" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="Asunto del email">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Mensaje</label>
                <textarea v-model="emailBody" class="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" rows="3" placeholder="Cuerpo del mensaje"></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Customization Options -->
        <div class="bg-slate-200 dark:bg-slate-900 rounded-xl shadow-xl p-6">
          <h2 class="text-2xl font-bold mb-4 text-primary">Personalización</h2>
          
          <div class="space-y-6">
            <!-- Colors -->
            <div>
              <h3 class="text-lg font-semibold mb-3 text-secondary">Colores</h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Color Puntos</label>
                  <div class="flex items-center gap-2">
                    <input type="color" v-model="options.dotsOptions.color" class="h-10 w-16 rounded cursor-pointer border-0">
                    <span class="text-xs">{{ options.dotsOptions.color }}</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Color Fondo</label>
                  <div class="flex items-center gap-2">
                    <input type="color" v-model="options.backgroundOptions.color" class="h-10 w-16 rounded cursor-pointer border-0">
                    <span class="text-xs">{{ options.backgroundOptions.color }}</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Color Esquinas</label>
                  <div class="flex items-center gap-2">
                    <input type="color" v-model="options.cornersSquareOptions.color" class="h-10 w-16 rounded cursor-pointer border-0">
                    <span class="text-xs">{{ options.cornersSquareOptions.color }}</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Color Puntos Esquinas</label>
                  <div class="flex items-center gap-2">
                    <input type="color" v-model="options.cornersDotOptions.color" class="h-10 w-16 rounded cursor-pointer border-0">
                    <span class="text-xs">{{ options.cornersDotOptions.color }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Styles -->
            <div>
              <h3 class="text-lg font-semibold mb-3 text-secondary">Estilos</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Estilo Puntos</label>
                  <select v-model="options.dotsOptions.type" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none">
                    <option value="rounded">Redondeado</option>
                    <option value="dots">Puntos</option>
                    <option value="classy">Classy</option>
                    <option value="classy-rounded">Classy Redondeado</option>
                    <option value="square">Cuadrado</option>
                    <option value="extra-rounded">Extra Redondeado</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Estilo Esquinas</label>
                  <select v-model="options.cornersSquareOptions.type" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none">
                    <option value="extra-rounded">Redondeado</option>
                    <option value="square">Cuadrado</option>
                    <option value="dot">Punto</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Estilo Puntos Esquinas</label>
                  <select v-model="options.cornersDotOptions.type" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none">
                    <option value="dot">Punto</option>
                    <option value="square">Cuadrado</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Logo/Image -->
            <div>
              <h3 class="text-lg font-semibold mb-3 text-secondary">Logo / Imagen</h3>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="useImage" 
                    v-model="useCustomImage"
                    class="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                  >
                  <label for="useImage" class="text-sm font-medium">Usar Imagen Propia</label>
                </div>

                <div v-if="useCustomImage" class="space-y-3">
                  <div v-if="!imageFile">
                    <label class="block">
                      <span class="sr-only">Elegir imagen</span>
                      <input 
                        type="file" 
                        accept="image/*"
                        @change="handleImageUpload"
                        class="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary file:cursor-pointer"
                      >
                    </label>
                  </div>
                  <div v-else class="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                    <span class="text-sm">{{ imageFile.name }}</span>
                    <button @click="removeImage" class="text-red-500 hover:text-red-700">
                      <FontAwesomeIcon icon="trash" />
                    </button>
                  </div>

                  <div class="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      id="hideBackgroundDots" 
                      v-model="options.imageOptions.hideBackgroundDots"
                      class="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                    >
                    <label for="hideBackgroundDots" class="text-sm font-medium">Esconder Puntos del fondo de la imagen</label>
                  </div>

                  <div>
                    <label class="block text-sm font-medium mb-2">Márgenes: {{ options.imageOptions.margin }}</label>
                    <input 
                      type="range" 
                      v-model.number="options.imageOptions.margin" 
                      min="0" 
                      max="50" 
                      class="w-full"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Panel: Preview & Download -->
      <div class="space-y-6">
        <!-- Preview -->
        <div class="bg-slate-200 dark:bg-slate-900 rounded-xl shadow-xl p-6">
          <h2 class="text-2xl font-bold mb-4 text-primary">Vista Previa</h2>
          <div class="flex flex-col items-center justify-center rounded-xl p-6">
            <div class="bg-white p-4 rounded-xl mb-4" ref="qrContainer"></div>
          </div>
        </div>

        <!-- Download Options -->
        <div class="bg-slate-200 dark:bg-slate-900 rounded-xl shadow-xl p-6">
          <h2 class="text-2xl font-bold mb-4 text-primary">Descargar</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Formato</label>
              <select v-model="downloadFormat" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none">
                <option value="png">PNG</option>
                <option value="svg">SVG</option>
                <option value="jpeg">JPEG</option>
                <option value="webp">WEBP</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium mb-2">Ancho</label>
                <input 
                  v-model.number="downloadWidth" 
                  type="number" 
                  min="100" 
                  max="5000"
                  class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none"
                >
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Alto</label>
                <input 
                  v-model.number="downloadHeight" 
                  type="number" 
                  min="100" 
                  max="5000"
                  class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none"
                >
              </div>
            </div>

            <button 
              @click="downloadQR"
              class="w-full px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-primary to-secondary hover hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon="download" />
              Descargar QR
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
