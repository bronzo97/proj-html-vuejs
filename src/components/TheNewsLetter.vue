<template>
    <div class="news-letter-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col col-4">
                    <p class="introduction-text">Newsletter</p>
                    <h2><span class="marker-effect-dark">Know</span> First</h2>
                    <p>Follow closely and receive content about our company and the news of the current marker.</p>
                </div>
                <div class="col col-4">
                    <input type="text" class="form-control" placeholder="Name">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                    <div class="btn my-btn-1 m-2">SUBSCRIBE</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheNewsLetter',

    }
</script>

<style lang="scss" scoped>
    .news-letter-section {
        background-color: #111116;
        color: #fff;
        padding: 120px 0;

        input {
            background-color: #1D1D23;
            border: 0;
            margin: 1rem 0;
            padding: .8rem 2rem;
        }
    }
</style>