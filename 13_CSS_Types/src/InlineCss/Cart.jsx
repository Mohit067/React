import React from 'react'

export const Cart = ({title}) => {
  return (
    <div
      style={{
        backgroundColor: "#696868",
        height: "100px",
        width: "100px",
        border: "1px solid white",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "wheat",
      }}
    >
      {title}
    </div>
  )
}
