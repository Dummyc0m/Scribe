/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .event-panel {
        padding: 20px 20px 0 20px;
    }
</style>

<template>
    <past-event-panel class="event-panel" :records="records"></past-event-panel>
</template>

<script>
    import PastEventPanel from './PastEvent/PastEventPanel.vue'
    import moment from 'moment'

    export default {
        components: {
            PastEventPanel
        },
        data () {
            return {
                records: [
                    {
                        id: 0,
                        time: moment().format('X'),
                        events: [
                            {
                                id: 0,
                                name: 'walmart'
                            }
                        ]
                    },
                    {
                        id: 1,
                        time: moment().format('X'),
                        events: [
                            {
                                id: 0,
                                name: 'simsbury'
                            },
                            {
                                id: 1,
                                name: 'movies'
                            },
                            {
                                id: 2,
                                name: 'mall'
                            }
                        ]
                    },
                    {
                        id: 2,
                        time: moment().format('X'),
                        events: [
                            {
                                id: 0,
                                name: 'canton'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

