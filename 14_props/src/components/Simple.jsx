import React from 'react'

const Simple = (props) => {
    return (
        <div style={{
            background:"black", color:"orange", height:"50px", width:"500px", borderRadius:"1rem", display:"flex", justifyContent:"center",alignItems:"center", fontSize:"40px", fontWeight:"700"
        }}>
            {props.name} {" "}
            {props.age}
        </div>
    )
}

export default Simple