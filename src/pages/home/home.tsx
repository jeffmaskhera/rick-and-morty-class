import React, {useMemo} from 'react';
import { useState, useEffect } from 'react'
import {getCharacters} from "../../domain/characters/characters.informer";
import Paginator from "../../components/paginator/paginator";


const Home =()=> {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)

    const getInfo = async (page: number)=> {
        const response = await getCharacters(page)
        setCharacters(response?.results)
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
                                    <div key={key}>
                                        {item?.['name']}
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