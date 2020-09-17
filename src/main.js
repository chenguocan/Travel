import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/styles/reset.scss"
import "./assets/styles/border.scss"
import fastClick from "fastclick"
//移动端点击延迟问题
fastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
