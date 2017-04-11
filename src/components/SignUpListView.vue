/**
* Created by dummy on 4/10/17.
 */

<style scoped>
    .sign-up-list {
        padding: 10px;
    }
</style>

<template>
    <sign-up-list :sheet="openSignUpSheets" @click="onClick" class="sign-up-list"></sign-up-list>
</template>

<script>
    import SignUpList from './SignUp/SignUpList.vue'
    import {mapGetters} from 'vuex'
    export default {
        components: { SignUpList },
        computed: {
            ...mapGetters([
                'openSignUpSheets'
            ])
        },
        methods: {
            onClick (sheet) {
                this.$router.push({
                    name: 'sign_up',
                    params: {
                        id: sheet.id
                    }
                })
            }
        },
        created () {
            this.$store.dispatch('refreshOpenSignUpSheets')
        }
    }
</script>

