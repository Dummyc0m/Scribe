/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .time-line {
        padding: 20px 20px 0 20px;
    }
</style>

<template>
    <div>
        <sign-up-notify v-if="signUpOpen"></sign-up-notify>
        <event-timeline class="time-line" :timeline="timeline"></event-timeline>
    </div>
</template>

<script>
    import EventTimeline from './Root/EventTimeline.vue'
    import SignUpNotify from './Root/SignUpNotify.vue'
    import moment from 'moment'

    export default {
        components: { EventTimeline, SignUpNotify },
        data () {
            return {
                signUpOpen: true,
                timeline: [
                    {
                        id: 1,
                        time: moment().format('X'),
                        title: 'the first event',
                        description: 'some description lies here'
                    },
                    {
                        id: 2,
                        time: moment().format('X'),
                        title: 'the second event',
                        description: 'some description lies here'
                    },
                    {
                        id: 3,
                        time: moment().format('X'),
                        title: 'the third event',
                        description: 'some description lies here'
                    },
                    {
                        id: 4,
                        time: moment().format('X'),
                        title: 'the fourth event',
                        description: 'some description lies here'
                    },
                    {
                        id: 5,
                        time: moment().format('X'),
                        title: 'the fifth event',
                        description: 'some description lies here'
                    }
                ]
            }
        }
    }
</script>

