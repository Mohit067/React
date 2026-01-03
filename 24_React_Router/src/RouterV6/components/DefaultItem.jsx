import React from 'react'
import { useParams } from 'react-router-dom'

function DefaultItem() {
    
    const param = useParams();
    const {id} = useParams(); // usiing destructuring
    console.log(param);
    console.log(id);
    return (
        <div className='page'>This Is Params : {id}</div>
    )
}

export default DefaultItem