import React from 'react'
import GuaranteeItem from '../GuaranteeItem/GuaranteeItem'
import style from './GuaranteeList.module.scss'
const GuaranteeList = (props) => {

  return (
    <div className={style.List}>
        {props.items.map(item => (<GuaranteeItem item={item} key={item.id} />))}
    </div>
  )
}

export default GuaranteeList