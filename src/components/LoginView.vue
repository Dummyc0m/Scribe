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
    <div class="desktop-adapt-flex desktop-adapt-flex-aligned desktop-adapt-flex-justified">
        <login-panel class="login-panel desktop-adapt-item desktop-adapt" @submit="onSubmit" :signingIn="signingIn" ref="login_panel"></login-panel>
    </div>
</template>

<script>
    import LoginPanel from './Login/LoginPanel'
    import api from '../api/auth'

    export default {
        components: {LoginPanel},
        data () {
            return {
                signingIn: false
            }
        },
        methods: {
            onSubmit ({valid, email, password, register}) {
                if (valid) {
                    const self = this
                    this.signingIn = true
                    if (register) {
                        api.register(email, password)
                            .then((response) => {
                                if (response.success) {
                                    self.$Message.success('Registration successful! Please check your inbox!')
                                    self.$refs['login_panel'].refresh()
                                } else {
                                    this.$Message.error(response.error)
                                }
                                self.signingIn = false
                            })
                            .catch((exception) => {
                                this.$Message.error(exception)
                                self.signingIn = false
                            })
                    } else {
                        this.$store.dispatch('authenticate', {email, password})
                            .then(() => {
                                self.$router.push({
                                    name: 'root'
                                })
                                self.$Message.success('Welcome back, ' + self.$store.getters.userToken.user.email.split('@')[0], 1)
                                self.signingIn = false
                            })
                            .catch((error) => {
                                self.$Message.error(error)
                                self.signingIn = false
                            })
                    }
                } else {
                    this.$Message.error('Please verify the inputs')
                }
            }
        }
    }
</script>

