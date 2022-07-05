<template>
    <div class="the-team-section">
        <div class="container">
            <p class="introduction-text">we like what we do</p>
            <div class="row">
                
                    <div class="col col-8">
                        <h2><span class="marker-effect-light">Team</span> of experts</h2>
                        <p>Ethics and integrity are bases on which our professionals build their careers. They are fundamentals that become daily attitudes.</p>
                    <div class="row">
                        <div class="col col-6 p-3">
                            <div class="row">
                                <div class="col col-4">
                                    <img src="../../public/images/team-1.jpg" alt="">
                                </div>
                                <div class="col">
                                    <h5>David Cooper</h5>
                                    <h6>CTO & CO-FOUNDER</h6>
                                    <div class="socials">
                                        <div><i class="fa-brands fa-facebook-f"></i></div>
                                        <div><i class="fa-brands fa-twitter"></i></div>
                                        <div><i class="fa-brands fa-linkedin-in"></i></div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <div class="col col-6 p-3">
                            <div class="row">
                                <div class="col col-4">
                                    <img src="../../public/images/team-3.jpg" alt="">
                                </div>
                                <div class="col">
                                    <h5>Oliver Jones</h5>
                                    <h6>CHIEF PROCUREMENT</h6>
                                    <div class="socials">
                                        <div><i class="fa-brands fa-facebook-f"></i></div>
                                        <div><i class="fa-brands fa-twitter"></i></div>
                                        <div><i class="fa-brands fa-linkedin-in"></i></div>
                                    </div>
                                </div>
                            
                            </div>
                        </div><div class="col col-6 p-3">
                            <div class="row">
                                <div class="col col-4">
                                    <img src="../../public/images/team-2.jpg" alt="">
                                </div>
                                <div class="col">
                                    <h5>Emma Lopez</h5>
                                    <h6>CHIEF MARKETING</h6>
                                    <div class="socials">
                                        <div><i class="fa-brands fa-facebook-f"></i></div>
                                        <div><i class="fa-brands fa-twitter"></i></div>
                                        <div><i class="fa-brands fa-linkedin-in"></i></div>
                                    </div>
                                </div>
                            
                            </div>
                        </div><div class="col col-6 p-3">
                            <div class="row">
                                <div class="col col-4">
                                    <img src="../../public/images/team-4.jpg" alt="">
                                </div>
                                <div class="col">
                                    <h5>T.Johnson</h5>
                                    <h6>CEO & PRESIDENT</h6>
                                    <div class="socials">
                                        <div><i class="fa-brands fa-facebook-f"></i></div>
                                        <div><i class="fa-brands fa-twitter"></i></div>
                                        <div><i class="fa-brands fa-linkedin-in"></i></div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                    
                        
                
                    

                <div class="col col-4">
                    <div class="ceo-cit">
                        <h5>Presindent Speach</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatem accusamus, dicta recusandae vero.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatem accusamus, dicta recusandae vero.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatem accusamus, dicta recusandae vero.</p>
                        <p>T.Johnson <span><i class="fa-solid fa-quote-right"></i></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheTeam',

}
    

</script>

<style lang="scss" scoped>
    .the-team-section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

            img {
                height: 120px;
                width: 100px;
                border-radius: 5px;
            }

            .socials {
                display: flex;

                i {
                    padding: .5rem;
                    background-color: #bcbdbd;
                    color: #60a9ad;
                    border-radius: 50%;
                    margin: 0.5rem;

                }
            }
        .ceo-cit {
            background-color: #058283;
            color: #fff;
            padding: 40px;
            border-radius: 5px;
        }
    }
</style>