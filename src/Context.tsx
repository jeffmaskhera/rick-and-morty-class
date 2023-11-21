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

    // useEffect(()=> {
    //     const storedFa
    // }, [])


    return (
        <Store.Provider value={{favoriteCharacters, setFavoriteCharacters}}>
            {children}
        </Store.Provider>
    )

}

export { Store, StoreProvider}