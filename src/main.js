import { createApp } from 'vue'
import './styles/reset.css'
import './styles/style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
