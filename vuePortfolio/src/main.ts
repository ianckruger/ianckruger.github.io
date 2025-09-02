import { createApp } from 'vue'
import App from './App.vue'
import 'fullpage.js/dist/fullpage.css' // FullPage styles
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.mount("#app")
AOS.init()
