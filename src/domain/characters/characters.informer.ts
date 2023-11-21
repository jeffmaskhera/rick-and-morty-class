import {CharactersModel} from "./characters.model";


export const getCharacters = async (page: number)=> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json()
        return data?.results.map((item: any)=> formatData(item))
    } catch (error) {
        console.error("Error en la solicitud", error)
    }
}


const formatData =(data: any)=> {
    return new CharactersModel( {
        id: data?.['id'] || '',
        name: data?.['name'] || '',
        urlImage: data?.['image'] || '',
        gender: data?.['gender'] || '',
        species: data?.['species'] || '',
        status: data?.['status'] || '',
    })
}