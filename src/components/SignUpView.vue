/**
* Created by dummy on 4/10/17.
 */


<style scoped>
    .sign-up {
        padding: 10px;
    }
</style>

<template>
    <sign-up-sheet :sheet="sheet" @submit="onSubmit" class="sign-up"></sign-up-sheet>
</template>

<script>
    import SignUpSheet from './SignUp/SignUpSheet.vue'
    import {mapActions, mapGetters} from 'vuex'
    import {EMPTY_SIGN_UP_SHEET} from '../models/sign_up'

    export default {
        components: {SignUpSheet},
        data () {
            return {
                id: -1
            }
        },
        computed: {
            sheet () {
                const self = this
                const sheet = this.openSignUpSheets.find((element) => element.id === self.id)
                return sheet || EMPTY_SIGN_UP_SHEET
            },
            ...mapGetters([
                'openSignUpSheets'
            ])
        },
        methods: {
            ...mapActions([
                'refreshOpenSignUpSheets'
            ]),
            onSubmit (result) {
                const self = this
                this.$Message.success('Saved', 4, () => {
                    self.$Message.success('You may change it before the deadline', 4)
                })
                console.log(JSON.stringify(result.form))
                this.$router.push({
                    name: 'root'
                })
            }
        },
        created () {
            this.id = Number(this.$route.params.id)
            this.refreshOpenSignUpSheets()
        }
    }
</script>

