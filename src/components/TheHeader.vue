<template>
    <div>
        <div class="header-bg">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <ul class="list-unstyled">
                            <li><i class="fa-solid fa-clock"></i> Open Hours: Mon - Sat - 9:00 - 18:00</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="d-flex justify-content-between list-unstyled">
                            <li><i class="fa-solid fa-phone"></i> {{getState.contacts.phoneNumber}}</li>
                            <li><i class="fa-solid fa-envelope"></i> {{getState.contacts.email}}</li>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="jumbotron">
            <div class="container h-100">
                <div class="row justify-content-between">
                    <div class="col col-2">
                        <ul class="list-unstyled">
                            <li>
                                <div class="logo">
                                    <img src="https://nexgen.codings.dev/wp-content/uploads/2021/03/logo.svg" alt="">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col col-6 d-flex justify-content-center align-items-center">
                        <ul class="list-unstyled d-flex justify-content-between align-items-center flex-grow-1 p-0">
                            <li v-for="li in getState.headerListItem" :key="li">{{li}}</li>
                            <li><i class="fa-regular fa-user"></i></li>
                            <li>
                                <div class="btn my-btn-1">Get in touch</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row text-center justify-content-center h-75 align-items-center">
                    <div class="col col-5">
                        <h1><strong>Financial Risk</strong></h1>
                        <p>The right outcomes depends on countinuos rigor in governance, models, and processes across the finance function</p>
                        <div class="btn my-btn-1">Get in touch</div>
                        <div class="btn my-btn-2">Read more</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {state} from '../store.js'

    export default {
        name: 'TheHeader',
        data() {
            return {
                
                }
            },
        computed: {
            getState() {
                return state.data;
    }
        },
        }
        


</script>

<style lang="scss" scoped>
    .header-bg {
        background-color: #21333E;
        color: #bcbdbd;
    }
    ul {
        margin: 0;
        padding: 0.8rem;
    }

    .jumbotron {
        color: #fff;
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../../public/images/bg-2.jpg");
        background-blend-mode: darken;
        background-size: cover;
        height: calc(100vh - 50px);
        
        li {
            text-transform: uppercase;

            &:hover {
                color: #058283;
            }
        }

        h1 {
            font-size: 4rem;
        }

        .logo {
            width: 100%;
            height: 100%;
        }

        .btn {
            margin: 0 .5rem;
        }

    }
</style>