import React, {useContext} from 'react'

import {CharactersModel} from "../../domain/characters/characters.model";
import {Store} from '../../Context'



const Favorites =()=> {
    const context = useContext(Store);

    const { favoriteCharacters, setFavoriteCharacters} = context

    console.log("favorites", favoriteCharacters)

    return (
        <div>
            Mi página de favoritos
        </div>
    )
}

export default Favorites;