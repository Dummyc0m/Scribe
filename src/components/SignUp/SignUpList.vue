/**
* Created by dummy on 4/10/17.
 */

<style scoped>

</style>

<template>
    <div>
        <Table :columns="column" :data="sheet" :showHeader="false" highlight-row @on-row-click="onClick" no-data-text="No Sheets Available"></Table>
    </div>
</template>

<script>
    export default {
        props: {
            sheet: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                column: [
                    {
                        title: 'Sheet Name',
                        key: 'name'
                    }
                ]
            }
        },
        methods: {
            onClick (sheet) {
                this.$emit('click', sheet)
            }
        }
    }
</script>

