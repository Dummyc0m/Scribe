/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .time-line {
        padding: 0 10px 0 10px;
    }
    .button {
        min-width: 200px;
    }
    .margin {
        margin-top: 10px;
    }
    .center {
        text-align: center;
        width: 100%;
    }
</style>

<template>
    <div class="desktop-adapt-flex desktop-adapt-flex-aligned desktop-adapt-flex-vert">
        <sign-up-notify class="desktop-adapt-fixed desktop-adapt-full-width" v-if="!teapot && openSignUpSheets.length !== 0" @click.native="onSignUpNotifyClick"></sign-up-notify>
        <div class="desktop-adapt desktop-adapt-item desktop-adapt-full-width">
            <div class="center margin">
                <Button v-if="!currentPage.first" type="primary" :loading="eventLoading" @click="prev" class="button">
                    <span v-if="!eventLoading">Previous Page</span>
                    <span v-else>Loading...</span>
                </Button>
            </div>
            <event-timeline class="time-line margin" :timeline="currentPage.events"></event-timeline>
            <div class="center margin">
                <Button v-if="!currentPage.last" type="primary" :loading="eventLoading" @click="next" class="button">
                    <span v-if="!eventLoading">Next Page</span>
                    <span v-else>Loading...</span>
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
    import EventTimeline from './Root/EventTimeline.vue'
    import SignUpNotify from './Root/SignUpNotify.vue'
//    import moment from 'moment'
    import { mapGetters } from 'vuex'

    export default {
        components: { EventTimeline, SignUpNotify },
        data () {
            return {
                // ,
//                timeline: [
//                    {
//                        id: 1,
//                        time: moment().format('X'),
//                        title: 'the first event',
//                        description: 'some description lies here'
//                    },
//                    {
//                        id: 2,
//                        time: moment().format('X'),
//                        title: 'the second event',
//                        description: 'some description lies here'
//                    },
//                    {
//                        id: 3,
//                        time: moment().format('X'),
//                        title: 'the third event',
//                        description: 'some description lies here'
//                    },
//                    {
//                        id: 4,
//                        time: moment().format('X'),
//                        title: 'the fourth event',
//                        description: 'some description lies here'
//                    },
//                    {
//                        id: 5,
//                        time: moment().format('X'),
//                        title: 'the fifth event',
//                        description: 'some description lies here'
//                    }
//                ]
            }
        },
        methods: {
            async updateEvents (page) {
                await this.$store.dispatch('refreshEventPage', { page, size: 8 })
                if (this.$store.getters.authenticated) {
                    await this.$store.dispatch('refreshOpenSignUpSheets')
                }
            },
            prev () {
                this.$router.push({
                    name: 'timeline',
                    params: {
                        page: this.currentPage.first ? 0 : (this.page - 1)
                    }
                })
            },
            next () {
                this.$router.push({
                    name: 'timeline',
                    params: {
                        page: this.currentPage.last ? this.page : (this.page + 1)
                    }
                })
            },
            onSignUpNotifyClick () {
                this.$router.push({
                    name: 'sign_up_list'
                })
            }
        },
        computed: {
            ...mapGetters([
                'currentPage',
                'eventLoading',
                'openSignUpSheets',
                'teapot'
            ]),
            page () {
                return Number(this.$route.params.page)
            }
        },
        created () {
            this.updateEvents(this.page)
        },
        watch: {
            '$route': function (val) {
                this.updateEvents(val.params.page)
            }
        }
    }
</script>

