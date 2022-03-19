<template>
    
    <h1 v-if="!pokemon"> espere por favor...</h1>
    <div v-else>
      <h1> ¿Cual es este pokemón?</h1>
      <pokemonPicture 
        :pokeId='pokemon.id' 
        :showPokemon='showPokemon'
      />
      
      <pokemonOptions 
        :pokemonL="pokemonOptionArr"
        :control="disableBtn"
        @selection="checkAnswer"
      />
      <template v-if="showAnswer">
        <h2 >{{answer}}</h2>
        <button @click="newGame"  class="newgame"> Nuevo Juego</button>        
      </template>
    </div>
</template>

<script>
    import PokemonPictureVue from '@/components/PokemonPicture.vue'
    import PokemonPicture from '@/components/PokemonPicture.vue'
    import PokemonOptions from '@/components/PokemonOptions.vue'
    import getPokemonOption from '@/Helpers/getPokemonOptions.js'
 

    export default {
      components: { PokemonPicture, PokemonOptions, PokemonPictureVue, },
      data(){
        return {
          pokemonOptionArr: [],
          pokemon:null,
          showPokemon:false,
          showAnswer:false,
          disableBtn:false,
          answer:'',
        }
      },
      methods:{
        async PokemonList(){
          this.pokemonOptionArr = await getPokemonOption()
          
          const rnd = Math.floor( Math.random() * 4)
          this.pokemon = this.pokemonOptionArr[rnd] 
        },
        checkAnswer(idPokemon){
          
          this.disableBtn=true,
          this.showPokemon=true
          this.showAnswer=true
           
          if(idPokemon === this.pokemon.id){
            this.answer = `Correcto, es ${this.pokemon.name}`
          }  else{
            this.answer = `FOOOOOOOOOOOOOOOOOOOk ${this.pokemon.name}`
          }
              
        },
        newGame(){
          
          this.pokemon=null,
          this.pokemonOptionArr= [], 
          this.showPokemon=false,
          this.showAnswer=false, 
          this.disableBtn=false,
          this.PokemonList()
        } 
      },
      mounted(){
        this.PokemonList()
      }
        
    }
</script>

<style scoped>
  button.newgame{
    color: aliceblue;
    background-color: blueviolet;
    border-color: darkviolet;
    border-radius: 30px;
    padding: 10px 5px 10px 5px;
  }

</style>