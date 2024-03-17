import React from 'react'
import style from './GuaranteeItem.module.scss'
const GuaranteeItem = ({item}) => {
  return (
    <div className={style.item} >
        <div className="image">
            <img src={item.image} alt="img" />
        </div>
        <div className="title">
            {item.title}
        </div>
    </div>
  )
}

export default GuaranteeItem