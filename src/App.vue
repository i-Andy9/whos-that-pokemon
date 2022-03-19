<template>
  <!-- <img class="fade-in" alt="Vue logo" src="./assets/logo.png"> -->
  <PokemonVue/>
</template>

<script>

import PokemonVue from './Pages/Pokemon.vue'

export default {
  name: 'App',
  components: {
    PokemonVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
