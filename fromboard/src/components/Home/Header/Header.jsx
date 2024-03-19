import React from 'react'
import style from './header.module.scss'
import Button from '../../UI/Button'
import Logo from '../Logo/Logo'
import Tel from '../Tel/Tel'
const Header = () => {
    return (
        <div className={style.header}>
            <div className="wrapper">
                <div className={style.headerContent}>
                    <div className={style.priceList}>
                        <div className={style.logo}>
                            <Logo />
                        </div>
                        <div className={style.price}>
                            <div className={style.cost}>
                                <div>Доставляем товары из заграницы в Россию</div>
                                <div>Стоимость от 550 рублей за заказ</div>
                                <div>1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽</div>
                            </div>
                            <Tel />
                        </div>
                    </div>
                    <div className={style.navBar}>
                        <div className={style.nav}>
                            <div className="navItem">
                                <a href="/">Калькулятор</a>
                            </div>
                            <div className="navItem">
                                <a href="/">О нас</a>
                            </div>
                            <div className="navItem">
                                <a href="/">Гарантии</a>
                            </div>
                            <div className="navItem">
                                <a href="/">Отзывы</a>
                            </div>
                        </div>
                        <div><Button text={"Оставить заявку"} radius={4} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header