// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import storeOptions from './vuex/store'
import Router from 'vue-router'
import routerOptions from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const axiosInstance = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    headers: {
        Authorization: ''
    }
})

Vue.use(VueAxios, axiosInstance)

Vue.use(Vuex)
const store = new Vuex.Store(storeOptions)

Vue.use(Router)
const router = new Router(routerOptions)

Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})

// include element-ui elements http://element.eleme.io/#/en-US/component/quickstart
