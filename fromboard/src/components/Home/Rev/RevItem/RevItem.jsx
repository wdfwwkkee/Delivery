import React from 'react'
import style from './RevItem.module.scss'
const RevItem = ({item}) => {
  return (
    <div className={style.item}>
        <div className={style.text}>
            {item.text}
        </div>
        <div className={style.name}>{item.name}</div>
    </div>
  )
}

export default RevItem