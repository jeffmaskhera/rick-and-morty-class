import React, {FC, useContext} from 'react'
import {CharactersModel} from "../../domain/characters/characters.model";
import {Store} from '../../Context'

interface Props {
    item: CharactersModel;
    settingCharacterSelect?: (item: CharactersModel)=> void
    actionModal?: ()=> void
}

const ItemCharacter: FC<Props> =({item, settingCharacterSelect, actionModal})=> {

    const context = useContext(Store);

    const { favoriteCharacters, setFavoriteCharacters} = context

    const saveFavoriteCharacter =(item: CharactersModel) => {
        setFavoriteCharacters( (prevFavorites) => [...prevFavorites, item])
    }

    const actionSetItem =(item: CharactersModel)=> {
        if (settingCharacterSelect) {
            settingCharacterSelect(item);
        }
        if (actionModal) {
            actionModal();
        }
    }


    const deleteCharacter =()=> {
        //borrar de favoritos
        const updatedFavorites = favoriteCharacters.filter(
            (favorite) => favorite.id !== item.id
        );
        setFavoriteCharacters(updatedFavorites);
    }


    return (
        <div className="item-character" onClick={()=> actionSetItem(item)}>
            <div className="item-character__delete-character" onClick={deleteCharacter}>
                X
            </div>
            <div className="item-character__image">
                <img src={item?.urlImage} alt={item?.name} />
            </div>
            <div className="item-character__info">
                <h2>{item?.name}</h2>
            </div>

        </div>
    )
}
export default ItemCharacter;