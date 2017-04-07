/**
* Created by dummy on 4/4/17.
 */

<style scoped>
    .login-panel {
        padding: 20px 20px 0 20px;
        text-align: center;
    }
</style>

<template>
    <login-panel class="login-panel"></login-panel>
</template>

<script>
    import LoginPanel from './login/LoginPanel'

    export default {
        components: { LoginPanel }
    }
</script>

