import React, {FC, useContext} from 'react'
import {CharactersModel} from "../../domain/characters/characters.model";
import {Store} from '../../Context'

interface Props {
    item: CharactersModel;
}

const ItemCharacter: FC<Props> =({item})=> {

    const context = useContext(Store);

    const { favoriteCharacters, setFavoriteCharacters} = context

    const saveFavoriteCharacter =(item: CharactersModel) => {
        setFavoriteCharacters( (prevFavorites) => [...prevFavorites, item])
    }

    console.log("favorites", favoriteCharacters)


    return (
        <div className="item-character">
            <h2>{item?.name}</h2>
            <div className="item-character__image">
                <img src={item?.urlImage} alt={item?.name} />
            </div>
            <button onClick={()=>saveFavoriteCharacter(item)}>
                Agregar a favoritos
            </button>

        </div>
    )
}
export default ItemCharacter;