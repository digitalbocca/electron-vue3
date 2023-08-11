import { createApp } from 'vue'

import App from '@/components/app.vue'

import router from '@/router'
import store from '@/stores'

import '@/sass/styles.sass'

const app = createApp(App)

app.config.productionTip = false

app.use(router)
app.use(store)

app.mount('#app')
