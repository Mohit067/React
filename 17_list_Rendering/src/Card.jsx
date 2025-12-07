import React from 'react'

function Card(props) {
    // console.log(props.userDetails); // as a object milta h sabhi props
    let arr = props.userDetails;
    console.log(arr);
    return (
        <ul className='mt-5 bg-amber-500'>
            {arr.map((item, index) => {
                return <h1 className='mt-4 p-4 bg-blue-500' key={index}>{item}</h1>
            })}
        </ul>
    )
}

export default Card