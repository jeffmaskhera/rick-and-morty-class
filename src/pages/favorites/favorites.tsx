import React, {useContext} from 'react'

import {CharactersModel} from "../../domain/characters/characters.model";
import {Store} from '../../Context'
import Spinner from "../../components/spinner/spinner";
import ItemCharacter from "../../components/item-character/item-character";
import Modal from "../../components/modal/modal";



const Favorites =()=> {
    const context = useContext(Store);

    const { favoriteCharacters, setFavoriteCharacters} = context

    console.log("favorites", favoriteCharacters)

    return (
        <div className="home-page">


            <h1>My Favorites characters</h1>

            {
                favoriteCharacters && favoriteCharacters.length > 0 ?
                <div className="home-page__grid-character">
                    {
                        favoriteCharacters.map((item, key)=> {
                            return (
                                <ItemCharacter
                                    item={item}
                                    key={key}
                                />
                            )
                        })
                    }
                </div>
                :
                 <div>
                     <h2>No tienes personajes favoritos</h2>
                 </div>

            }

        </div>
    )
}

export default Favorites;