import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import SearchField from '@/components/SearchField.vue';
import Card from '@/components/Card.vue';

Vue.config.productionTip = false;
Vue.component('SearchField', SearchField);
Vue.component('Card', Card);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

//VirtualDom
// h('div',{id: zmienna}, h('p',{},'ala ma kota' + message))
