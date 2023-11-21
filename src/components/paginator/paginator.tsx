import React, {FC} from 'react';
import {PaginatorActionEnum} from './paginator.enum';


interface Props {
    currentPage: number
    paginatorSettings: (num: number) => void
}


const Paginator: FC<Props> =({currentPage, paginatorSettings})=> {

    const setPaginator =(type: PaginatorActionEnum)=> {
        if (type === PaginatorActionEnum.Sum) {
            paginatorSettings(currentPage + 1 )
        } else {
            if (currentPage !== 1) {
                paginatorSettings(currentPage - 1 )
            }
        }
    }

    console.log("paginador")

    return (
        <div>
            <button onClick={()=> setPaginator(PaginatorActionEnum.Rest)}>
                Back
            </button>
            <h2>Numero de página {currentPage}</h2>
            <button onClick={()=> setPaginator(PaginatorActionEnum.Sum)}>
                Next
            </button>
        </div>
    )
}

export default Paginator;