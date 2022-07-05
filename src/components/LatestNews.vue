<template>
    <div class="latest-news-section">
        <div class="container">
            <p class="introduction-text">our editorial content</p>
            <div class="row">
                <h2>Latest <span class="marker-effect-light">News</span></h2>
                <div class="d-flex justify-content-between">
                    <p>Every week we publish content about what is best in the business world.</p>
                    <div class="btn my-btn-1">SEE ALL</div>
                </div>
            </div>
            <div class="row row-cols-3 justify-content-center my-5">
                <div class="col">
                    <div class="my-card-1 position-relative"><h4 class="my-card-text">Increasing creativity is possible for everyone</h4></div>
                </div>
                <div class="col">
                    <div class="my-card-2 position-relative"><h4 class="my-card-text">Because market research is part of the business plan</h4></div>
                </div>
                <div class="col">
                    <div class="my-card-3 position-relative"><h4 class="my-card-text">Working from home is now a trend</h4></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }

</script>

<style lang="scss" scoped>
    .latest-news-section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #EEF4ED;

        p {
            margin: 0;
            align-items: center;
        }

        .my-card-1 {
            background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../../public/images/news-1.jpg');
            background-position: center;
            background-size: contain;
            height: 306px;
            border-radius: 10px;
        }        

        .my-card-2 {
            background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../../public/images/news-2.jpg');
            background-position: center;
            background-size: contain;
            height: 306px;
            border-radius: 10px;

        }        
        .my-card-3 {
            background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../../public/images/news-3.jpg');
            background-position: center;
            background-size: contain;
            height: 306px;
            border-radius: 10px;
        }
        .my-card-text {
                position: absolute;
                bottom: 20px;
                text-align: center;
                color: #fff;
                font-weight: 500;
                padding: 1rem;
        }
    }

</style>