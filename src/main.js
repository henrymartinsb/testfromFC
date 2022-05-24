import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import  BootstrapVue  from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueMask from 'v-mask';
import ButtonNext from '@/components/ButtonNext.vue';
import money from 'v-money';
import Vuelidate from 'vuelidate';


Vue.use(Vuelidate)
 
// register directive v-money and component <money>
Vue.use(money, {precision: 4})


Vue.component("ButtonNext", ButtonNext)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
