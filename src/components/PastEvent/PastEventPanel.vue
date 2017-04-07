/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .card {
        margin: 10px;
    }
</style>

<template>
    <div>
        <past-event-card v-for="rec in records" :key="rec.id" :record="rec" class="card"></past-event-card>
    </div>
</template>

<script>
    import PastEventCard from './PastEventCard.vue'

    export default {
        props: {
            records: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {
            PastEventCard
        }
    }
</script>

