/**
* Created by dummy on 4/4/17.
*/

<style scoped>
    .input {
        min-width: 300px;
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
    <Form ref="form" :model="form" :rules="rule">
        <Form-item prop="email">
            <Input type="text" v-model="form.email" placeholder="Email" class="input">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="form.password" placeholder="Password" class="input">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <div class="group">
            <Form-item class="register">
                <Checkbox v-model="form.register">Register</Checkbox>
            </Form-item>
            <Form-item class="submit">
                <Button type="primary" @click="handleSubmit('form')" class="button">{{ form.register ? 'Register' : 'Sign In' }}</Button>
            </Form-item>
        </div>
    </Form>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    email: '',
                    password: '',
                    register: false
                },
                rule: {
                    email: [
                        { required: true, message: 'Please enter the email', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please enter the password', trigger: 'blur' },
                        { type: 'string', min: 8, message: 'The password has to be at least 8 characters long', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    this.$emit('submit', { valid: valid, email: this.form.email, password: this.form.password, register: this.form.register })
                })
            }
        }
    }
</script>

