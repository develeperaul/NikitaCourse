
import "../scss/main.scss"
import App from './components/App.vue'
import Slider from './components/Slider.vue'
import Accordion from './components/Accordion.vue'
import Form from './components/Form.vue'
// window.Vue = require('vue')
// import Vue fomnr('vue')
import { createApp } from 'vue'
const accordion =  createApp(Accordion)
accordion.mount('#accordion')
const slider =  createApp(Slider)
slider.mount('#slider');
const form =  createApp(Form)
form.mount('#form');

const app =  createApp(App)
app.mount('#app')
// if (typeof window !== 'undefined') {
    // }
    
import "../index.html"


 const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}