import pokemonApi from "@/Api/pokemonApi"

describe('pokemonApi', ()=>{

    test('test baseURL de axios', ()=>{

        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })

})