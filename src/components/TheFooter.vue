<template>
    <div>
        <footer>
        <div class="footer-bg">
            <div class="container">
                <div class="row row-cols-4 row-cols-lg-5 justify-content-center">
                    <div class="col">                    
                        <ul class="list-unstyled">
                            <li><img src="../../public/images/logo_48.png" alt=""></li>
                            <li><p>A funtional HTML Template for corporate & business.</p></li>
                            <li><i class="fa-solid fa-phone"></i> {{getState.contacts.phoneNumber}}</li>
                            <li><i class="fa-solid fa-envelope"></i> {{getState.contacts.email}}</li>
                            <li><i class="fa-solid fa-location-dot"></i> {{getState.contacts.location}}</li>
                            <li class="mt-4"><div class="btn my-btn-2">Get in touch</div></li>
                        </ul>                    
                    </div>
                    <div class="col">
                        <div class="card">
                            <h5>About</h5>
                            <ul class="list-unstyled">
                                <li v-for="li in getState.footerListItems.about" :key="li"><i class="fa-solid fa-angle-right"></i>{{li}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h5>Services</h5>
                            <ul class="list-unstyled">
                                <li v-for="li in getState.footerListItems.services" :key="li"><i class="fa-solid fa-angle-right"></i>{{li}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h5>Support</h5>
                            <ul class="list-unstyled">
                                <li v-for="li in getState.footerListItems.support" :key="li"><i class="fa-solid fa-angle-right"></i>{{li}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-credits">
            <div class="container">
                <div class="row footer-credits">
                    <div class="col">
                        <div>Enjoy the low price. We are tracking any intention of piracy</div>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <div><i class="fa-regular fa-copyright"></i> 2020 NEXGEN is Proudly Powered by <span class="codings-color">Codings</span>.</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
    import {state} from '../store.js'

    export default {
        name: 'TheFooter',
    
        computed: {
            getState() {
                return state.data;
            },
    
        }

    }

    

</script>

<style lang="scss" scoped>
    footer {
        .footer-bg{
        background-image: url('../../public/images/bg-7.jpg');
        background-position: center;
        height: 100%;
        background-size: cover;
        padding: 100px 0;
        color: #fff;


        i {
            margin: 0.5rem;
        }

        h5 {
            padding: 0.4rem;
        }
        }

        .card {
            background-color: #4e4f5244;
            
            color: #e7eee9;
            padding: 1rem;
            
            li {
                margin: 0 0.3rem;
            }
        }
    .footer-credits {
        background-color: #050A0D;
        padding: 1rem;
        color: #e7eee9;
        font-size: 0.8rem;
        
        .codings-color {
        color: #048383
    }
    }
    
    }

</style>