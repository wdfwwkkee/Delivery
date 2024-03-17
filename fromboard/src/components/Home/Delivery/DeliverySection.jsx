import React from 'react'
import style from './DeliverySection.module.scss'
import Title from '../../UI/Title'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
const DeliverySection = () => {
    return (
        <div className={style.Delivery}>
            <div className="wrapper">
                <div className={style.DeliveryContent}>
                    <div className={style.title}>
                        <div>
                            <Title
                                text={"Без проблемная доставка купленных вещей из США, Европы и Азии в Россию"}
                                size={36}
                            />

                        </div>
                        <div className={style.desc}>
                        Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис позволяет вам легко и удобно заказывать товары со всего мира и получать их в России
                        </div>
                        <div className="titleImg">
                            <img src="/titleImg.png" alt="title" />
                        </div>
                    </div>
                    <div className={style.form}>
                        <div className={style.formTitle}><Title text={"Калькулятор доставки"} size={30} /></div>
                        <div className={style.formDesc}>Посчитайте, сколько будет стоить перевозка покупки из зарубежа</div>
                        <form className={style.DeliveryForm} action="#">
                            <div className="name">
                                <Input type={"name"} placeholder={"Имя"} />
                            </div>
                            <div className="email">
                                <Input type={"email"} placeholder={"Почта"} />
                            </div>
                            <div className="tel">
                                <Input type={"tel"} placeholder={"Телефон"} />
                            </div>
                            <div className="square">
                                <Input type={"number"} placeholder={"Общая площадь, м²"} />
                            </div>
                            <div className="Weight">
                                <Input type={"number"} placeholder={"Вес, кг"} />
                            </div>
                            <div className="Country">
                                <Input type={"text"} placeholder={"Страна покупки"} />
                            </div>
                            <div className="City">
                                <Input type={"text"} placeholder={"Город покупки"} />
                            </div>
                            <div className="Region">
                                <Input type={"text"} placeholder={"Область доставки"} />
                            </div>
                            <div className="CityDelivery">
                                <Input type={"text"} placeholder={"Город доставки"} />
                            </div>
                            <Button radius={4} text={"Заказать расчёт"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliverySection