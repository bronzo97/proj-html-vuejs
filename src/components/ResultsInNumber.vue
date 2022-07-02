<template>
    <div class="background-results">
        <div class="container">
            <div class="row text-center bottom-spacing">
                <div class="col">
                    <p>what are we doing</p>
                    <h2>Results in Numbers</h2>
                </div>
            </div>
            <div class="row row-cols-4 text-center">
                <div class="col">
                    <h3>128</h3>
                    <h4>Certification</h4>
                </div>
                <div class="col">
                    <h3>230</h3>
                    <h4>Employees</h4>
                </div>
                <div class="col">
                    <h3>517</h3>
                    <h4>Costumers</h4>
                </div>
                <div class="col">
                    <h3>94</h3>
                    <h4>Countries Served</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
    export default {
        name: 'ResultsNumber',

    }
</script>

<style lang="scss" scoped>
    .background-results {
        background-image: url('../../public/images/traffic-img.jpg');
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 150px;

        h2 {
            color: #fff;
        }

        p {
            color: #52babb;
        }

        h3 {
            color: #52babb;
        }

        h4 {
            color: #fff;
        }
        .bottom-spacing {
            margin-bottom: 3rem;
        }
    }
</style>
