import PokemonOptions from '@/components/PokemonOptions.vue'
import { shallowMount } from "@vue/test-utils"
import { pokemons } from '../mocks/pokemons'

describe('pokemon option component',()=>{

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(PokemonOptions,{
            props:{
                pokemonL:pokemons,
                control:false, 
            }
        })
    })
    test('match to snapshot ',()=>{
        
        expect(wrapper.html()).toMatchSnapshot()
        
    })

    test('entregar seleccion con sus respectivos parametros al hacer click',()=>[

    ])
})