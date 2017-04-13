/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .panel {
        text-align: center;
        padding: 50px;
    }
</style>

<template>
    <div class="panel desktop-adapt-flex desktop-adapt-flex-aligned desktop-adapt-flex-justified">
        <div class="desktop-adapt-item desktop-adapt">
            <h2>You have been signed out</h2>
            <h2>Returning to the timeline...</h2>
        </div>
    </div>
</template>

<script>
    export default {
        created () {
            const self = this
            this.$store.dispatch('signOut').then(() => {
                window.setTimeout(() => {
                    self.$router.push({
                        name: 'root'
                    })
                }, 1000)
            })
        }
    }
</script>

