/**
* Created by dummy on 4/4/17.
*/



<style scoped>
    .input {
        min-width: 250px;
    }

    .button {
        min-width: 200px;
    }

    .group {
        display: flex;
        flex-flow: row;
    }

    .register {
        flex: 1 2 auto;
    }

    .submit {
        flex: 2 1 auto;
    }
</style>

<template>
    <Form ref="form" :model="form" :rules="rule" @submit.prevent.native="handleSubmit('form')"
          @keyup.enter.native="handleSubmit('form')">
        <Form-item prop="email">
            <Input :disabled="signingIn" type="text" v-model="form.email" placeholder="Email" class="input">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input :disabled="signingIn" type="password" v-model="form.password" placeholder="Password" class="input">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <div class="group">
            <Form-item class="register">
                New User?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i-switch size="large" :disabled="signingIn" v-model="form.register">
                    <span slot="open">Yes</span>
                    <span slot="close">No</span>
                </i-switch>
                <!--<Checkbox :disabled="signingIn" v-model="form.register">Register</Checkbox>-->
            </Form-item>
            <Form-item class="submit">
                <Button htmlType="submit" type="primary" :loading="signingIn" class="button">
                    <span v-if="!signingIn">{{ form.register ? 'Register' : 'Sign In' }}</span>
                    <span v-else>{{ form.register ? 'Registering...' : 'Signing In...' }}</span>
                </Button>
            </Form-item>
        </div>
    </Form>
</template>

<script>
    export default {
        props: {
            signingIn: {
                required: true,
                type: Boolean
            }
        },
        data () {
            return {
                form: {
                    email: '',
                    password: '',
                    register: false
                },
                rule: {
                    email: [
                        {required: true, message: 'Please enter the email', trigger: 'blur'},
                        {
                            type: 'string',
                            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            message: 'Please verify the email address',
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {required: true, message: 'Please enter the password', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 8,
                            message: 'Please enter a password longer than 8 characters',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    this.$emit('submit', {
                        valid: valid,
                        email: this.form.email,
                        password: this.form.password,
                        register: this.form.register
                    })
                })
            },
            refresh () {
                this.form = {
                    email: '',
                    password: '',
                    register: false
                }
            }
        }
    }
</script>

