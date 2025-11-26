import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faCircleHalfStroke, faDownload, faImage, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSun, faMoon, faCircleHalfStroke, faDownload, faImage, faTrash)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
