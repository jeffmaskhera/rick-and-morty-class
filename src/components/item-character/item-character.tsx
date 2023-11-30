import React, {FC, useContext} from 'react'
import {CharactersModel} from "../../domain/characters/characters.model";
import {Store} from '../../Context'

interface Props {
    item: CharactersModel;
    settingCharacterSelect: (item: CharactersModel)=> void
    actionModal: ()=> void
}

const ItemCharacter: FC<Props> =({item, settingCharacterSelect, actionModal})=> {

    const context = useContext(Store);

    const { favoriteCharacters, setFavoriteCharacters} = context

    const saveFavoriteCharacter =(item: CharactersModel) => {
        setFavoriteCharacters( (prevFavorites) => [...prevFavorites, item])
    }

    const actionSetItem =(item: CharactersModel)=> {
        settingCharacterSelect(item)
        actionModal()
    }


    return (
        <div className="item-character" onClick={()=> actionSetItem(item)}>
            <div className="item-character__image">
                <img src={item?.urlImage} alt={item?.name} />
            </div>
            <div className="item-character__info">
                <h2>{item?.name}</h2>
            </div>


            {/*<button className="button-style" onClick={()=>saveFavoriteCharacter(item)}>*/}
            {/*    Agregar a favoritos*/}
            {/*</button>*/}

        </div>
    )
}
export default ItemCharacter;