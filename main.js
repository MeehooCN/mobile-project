import Vue from 'vue';
import App from './App';

import views from './pages/views/views';
Vue.component('views', views)

import components from './pages/components/components';
Vue.component('components', components)

import mine from './pages/mine/mine';
Vue.component('mine', mine)

import cuCustom from './colorui/components/cu-custom.vue';

Vue.component('cu-custom', cuCustom);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();
