<template>
    <div class="form-section">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="introduction-text">send a message</p>
                    <h2>Get in <span class="marker-effect-light">Touch</span></h2>
                    <p>We will respond to you as soon as possible.</p>
                    <div class="row align-items-center">
                        <div class="col col-6">
                            <input type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="col col-6">
                            <input type="text" class="form-control" placeholder="Email">
                        </div>
                        <div class="col col-6">
                            <input type="text" class="form-control" placeholder="Phone">
                        </div>
                        <div class="col col-6">
                            <input type="text" class="form-control " placeholder="More info">
                        </div>
                        <div class="col col-12">
                            <textarea class="form-control" aria-label="With textarea" placeholder="Message"></textarea>
                        </div>
                        <div class="col">
                            <div class="btn my-btn-1 mt-3">SEND</div>
                        </div>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="p-2 d-flex flex-column justify-content-between">
                        <h4>Example Inc.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Present diam lacus, dapibus sed imperdiet consecteur.</p>
                        <div class="contacts">
                            <div><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</div>
                            <div><i class="fa-solid fa-envelope"></i> hello@example.com</div>
                            <div><i class="fa-solid fa-location-dot"></i> Main Avenue, 987</div>
                            <div class="btn my-btn-3 mt-2">view map</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheForm',

    }
</script>

<style lang="scss" scoped>
    .form-section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
            i {
                padding: .8rem;
                font-size: 1.2rem;
                background-color: #DAECED;
                color: #058283;
                border-radius: 50%;
                margin: 0.5rem;
            }
            input, textarea {
                margin: 5px;
                padding: 1rem;
                background-color: #ECECEC;
                border: none;
        }
        
        
    }
</style>