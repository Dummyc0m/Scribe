/**
* Created by dummy on 4/12/17.
*/

<style scoped>
    .panel {
        text-align: center;
        padding: 50px;
    }
</style>

<template>
    <div class="panel">
        <h2>{{ statusInfo }}</h2>
    </div>
</template>

<script>
    /**
     * Landing page for email links
     */
    export default {
        data () {
            return {
                statusInfo: 'Authenticating...'
            }
        },
        created () {
            if (this.$route.query['token']) {
                const self = this
                this.$store.dispatch('authenticateWithToken', {
                    tokenString: this.$route.query['token']
                })
                    .then(() => {
                        self.$router.push({
                            name: 'sign_up_list'
                        })
                    })
                    .catch((error) => {
                        console.error(error)
                        self.statusInfo = error
                    })
            } else {
                this.statusInfo = 'Token does not exist'
            }
        }
    }
</script>

