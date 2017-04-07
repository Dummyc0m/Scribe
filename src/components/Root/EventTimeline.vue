/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .time {
        font-size: 14px;
        font-weight: bold;
    }
</style>

<template>
    <Timeline>
        <Timeline-item v-for="item in timeline" :key="item.id">
            <p class="time">{{ format(item.time) }}</p>
            <Card :bordered="false">
                <p slot="title">{{ item.title }}</p>
                <p>{{ item.description }}</p>
            </Card>
        </Timeline-item>
    </Timeline>
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            timeline: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        methods: {
            format (time) {
                return moment.unix(time).format('ddd MMM Do YYYY, h:mm a')
            }
        }
    }
</script>

