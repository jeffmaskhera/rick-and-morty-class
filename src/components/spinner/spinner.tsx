//https://loading.io/css/

import React from 'react'

const Spinner =()=> {
    return (

        <div className="container-spinner">
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Spinner;