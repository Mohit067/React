import React from 'react'

const Array = ({arr}) => {
    console.log(arr)
    return (
        <div style={{
            background:"black", color:"orange", height:"50px", width:"500px", borderRadius:"1rem", display:"flex", justifyContent:"center",alignItems:"center", fontSize:"40px", fontWeight:"700"
        }}>
            {arr.map((item, index) => {
                return <span key={index} style={{ margin: "0 10px"}}>
                    {item}
                </span>
            })}
        </div>
    )
}

export default Array