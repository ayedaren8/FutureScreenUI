import Vue from 'vue';
import App from './App.vue';
import FSUI from './../packages/index';
import './../packages/theme/index.scss';
Vue.use(FSUI);
// Vue.config.productionTip = false
new Vue({
	render: (h) => h(App),
}).$mount('#app');
