import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onNeedRefresh() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOfflineReady() {},
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
