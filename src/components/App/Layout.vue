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
        flex: 0 0 auto;
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

    .content {
        background: #f5f7f9;
        flex: 1 1 auto;
        position: relative;
        overflow-y: auto;
    }
</style>

<style>
    .desktop-adapt {
        max-width: 400px;
    }

    .desktop-adapt-flex {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .desktop-adapt-flex-vert {
        flex-flow: column;
    }

    .desktop-adapt-item {
        flex: 1 1 auto;
    }

    .desktop-adapt-fixed {
        flex: 0 0 auto;
    }

    .desktop-adapt-flex-aligned {
        align-items: center;
    }

    .desktop-adapt-flex-justified {
        justify-content: center;
    }

    .desktop-adapt-full-width {
        width: 100%;
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
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="content desktop-adapt-flex">
            <slot name="body"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

