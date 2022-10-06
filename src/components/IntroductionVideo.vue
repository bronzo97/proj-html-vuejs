<template>
    <div class="video-section">
        <div class="container">
            <div class="row text-center justify-content-center align-items-center">
                <div class="col col-8 text-center">
                    <p class="introduction-text">introduction video</p>
                    <h2><strong>Advisory <span class="marker-effect-light">Preformance</span></strong></h2>
                    <p>Financial executives need to review their strategies, operating models and capabilities so that their areas can generate sound informations for better decision making.</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="video-img">
                        <div class="play-1"><i class="fa-solid fa-play"></i></div>
                        <div class="play-2"><i class="fa-solid fa-play"></i></div>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .video-img {
        width: 1000px;
        height: 400px;
        background-image: url('../../public/images/video-1.jpg');
        background-position: center;
        background-size: cover;
        margin: 0 auto;
        position: relative;

        .play-1 {
            position: absolute;
            top: 50%;
            left: 50%;
            color: #e7eee9;
            opacity: 0.8;
            z-index: 1;
            font-size: 5rem;
            transform: translate(-50%, -50%);
        }
        .play-2 {
            position: absolute;
            top: 48%;
            left: 50%;
            color: #048383;
            opacity: 0.8;
            font-size: 5rem;
            transform: translate(-50%, -50%);
        }
    }
}
    
</style>