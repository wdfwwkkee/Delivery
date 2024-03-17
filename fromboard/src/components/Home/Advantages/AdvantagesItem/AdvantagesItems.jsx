import React from 'react'
import Title from '../../../UI/Title'
import style from './AdvantagesItems.module.scss'
const AdvantagesItems = ({ item }) => {
    return (
        <div className={style.item}>
            <div className={style.image}>
                {item.image}
            </div>
            <div className={style.itemInfo}>
                <div className={style.title}>
                    <Title text={item.title} size={24} />
                </div>
                <div className={style.desc}>
                    {item.desc}
                </div>
            </div>
        </div>
    )
}

export default AdvantagesItems