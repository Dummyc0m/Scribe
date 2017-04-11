/**
* Created by dummy on 4/6/17.
 */

<style scoped>
    .navbar-logo {
        /*width: 100px;*/
        /*height: 30px;*/
        background: #353e4e;
        /*border-radius: 3px;*/
        /*position: relative;*/
        /*top: 15px;*/
        /*left: 20px;*/
    }

    .navbar-nav {
        float: right;
        margin-right: 35px;
    }

    .full-screen-mask {
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1 !important;
    }
</style>

<template>
    <div>
        <Menu mode="horizontal" :active-name="activeName" :opened="opened" theme="dark" @on-select="selected"
              @on-open-change="onOpenChange" @click.native="clicked">
            <Menu-item name="root" class="navbar-logo">
                Scribe

            </Menu-item>
            <div class="navbar-nav">
                <Submenu ref="submenu" name="2" v-if="username">
                    <template slot="title">
                        <!--<Icon type="ios-person"></Icon>-->
                        {{ username }}

                    </template>
                    <Menu-item name="root">Timeline</Menu-item>
                    <Menu-item name="past">Past Sign-Ups</Menu-item>
                    <Menu-group title="Settings">
                        <Menu-item name="change_pass">Change Password</Menu-item>
                        <Menu-item name="sign_out">Sign Out</Menu-item>
                    </Menu-group>
                </Submenu>
                <Menu-item name="login" v-else>
                    Sign In/Register

                </Menu-item>
            </div>
        </Menu>
        <div class="full-screen-mask" v-show="subMenuOpen" @click="clicked">

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeName: 'root',
                opened: [],
                subMenuOpen: false
            }
        },
        props: {
            username: {
                type: String
            }
        },
        methods: {
            selected (key) {
                this.$emit('select', key)
                this.activeName = key
            },
            onOpenChange (array) {
                this.opened = array
                if (array.length === 0) {
                    this.subMenuOpen = false
                }
            },
            clicked () {
                if (this.$refs.submenu.opened) {
                    this.$nextTick(() => {
                        this.$refs.submenu.handleMouseleave()
                        this.subMenuOpen = false
                    })
                } else {
                    this.$nextTick(() => {
                        this.$refs.submenu.handleMouseenter()
                        this.subMenuOpen = true
                    })
                }
            }
        }
    }
</script>

