
import React, {FC} from 'react';

interface Props {
    currentPage: number
    paginatorSettings: (num: number) => void
}

const Paginator: FC<Props> =({currentPage, paginatorSettings})=> {

    const setPaginator =(type: string)=> {
        if (type === 'sum') {
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
            <button onClick={()=> setPaginator('rest')}>
                Back
            </button>
            <h2>Numero de página {currentPage}</h2>
            <button onClick={()=> setPaginator('sum')}>
                Next
            </button>
        </div>
    )
}

export default Paginator;