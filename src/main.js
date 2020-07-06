import Vue from 'vue';
import App from './App.vue';
import Coders from './Coders.vue';

Vue.component('coders', Coders);

new Vue({
  el: '#app',
  render: h => h(App)
})
