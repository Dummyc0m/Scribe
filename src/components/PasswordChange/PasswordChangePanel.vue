/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .input {
        min-width: 300px;
    }
    .button {
        min-width: 200px;
    }
</style>

<template>
    <Form ref="form" :model="form" :rules="rule" inline>
        <Form-item prop="password">
            <Input type="password" v-model="form.password" placeholder="Password" class="input">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('form')" class="button">Change</Button>
        </Form-item>
    </Form>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    user: '',
                    password: '',
                    register: false
                },
                rule: {
                    password: [
                        {required: true, message: 'Please enter the password', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 8,
                            message: 'Required, minimum of 8 characters',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success')
                    } else {
                        this.$Message.error('Failure')
                    }
                })
            }
        }
    }
</script>

