import { createApp } from 'vue'
import App from './App.vue'
import 'fullpage.js/dist/fullpage.css' // FullPage styles
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Will probably not use, but just in case\
import "bootstrap-icons/font/bootstrap-icons.css"




const app = createApp(App)
app.mount("#app")
AOS.init()
