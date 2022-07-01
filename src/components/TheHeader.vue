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
                            <li><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</li>
                            <li><i class="fa-solid fa-envelope"></i> hello@example.com</li>
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
                <div class="row">
                    <div class="col">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../../public/images/logo_48.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="list-unstyled d-flex justify-content-between">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Team</li>
                            <li>Blog</li>
                            <li><i class="fa-regular fa-user"></i></li>
                            <li>
                                <div class="btn btn-primary">Get in touch</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row text-center justify-content-center h-100 align-items-center">
                    <div class="col col-5">
                        <h1><strong>Financial Risk</strong></h1>
                        <p>The right outcomes depends on countinuos rigor in governance, models, and processes across the finance function</p>
                        <div class="btn btn-primary">Get in touch</div>
                        <div class="btn btn-primary">Read more</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheHeader',
        data() {
            return {
                
                }
            }
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
        background-image: url("../../public/images/bg-2.jpg");
        background-size: cover;
        height: calc(100vh - 50px);
        
        li {
            text-transform: uppercase;
        }

        .btn {
            margin: 0 .5rem;
        }

    }
</style>