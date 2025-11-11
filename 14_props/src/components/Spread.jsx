import React from 'react'

const Spread = ({name, age}) => {
    // console.log(name)
  return (
    <div style={{
        background:"black", color:"orange", height:"50px", width:"500px", borderRadius:"1rem", display:"flex", justifyContent:"center",alignItems:"center", fontSize:"40px", fontWeight:"700"
    }}>
        {name}{" "}
        {age}
    </div>
  )
}

export default Spread