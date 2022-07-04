<template>
  <div id="app">
    <TheHeader></TheHeader>
    <TheMain></TheMain>
    <TheFooter></TheFooter>
    <h2>Ciao mi chiamo {{getState.userName}}</h2>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

import {state} from './store.js'

// import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TheHeader,
    TheMain,
    TheFooter
  
  },
  data() {
    return {

    }
  },
  methods: {
    
  }, 
  computed: {
    getState() {
      return state.data;
    }
  }

}
</script>

<style lang="scss">
  @import "assets/scss/main.scss";
</style>
