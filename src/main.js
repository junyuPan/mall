import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './components/common/swiper/swiper.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
