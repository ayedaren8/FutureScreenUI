import Vue from 'vue'
import App from './App.vue'
import fsButton from './components/button/fsButton.vue'
Vue.component('fsButton',fsButton)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
