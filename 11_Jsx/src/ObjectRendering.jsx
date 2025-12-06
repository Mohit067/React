import React from 'react'

function ObjectRendering() {

    const isSuccess = 'success'

    let obj = {
        success: <h1>successfully fetch</h1>,
        error: <h1>error aa gyi</h1>
    }

    console.log(obj.success);

    return (
        <>
            {obj[isSuccess]}
            {obj.success}
            {obj.error}
        </>
    )
}

export default ObjectRendering