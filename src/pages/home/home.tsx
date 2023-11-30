import React, {useMemo} from 'react';
import { useState, useEffect } from 'react'
import {getCharacters} from "../../domain/characters/characters.informer";
import Paginator from "../../components/paginator/paginator";

import ItemCharacter from "../../components/item-character/item-character";
import {CharactersModel} from "../../domain/characters/characters.model";
import Modal from "../../components/modal/modal";
import Spinner from "../../components/spinner/spinner";



const Home =()=> {

    const [characters, setCharacters] = useState<CharactersModel[]>()
    const [selectCharacter, setSelectCharacter] = useState<CharactersModel>(new CharactersModel())
    const [page, setPage] = useState<number>(1)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showSpinner, setShowSpinner] = useState<boolean>(true)

    const getInfo = async (page: number)=> {
        setShowSpinner(true)

        const response = await getCharacters(page)
        // const response = await new Promise<CharactersModel[]>((resolve) => {
        //     setTimeout(() => {
        //         resolve(getCharacters(page));
        //     }, 1000); // Simula una demora de 2 segundos
        // });
        setCharacters(response)
        setShowSpinner(false)
    }

    const paginatorSettings =(num: number)=> {
        setPage(num)
    }

    useEffect(() => {
        getInfo(page);
    }, [page])

    const renderPaginator = useMemo( () => {
        return <Paginator
            currentPage={page}
            paginatorSettings={paginatorSettings}
        />
    }, [page])

    const settingCharacterSelect =(select: CharactersModel)=> {
        setSelectCharacter(select)

    }

    const actionModal =()=> {
        setShowModal(!showModal)
    }


    return (
        <div className="home-page">

            {showSpinner && <Spinner/>}


            <h1>Home Rick And Morty Characters</h1>

            {
                characters && characters.length > 0 &&
                <div className="home-page__grid-character">
                    {
                        characters.map((item, key)=> {
                            return (
                                <ItemCharacter
                                    item={item}
                                    key={key}
                                    settingCharacterSelect={settingCharacterSelect}
                                    actionModal={actionModal}
                                />
                            )
                        })
                    }
                </div>
            }

            {renderPaginator}

            {
                showModal &&
                <Modal
                    selectCharacter={selectCharacter}
                    closeModal={actionModal}
                />
            }



        </div>
    )
}

export default Home;