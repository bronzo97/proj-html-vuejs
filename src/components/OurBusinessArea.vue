<template>
    <div class="our-business-area-section">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="introduction-text">Our business area</p>
                    <h2>Excellence in <span class="marker-effect-dark">Service</span></h2>
                </div>
            </div>
            <div class="row">
                <div class="col col-8 d-flex">
                    <p>we are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and ronowned professionals. These are somo options that you can hire.</p>
                </div>  
                <div class="col col-4 text-end">  
                    <div class="btn my-btn-2">See all</div>                    
                </div>
            </div>
            <div class="row row-cols-6">
                <div class="col col-4">
                    <div class="card">
                        <div class="my-card-header"><i class="fa-solid fa-network-wired"></i><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Audit & Assurance</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="card">
                        <div class="my-card-header"><i class="fa-solid fa-briefcase"></i><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Financial Advisor</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="card">
                        <div class="my-card-header"><i class="fa-solid fa-chart-simple"></i><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Analytics and M&A</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="card">
                        <div class="my-card-header"><i class="fa-solid fa-plane"></i><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Middle Marketing</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="card">
                        <div class="my-card-header"><i class="fa-solid fa-earth-europe"></i><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Legal Consulting</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="card">
                        <div class="my-card-header"><i class="fa-solid fa-box-archive"></i><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Regulatory Risk</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurBusinessArea',
    }
</script>

<style lang="scss" scoped>
    .our-business-area-section {
        background-color: #111116;
        color: #fff;
        padding: 150px;
        
        .my-card-header {
            padding: 1rem 1rem 0 1rem;
            display: flex;
            justify-content: space-between;
            
        }

        .card {
            padding: 2rem;
            margin: .5rem 0;
            background-color: #191920;

        }

        i{
            color: #058283;
        }

        i:first-child {
            font-size: 2rem;
        }
        i:last-child {
            font-size: 1.5rem;
        }
    }
</style>
