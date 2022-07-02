<template>
    <div>
        <IntroductionVideo></IntroductionVideo>
        <ResultsInNumber></ResultsInNumber>
        <OurBusinessArea></OurBusinessArea>
        <TheTeam></TheTeam>
        <LatestNews></LatestNews>
        <TheNewsLetter></TheNewsLetter>
        <TheForm></TheForm>
    </div>
</template>

<script>
    import IntroductionVideo from './IntroductionVideo.vue'
    import ResultsInNumber from './ResultsInNumber.vue'
    import OurBusinessArea from './OurBusinessArea.vue'
    import TheTeam from './TheTeam.vue'
    import LatestNews from './LatestNews.vue'
    import TheNewsLetter from './TheNewsLetter.vue'
    import TheForm from './TheForm.vue'


    export default {
        name: 'TheMain',
        components: {
            IntroductionVideo,
            ResultsInNumber,
            OurBusinessArea,
            TheTeam,
            LatestNews,
            TheNewsLetter,
            TheForm,
    }

}

</script>

<style scoped>

</style>