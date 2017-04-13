/**
* Created by dummy on 4/6/17.
*/

<style scoped>
    .event-panel {
        padding: 10px 10px 0 10px;
    }
</style>

<template>
    <div class="desktop-adapt-flex desktop-adapt-flex-justified">
        <past-event-panel class="event-panel desktop-adapt-item desktop-adapt" :records="records"></past-event-panel>
    </div>
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

