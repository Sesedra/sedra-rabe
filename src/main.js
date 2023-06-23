import { createApp } from 'vue'
import App from './App.vue'
import VWave from 'v-wave'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueAnimateOnScroll from 'vue-animate-onscroll'

createApp(App)
.use(ElementPlus)
.use(VWave)
.use(VueAnimateOnScroll)
.mount('#app')
