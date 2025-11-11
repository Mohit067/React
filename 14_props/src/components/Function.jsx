import React from 'react'

const Function = ({fun}) => {
    // console.log(fun)
    return (
        <div style={{
            background:"black", color:"orange", height:"50px", width:"500px", borderRadius:"1rem", display:"flex", justifyContent:"center",alignItems:"center", fontSize:"40px", fontWeight:"700"
        }}>
            <button onClick={fun} style={{
                height:"50px", width:"500px", borderRadius:"1rem", display:"flex", justifyContent:"center",alignItems:"center", fontSize:"40px", fontWeight:"700"
            }}>
                click
            </button>
        </div>
    )
}

export default Function