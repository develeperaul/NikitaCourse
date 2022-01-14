
import "../scss/main.scss"
import App from './components/App.vue'
import Accordion from './components/Accordion.vue'
// window.Vue = require('vue')
// import Vue fomnr('vue')
import { createApp } from 'vue'
const accordion =  createApp(Accordion)
accordion.mount('#accordion')

const app =  createApp(App)
app.mount('#app')
// if (typeof window !== 'undefined') {
    // }
    
import "../index.html"


 const raul = 5