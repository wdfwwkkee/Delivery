import React from 'react'
import style from './tel.module.scss'
import Title from '../../UI/Title'
const Tel = (props) => {
  return (
    <div className={style.tel}>
      <a href="/"><Title color={props.color} size={36} text={"+7 (800) 123 45-67"} /></a>
      <div style={{color : `${props.color}`}}>Звонки по России бесплатны</div>
    </div>
  )
}

export default Tel