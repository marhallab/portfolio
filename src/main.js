import { createApp } from 'vue'
import '@/static/styles/main.scss'
import App from './App.vue'
import router from './routes.js'
import VueTyper from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"
import { i18n } from '@/locales/i18n.js'

const app = createApp(App);
app.use(router);
app.use(VueTyper);
app.use(i18n)
app.mount('#app');