import React from 'react'
import AdvantagesItems from '../AdvantagesItem/AdvantagesItems'
import style from './AdvantagesList.module.scss'
const AdvantagesList = (props) => {
  return (
    <div className={style.AdvantagesList}>
        {props.item.map(item => (
            <AdvantagesItems item={item} key={item.id} />
        ))}
    </div>
  )
}

export default AdvantagesList