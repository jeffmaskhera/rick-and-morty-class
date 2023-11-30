import React, {FC, useContext, useEffect, useState} from 'react'
import {CharactersModel} from "../../domain/characters/characters.model";
import {Store} from "../../Context";

interface Props {
    selectCharacter: CharactersModel
    closeModal: ()=> void
}

const Modal:FC<Props> =({selectCharacter, closeModal})=> {

    const context = useContext(Store);
    const { favoriteCharacters, setFavoriteCharacters} = context

    const [isCharacterInFavorites, setIsCharacterInFavorites] = useState<boolean>(
        favoriteCharacters.some((favorite) => favorite.id === selectCharacter.id)
    );

    const settingCharacterFavorites =()=> {
        setIsCharacterInFavorites(
            favoriteCharacters.some((favorite) => favorite.id === selectCharacter.id)
        );
    }

    useEffect(() => {
        settingCharacterFavorites()
    }, [favoriteCharacters, selectCharacter]);

    const toggleFavoriteCharacter = (item: CharactersModel) => {
        if (isCharacterInFavorites) {
            // Si está en favoritos, eliminar de favoritos
            const updatedFavorites = favoriteCharacters.filter(
                (favorite) => favorite.id !== item.id
            );
            setFavoriteCharacters(updatedFavorites);
        } else {
            // Si no está en favoritos, agregar a favoritos
            setFavoriteCharacters((prevFavorites) => [...prevFavorites, item]);
        }
    };


    return (
        <div className="modal">
            <div className="modal__close-modal" onClick={closeModal}></div>

            <div className="modal__container-modal" >
                <div className="modal__container-modal__close-x" onClick={closeModal}>X</div>

                <div className="modal__container-modal__container-info">
                    <h2>{selectCharacter?.name}</h2>
                    <div className="modal__container-modal__container-info__image">
                        <img src={selectCharacter.urlImage} alt={selectCharacter?.name} />
                    </div>

                    {/*//ternario*/}

                    <p>Gender: {selectCharacter?.gender ? selectCharacter?.gender : 'no hay información' }</p>
                    <p>Species: {selectCharacter?.species ? selectCharacter?.species : 'no hay información' }</p>
                    <p>Status: {selectCharacter?.status ? selectCharacter?.status : 'no hay información' }</p>

                    <button
                        className="button-style"
                        onClick={() => toggleFavoriteCharacter(selectCharacter)}
                    >
                        {isCharacterInFavorites ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Modal;