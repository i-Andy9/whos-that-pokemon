import getPokemonOptions, { getPokemonNames, getpokemons } from "@/Helpers/getPokemonOptions"

describe('getPokemonOptions', ()=>{

    
    test(' array de los n° ', ()=>{ 
        expect(getpokemons().length).toBe(650)
        expect(getpokemons()[49]).toBe(50)
        expect(getpokemons()[0]).toBe(1)
        expect(getpokemons()[649]).toBe(650)
    })

    test('retorno de las 4 opciones con los nombres', async ()=>{
        
        expect((await getPokemonNames([1,2,3,4]))).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ])
    })

    test('retorno de array de 4 pokemons aleatorios', async ()=>{
 
        expect((await getPokemonOptions()).length).toBe(4)
        expect(await getPokemonOptions()).toEqual(
            [
                { 
                    name: expect.any(String), 
                    id: expect.any(Number)
                 },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number)
                 },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number)
                 },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number)
                 },
              ]
        )        
        
    })

})