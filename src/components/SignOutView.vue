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
    <div class="panel">
        <h2>You have signed out.</h2>
        <h2>Now returning to the timeline</h2>
    </div>
</template>

<script>
    export default {
        created () {
            const self = this
            window.setTimeout(() => {
                self.$router.push({
                    name: 'root'
                })
            }, 2000)
        }
    }
</script>

