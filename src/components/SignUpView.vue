/**
* Created by dummy on 4/10/17.
 */


<style scoped>
    .sign-up {
        padding: 10px;
    }
</style>

<template>
    <div class="desktop-adapt-flex desktop-adapt-flex-justified">
        <sign-up-sheet :sheetInstance="currentSheetInstance" :sheet="currentSheet" @submit="onSubmit" class="sign-up desktop-adapt desktop-adapt-item"></sign-up-sheet>
    </div>
</template>

<script>
    import SignUpSheet from './SignUp/SignUpSheet.vue'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        components: {SignUpSheet},
        data () {
            return {
                id: -1
            }
        },
        computed: {
            ...mapGetters([
                'currentSheetInstance',
                'currentSheet'
            ])
        },
        methods: {
            ...mapActions([
                'submitCurrentSignUpSheetInstance',
                'clearCurrentSignUpSheetInstance'
            ]),
            refreshCurrentSignUpSheet (id) {
                this.$store.dispatch('refreshCurrentSignUpSheet', { id })
            },
            onSubmit (result) {
                if (result.valid) {
                    const self = this
                    this.submitCurrentSignUpSheetInstance().then(() => {
                        self.clearCurrentSignUpSheetInstance().then(() => {
                            self.$Message.success('Saved', 2, () => {
                                self.$Message.success('You may change it before the deadline', 3)
                            })
                            self.$router.push({
                                name: 'root'
                            })
                        })
                    })
                } else {
                    this.$Message.error('Please complete the sheet')
                }
            }
        },
        created () {
            this.id = Number(this.$route.params.id)
            this.refreshCurrentSignUpSheet(this.id)
        }
    }
</script>

