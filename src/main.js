import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import '@/assets/plugins/progressbar'; // Progress Bar
// import '@/assets/plugins/element'; // Element UI
import '@/assets/icons'; // svg图标，可配合 iconfont 等使用

// 国际化
// import i18n from '@/assets/plugins/lang/index';

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  // i18n,
  render: (h) => h(App)
}).$mount('#app');
