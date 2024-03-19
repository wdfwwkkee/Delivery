import React from 'react'

const Title = (props) => {
  return (
    <div style={{
        color : `${props.color}`,
        fontWeight : 900,
        fontSize : `${props.size}px`
    }}>{props.text}</div>
  )
}

export default Title