/**
* Created by dummy on 4/6/17.
 */



<style scoped>
    .layout {
        background: #f5f7f9;
        overflow-x: hidden;
        height: 100%;
        display: flex;
        flex-flow: column;
    }

    .footer {
        padding: 10px 0 10px;
        flex: 0 1 auto;
    }

    .body {
        background: #f5f7f9;
        flex: 1 1 auto;
        position: relative;
        overflow-y: auto;
    }

    .header {
        z-index: 100;
        flex: 0 0 auto;
    }

    .no-select {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
</style>

<style>
    html,
    body {
        height: 100%;
        margin: 0
    }
</style>

<template>
    <div class="layout no-select">
        <slot class="header" name="header"></slot>
        <slot class="body" name="body"></slot>
        <slot name="footer" class="footer"></slot>
    </div>
</template>

<script>
    export default {}
</script>

