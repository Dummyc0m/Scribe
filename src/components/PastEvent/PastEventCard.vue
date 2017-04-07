/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .li {
        padding: 10px;
    }
</style>

<template>
    <Card :bordered="false">
        <p slot="title">{{ format(record.time) }}</p>
        <p class="li" v-for="event in record.events" :key="event.id">{{ event.name }}</p>
    </Card>
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            record: {
                type: Object,
                required: true
            }
        },
        methods: {
            format (time) {
                return moment.unix(time).format('ddd MMM Do YYYY, h:mm a')
            }
        }
    }
</script>

