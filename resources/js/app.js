/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('admin-lte');
window.Vue = require('vue');

//support for moment.js
import moment from 'moment';
Vue.filter('timeFormat', function(arg) {
    return moment(arg).format('DD MM YYYY');
});

//vuex
import Vuex from 'vuex';
Vue.use(Vuex);
import storeData from './store/index.js';
const store = new Vuex.Store(
    storeData
);

Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';
const router = new VueRouter({
    routes,
    mode: 'hash',
});

// V-form
import { Form, HasError, AlertError } from 'vform';
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
window.Form = Form;

// Sweet alert 2
import swal from 'sweetalert2'
window.swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;


const app = new Vue({
    el: '#app',
    mounted() {
        console.log(this.$store);
    },
    router,
    store
});

