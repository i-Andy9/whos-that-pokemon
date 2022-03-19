<template> 
   <div class="options-container">
       <ul>
            <li v-for="pokemon in this.pokemonL"  :key="pokemon.id" @click="clckOption(pokemon.id)"> 
                {{pokemon.name}}    
            </li> 
        </ul>
   </div>
</template>

<script>
export default {
    props:{
        pokemonL:{
            type:Array,
            required:true, 
        },
        control:{
            type:Boolean,
            required:true
        }
    },
    methods:{
        clckOption(pId){
            if(this.control){
               return 
            }else{
                return this.$emit('selection', pId)
            }
        }
    }
}
</script>

<style scoped>
/* Pokemon Options */
    ul {
        list-style-type: none;
    }
    li {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;

    }

    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .options-container {
        display: flex;
        justify-content: center;
    }

</style>