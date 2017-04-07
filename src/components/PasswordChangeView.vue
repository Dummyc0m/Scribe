/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .change-panel {
        padding: 20px 20px 0 20px;
        text-align: center;
    }
</style>

<template>
    <password-change-panel class="change-panel"></password-change-panel>
</template>

<script>
    import PasswordChangePanel from './PasswordChange/PasswordChangePanel.vue'

    export default {
        components: { PasswordChangePanel }
    }
</script>

