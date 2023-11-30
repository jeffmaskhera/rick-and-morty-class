import React, {ReactNode, useState, createContext, Dispatch, SetStateAction, useEffect} from 'react'

import {CharactersModel} from "./domain/characters/characters.model";


interface ContextProps {
    favoriteCharacters: CharactersModel[];
    setFavoriteCharacters: Dispatch<React.SetStateAction<CharactersModel[]>>
}

const defaultContextValues: ContextProps = {
    favoriteCharacters: [],
    setFavoriteCharacters: () => {}
}


const Store = createContext<ContextProps>(defaultContextValues);


const StoreProvider: React.FC<{children: ReactNode}> = ({children}) => {

    const [favoriteCharacters, setFavoriteCharacters] = useState<CharactersModel[]>([]);

    // Cargar datos desde el localStorage al montar el componente
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteCharacters');
        if (storedFavorites) {
            setFavoriteCharacters(JSON.parse(storedFavorites));
        }
    }, []);

    // Guardar datos en el localStorage cada vez que se actualiza favoriteCharacters
    useEffect(() => {
        localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
    }, [favoriteCharacters]);


    return (
        <Store.Provider value={{favoriteCharacters, setFavoriteCharacters}}>
            {children}
        </Store.Provider>
    )

}

export { Store, StoreProvider}