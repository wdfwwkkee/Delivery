import React from 'react'
import style from './feedback.module.scss'
import Title from '../../UI/Title'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
const Feeback = () => {
  return (
    <div className={style.feedback}>
        <div className="wrapper">
            <div className={style.feedbackContent}>
                <div className={style.title}>
                    <Title size={30} text={"Остались вопросы?"} />  

                </div>
                <form className={style.feedbackForm} action="#">
                    <div className="name">
                        <Input type={"name"} placeholder={"Имя"}/>
                    </div>
                    <div className="email">
                        <Input type={"email"} placeholder={"Почта"}/>
                    </div>
                    <div className="tel">
                        <Input type={"tel"} placeholder={"Телефон"}/>
                    </div>
                    <div className="theme">
                        <Input type={"text"} placeholder={"Тема вопроса"}/>
                    </div>
                    <div className={style.textArea}>
                        <textarea name="feedtext" placeholder='Сообщение...' rows="10"></textarea>
                    </div>
                    <Button text={"Оставить заявку"} radius={4} />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Feeback