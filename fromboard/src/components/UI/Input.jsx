import React from 'react'

const Input = (props) => {
  return (
    <input style={{
        border : "2px solid #111827",
        borderRadius : "4px",
        padding : "10px"
    }} type={props.type} required name={props.type} placeholder={props.placeholder} />
  )
}

export default Input