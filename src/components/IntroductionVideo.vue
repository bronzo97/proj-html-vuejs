<template>
    <div class="video-section">
        <div class="container">
            <div class="row text-center justify-content-center align-items-center">
                <div class="col col-5 text-center">
                    <p>introduction video</p>
                    <h2>Advisory Preformance</h2>
                    <p>Financial executives need to review their strategies, operating models and capabilities so that their areas can generate sound informations for better decision making.</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="video-img">
                        <div class="play"><i class="fa-solid fa-play"></i></div>
                        <div class="play"><i class="fa-solid fa-play"></i></div>
                    </div>
                </div>
            </div>        
                
            
        </div>

    </div>
</template>

<script>
    export default {
        name: 'IntroductionVideo',
    }
</script>

<style lang="scss" scoped>

.video-section {


    .video-img {
        width: 1000px;
        height: 400px;
        background-image: url('../../public/images/video-1.jpg');
        background-position: center;
        background-size: cover;

    }
}
    
</style>