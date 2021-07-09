import Vue from 'vue'
import '../css/app.css'
import App from './App.vue'
import Example from './components/Example.vue'
Vue.component('Example', Example)
const app = new Vue({
    ...App
})
app.$mount('#app')