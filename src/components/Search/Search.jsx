import React from 'react'

import style from "./Search.module.scss"

export default function Search() {
  return (
    <div  className={style.root}>
      <input className={style.input} type="text" placeholder='Find the coin'/>
    </div>
  )
}
