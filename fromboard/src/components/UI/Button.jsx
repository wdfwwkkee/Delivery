import React from 'react'

const Button = (props) => {
  return (
    <button style={{
        background : "#8B5CF6",
        color : "#F9FAFB",
        padding : "10px 20px",
        fontSize : "16px",
        fontWeight : 700,
        border : "none",
        borderRadius :  `${props.radius}px`
    }} >{props.text}</button>
  )
}

export default Button