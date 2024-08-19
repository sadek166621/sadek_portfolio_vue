import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS (as done previously)
import './assets/css/bootstrap.min.css'
import './assets/css/et-lineicons.css'
import './assets/css/themify-icons.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/style.css'
import './assets/css/style-animations.css'

// Import JS libraries
import './assets/js/jquery-3.3.1.min.js'
import './assets/js/modernizr-custom.js'
import './assets/js/owl-carousel.min.js'
import './assets/js/functions.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
