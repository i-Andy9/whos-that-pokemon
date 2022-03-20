<template>

    <div class="pokemon-container"> 
        <img :src="imgSource" 
              v-if="!this.showPokemon"
              alt="pokemon" 
              class="hidden-pokemon">
        <img v-else
              :src="imgSource"                
              alt="pokemon" 
              class="fade-in" >
    </div>
   
</template>

<script>
export default {
    props:{
        pokeId: {
            type:Number,
            required:true,
        },
        showPokemon: {
            type: Boolean,
            required:true,
            default:false,
        }
    }, 
    computed:{
        imgSource(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokeId}.svg`
        }
    }

}
</script>

<style scoped>
    
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute; 
    user-select: none;
    left: 0;
    right: 0;
    margin: 0 auto;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}


</style>