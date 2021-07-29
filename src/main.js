import { createApp } from 'vue'
import App from './App.vue'
import "bootswatch/dist/minty/bootstrap.min.css"
import router from './router'
createApp(App).use(router).use(router).mount('#app')
