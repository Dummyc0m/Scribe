/**
* Created by dummy on 4/4/17.
 */




<style scoped>
    .login-panel {
        padding: 10px 10px 0 10px;
        text-align: center;
    }
</style>

<template>
    <login-panel class="login-panel" @submit="onSubmit"></login-panel>
</template>

<script>
    import LoginPanel from './login/LoginPanel'
    import api from '../api/auth'

    export default {
        components: {LoginPanel},
        methods: {
            onSubmit ({valid, email, password, register}) {
                if (valid) {
                    const self = this
                    if (register) {
                        api.register(email, password)
                            .then((response) => {
                                if (response.success) {
                                    self.$Message.success('Registration successful! Please check your inbox!')
                                } else {
                                    this.$Message.error('Unknown Error ' + response.error)
                                }
                            }).catch((exception) => {
                                this.$Message.error('Unknown Error ' + exception)
                            })
                    } else {
                        this.$store.dispatch('authenticate', {email, password}).then(() => {
                            self.$Message.success('Welcome back, ' + self.$store.getters.userToken.user.email.split('@')[0], 1, () => {
                                self.$router.push({
                                    name: 'root'
                                })
                            })
                        }).catch((error) => {
                            self.$Message.error('Unknown Error ' + error)
                        })
                    }
                } else {
                    this.$Message.error('Please verify the inputs')
                }
            }
        }
    }
</script>

