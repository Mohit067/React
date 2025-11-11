import React from 'react'

import style from "./Card.module.css"


export const Card = ({title}) => {
  return (
    <div className={style.div}>{title}</div>
  )
}
