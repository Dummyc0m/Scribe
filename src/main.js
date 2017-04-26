// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import storeOptions from './vuex/store'
import Router from 'vue-router'
import routerOptions, {afterEach, beforeEach} from './router'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

export const http = axios.create({
    baseURL: process.env.SERVER_URL,
    headers: {
        Authorization: ''
    },
    transformRequest: [data => {
        // iView.LoadingBar.start()
        return data ? Object.keys(data).map(key => {
            return {key: key, value: data[key]}
        }).reduce((formData, entry) => {
            const value = entry.value
            switch (typeof value) {
                case 'object':
                    formData.append(entry.key, JSON.stringify(value))
                    break
                default:
                    formData.append(entry.key, value)
                    break
            }
            return formData
        }, new FormData()) : data
    }],
    transformResponse: [data => {
        // iView.LoadingBar.finish()
        return data ? JSON.parse(data) : data
    }]
})

Vue.use(Vuex)
export const store = new Vuex.Store(storeOptions)

Vue.use(Router)
export const router = new Router(routerOptions)
router.beforeEach(beforeEach)
router.afterEach(afterEach)

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})

console.log(`
  ______   ______   ______   ______   ______ 
 /_____/  /_____/  /_____/  /_____/  /_____/ 
  _________            ._____.               
 /   _____/ ___________|__\\_ |__   ____      
 \\_____  \\_/ ___\\_  __ \\  || __ \\_/ __ \\     
 /        \\  \\___|  | \\/  || \\_\\ \\  ___/     
/_______  /\\___  >__|  |__||___  /\\___  >    
        \\/     \\/              \\/     \\/     
  ______   ______   ______   ______   ______ 
 /_____/  /_____/  /_____/  /_____/  /_____/ 

Hello there! This is Yuanchu Xie.

I have an offer to make:

As I am graduating in the class of 2017, Peiqi and Yaotian will be maintaining this project next year. If you are familiar with technologies, including, but not limited to, Spring, Kotlin, Javascript, and native mobile apps, please contact check@master.dummyc0m.com and include "[FROM CONSOLE]" in the subject line.
`)
