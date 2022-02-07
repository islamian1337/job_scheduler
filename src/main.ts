import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App);
createApp(App).use(router).mount('#app')
import "bootstrap/dist/js/bootstrap.js"
