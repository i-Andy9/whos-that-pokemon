import pokemonApi  from "@/Api/pokemonApi"

const getpokemons = () => {
    const pokemonArr = Array.from( Array(650)) 

    return pokemonArr.map((_,i) => i+1)
}

const getPokemonNames = async ( [a,b,c,d] = [] ) => {

   // const resp = await pokemonApi.get('/4') 
    //console.log(resp.data.name, resp.data.id)

    const promiseArr=[
        pokemonApi.get(`/${a}`), 
        pokemonApi.get(`/${b}`) ,
        pokemonApi.get(`/${c}`) ,
        pokemonApi.get(`/${d}`) ,
    ]
    
    const [p1,p2,p3,p4] = await Promise.all(promiseArr)
   
    return [
        {name:p1.data.name, id: p1.data.id},
        {name:p2.data.name, id: p2.data.id},
        {name:p3.data.name, id: p3.data.id},
        {name:p4.data.name, id: p4.data.id},
    ]
     
}

const getPokemonOptions = async () => {

    const pokemonMixed = getpokemons().sort(()=> Math.random() - 0.5)

    const pokemons = await getPokemonNames(pokemonMixed.splice(0,4)) 
     
    return pokemons
}

export default getPokemonOptions;