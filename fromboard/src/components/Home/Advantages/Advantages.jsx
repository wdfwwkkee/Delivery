import React from 'react'
import Title from '../../UI/Title'
import AdvantagesList from './AdvantagesList/AdvantagesList'
import style from './Advantages.module.scss'
const Advantages = (props) => {
    return (
        <div className={style.Advantages}>
            <div className="wrapper">
                <div className={style.AdvantagesContent}>
                    <div className={style.title}>
                        <Title className={style.title} text={"Наши преимущества"} size={30} />

                    </div>
                    <AdvantagesList item={props.items} />
                </div>
            </div>
        </div>
    )
}

export default Advantages