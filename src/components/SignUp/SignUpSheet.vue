/**
* Created by dummy on 4/10/17.
 */



<style scoped>
    .card {
        margin: 10px;
    }
    .center-align {
        text-align: center;
    }
    .submit-button {
        min-width: 50%;
    }
    .full-width {
        width: 100%;
    }
</style>

<template>
    <div class="no-select">
        <h2 class="card">{{ sheet.name }}</h2>
        <Form ref="form" :model="form" :rules="rules">
            <Card class="card" :bordered="false" v-for="group in sheet.eventGroups" :key="group.id">
                <p slot="title">{{ group.name }}</p>
                <Form-item :prop="String(group.id)">
                    <Radio-group :value="form[group.id]" @input="handleInput(group.id, $event)">
                        <Radio class="full-width" v-for="event in group.events" :key="event.id" :label="event.id">{{ event.name }}</Radio>
                        <Radio label="-1">None</Radio>
                    </Radio-group>
                </Form-item>
            </Card>
            <Form-item class="card center-align">
                <Button class="submit-button" type="primary" @click="handleSubmit('form')">Save</Button>
            </Form-item>
        </Form>
    </div>
</template>

<script>
    import {
        EMPTY_SIGN_UP_SHEET,
        EMPTY_SIGN_UP_SHEET_INSTANCE,
        SignUpSheet,
        SignUpSheetInstance
    } from '../../models/sign_up'

    export default {
        props: {
            sheet: {
                type: SignUpSheet,
                default () { return EMPTY_SIGN_UP_SHEET }
            },
            sheetInstance: {
                type: SignUpSheetInstance,
                default () { return EMPTY_SIGN_UP_SHEET_INSTANCE }
            }
        },
        data () {
            return {
                form: this.sheetInstance.form,
                rules: this.sheetInstance.rules
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    // note the invalid one has -1
                    this.$emit('submit', { valid, form: this.form })
                })
            },
            handleInput (id, event) {
                this.$store.dispatch('setCurrentSignUpSheetFormValue', { id, event })
            }
        },
        watch: {
            sheetInstance (val) {
                if (val) {
                    this.form = val.form
                    this.rules = val.rules
                }
            }
        }
    }
</script>

