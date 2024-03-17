import React from 'react'
import Title from '../../UI/Title'
import style from './rev.module.scss'
import RevItem from './RevItem/RevItem'
const Rev = (props) => {
  return (
    <div className={style.Rev}>
        <div className="wrapper">
            <div className={style.revContent}>
                <div className={style.title}>
                    <Title text={"Отзывы"} size={30} /> 
                </div>
                <div className={style.revList}>
                    {props.items.map(item => <RevItem item={item} key={item.id} />)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rev