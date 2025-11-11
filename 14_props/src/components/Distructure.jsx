import React from 'react'
//distructure mai ham direct propes ke name likhte h aur use kr lete h 
//isme ham object ko distructure krte h matlab jo  bhi hame props mai milta h wo
//ek object ke form mai hi milta h isliye ise ham destructure kr lete h
const Distructure = ({name, age}) => {
  return (
    <div>
        <div style={{
            background:"black", color:"orange", height:"50px", width:"500px", borderRadius:"1rem", display:"flex", justifyContent:"center",alignItems:"center", fontSize:"40px", fontWeight:"700"
        }}>
            {name} {" "}
            {age}
        </div>
    </div>
  )
}

export default Distructure