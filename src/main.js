// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import storeOptions from './vuex/store'
import VueAxios from 'vue-axios'
import axios from 'axios'
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
Vuex.Store(storeOptions)

Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})

// include element-ui elements http://element.eleme.io/#/en-US/component/quickstart
