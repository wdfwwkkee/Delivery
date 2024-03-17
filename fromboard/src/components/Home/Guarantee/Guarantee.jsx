import React from 'react'
import style from './Guarantee.module.scss'
import Title from '../../UI/Title'
import GuaranteeList from './GuaranteeList/GuaranteeList'
import Button from '../../UI/Button'
const Guarantee = (props) => {
    return (
        <div className={style.Guarantee}>
            <div className="wrapper">
                <div className={style.GuaranteeContent}>
                    <div className={style.header}>
                        <div className={style.title}>
                            <Title text={"Гарантии качества"} size={30} />
                        </div>
                        <div className={style.desc}>
                            Наши гарантии качества включают в себя полный спектр документов, необходимых для ввоза и вывоза товаров, а также для успешного бизнеса на мировом рынке.
                            Мы предоставляем вам надёжность и уверенность
                        </div>
                    </div>
                    <GuaranteeList items={props.items} />
                    <div className={style.button}>
                        <Button text={"Показать больше документов"} radius={12} />  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guarantee