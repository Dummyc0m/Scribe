/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .change-panel {
        padding: 10px 10px 0 10px;
        text-align: center;
    }
</style>

<template>
    <div class="desktop-adapt-flex desktop-adapt-flex-aligned desktop-adapt-flex-justified">
        <password-change-panel class="change-panel desktop-adapt-item desktop-adapt"></password-change-panel>
    </div>
</template>

<script>
    import PasswordChangePanel from './PasswordChange/PasswordChangePanel.vue'

    export default {
        components: { PasswordChangePanel }
    }
</script>

