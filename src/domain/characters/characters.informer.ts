



export const getCharacters = async (page: number)=> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        return await response.json()
    } catch (error) {
        console.error("Error en la solicitud", error)
    }
}