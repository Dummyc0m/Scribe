<template>
    <div id="app">
        <layout>
            <nav-bar :username="name" slot="header" @select="onNavSelect"></nav-bar>
            <div class="desktop-adapt-item" slot="body">
                <transition name="opacity" mode="out-in">
                    <router-view></router-view>
                </transition>
                <!--<copyright></copyright>-->
            </div>
            <copyright slot="footer"></copyright>
        </layout>
    </div>
</template>

<script>
    import Layout from './components/App/Layout.vue'
    import NavBar from './components/App/NavBar.vue'
    import Copyright from './components/App/Copyright.vue'

    export default {
        name: 'app',
        components: { Layout, NavBar, Copyright },
        methods: {
            onNavSelect (selected) {
                this.$router.push({
                    name: selected
                })
            }
        },
        computed: {
            name () {
                const userToken = this.$store.getters.userToken
                return userToken ? userToken.user.email.split('@')[0] : undefined
            }
        }
    }
</script>

<style>
    #app {
        /*font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
        height: 100%;
    }
</style>

<style scoped>
    .opacity-enter-active, .opacity-leave-active {
        transition: opacity .2s ease;
    }
    .opacity-enter, .opacity-leave-to {
        opacity: 0;
    }
    .full-100 {
        height: 100%;
        width: 100%;
    }
</style>
