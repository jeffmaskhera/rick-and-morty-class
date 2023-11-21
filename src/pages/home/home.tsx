import React, {useMemo} from 'react';
import { useState, useEffect } from 'react'
import {getCharacters} from "../../domain/characters/characters.informer";
import Paginator from "../../components/paginator/paginator";
import {CharactersModel} from "@/domain/characters/characters.model";
import ItemCharacter from "../../components/item-character/item-character";


const Home =()=> {

    const [characters, setCharacters] = useState<CharactersModel[]>()
    const [page, setPage] = useState<number>(1)

    const getInfo = async (page: number)=> {
        const response = await getCharacters(page)
        setCharacters(response)
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



    return (
        <div>
            Home Rick And Morty Characters

            <div>
                {
                    characters && characters.length > 0 &&
                    <div>
                        {
                            characters.map((item, key)=> {
                                return (
                                    // <div key={key}>
                                    //     {item?.['name']}
                                    // </div>
                                    <div  key={key}>
                                        <ItemCharacter item={item}/>
                                    </div>


                                )
                            })
                        }
                    </div>
                }
            </div>

            {renderPaginator}



        </div>
    )
}

export default Home;