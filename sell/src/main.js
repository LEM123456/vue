// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Seller from './components/seller/seller';
import VueRoutes from 'vue-router';
import VueResouce from 'vue-resource';

import './common/stylus/index.styl';

Vue.use(VueRoutes);
Vue.use(VueResouce);

Vue.config.productionTip = false;

const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
];

var router = new VueRoutes({
  routes,
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    // router.push('/goods')
  }
});

router.push('/goods');
