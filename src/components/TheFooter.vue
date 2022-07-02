<template>
    <div>
        <footer>
        <div class="footer-bg">
            <div class="container">
                <div class="row row-cols-4 row-cols-lg-5 justify-content-center">
                    <div class="col">                    
                        <ul class="list-unstyled">
                            <li><img src="" alt=""></li>
                            <li><p>A funtional HTML Template for corporate & business.</p></li>
                            <li><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</li>
                            <li><i class="fa-solid fa-envelope"></i> hello@example.com</li>
                            <li><i class="fa-solid fa-location-dot"></i> Main Avenue, 987</li>
                            <li class="text-center mt-4"><div class="btn btn-primary">Get in touch</div></li>
                        </ul>                    
                    </div>
                    <div class="col">
                        <div class="card">
                            <h5>About</h5>
                            <ul class="list-unstyled">
                                <li><i class="fa-solid fa-angle-right"></i>The Company</li>
                                <li><i class="fa-solid fa-angle-right"></i>Institutional</li>
                                <li><i class="fa-solid fa-angle-right"></i>Social & Events</li>
                                <li><i class="fa-solid fa-angle-right"></i>Innovation</li>
                                <li><i class="fa-solid fa-angle-right"></i>Environment</li>
                                <li><i class="fa-solid fa-angle-right"></i>Technology</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h5>Services</h5>
                            <ul class="list-unstyled">
                                <li><i class="fa-solid fa-angle-right"></i>Audit & Assurance</li>
                                <li><i class="fa-solid fa-angle-right"></i>Financial Advisory</li>
                                <li><i class="fa-solid fa-angle-right"></i>Analytics M&A</li>
                                <li><i class="fa-solid fa-angle-right"></i>Middle Marketing</li>
                                <li><i class="fa-solid fa-angle-right"></i>Legal Consulting</li>
                                <li><i class="fa-solid fa-angle-right"></i>Regulatory Risk</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h5>Support</h5>
                            <ul class="list-unstyled">
                                <li><i class="fa-solid fa-angle-right"></i>Responsibility</li>
                                <li><i class="fa-solid fa-angle-right"></i>Terms of Use</li>
                                <li><i class="fa-solid fa-angle-right"></i>About Cookies</li>
                                <li><i class="fa-solid fa-angle-right"></i>Privacy Policy</li>
                                <li><i class="fa-solid fa-angle-right"></i>Accessibility</li>
                                <li><i class="fa-solid fa-angle-right"></i>Information</li>
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
    export default {
        name: 'TheFooter',
        
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