import React from 'react'
// jab object pass krte h to use destructure krna jaruri h
// agr nhi krte to simple nested tarike se value access krte h
// jaise normal object mai se value key ki help se access krte h baise
const Object = ({obj}) => {
    console.log(obj)
  return (
    <div style={{
        background:"black", color:"orange", height:"50px", width:"500px", borderRadius:"1rem", display:"flex", justifyContent:"center",alignItems:"center", fontSize:"40px", fontWeight:"700"
    }}>
        {obj.name}{" "}
        {obj.age}
    </div>
  )
}

export default Object