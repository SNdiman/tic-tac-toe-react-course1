import React from 'react'
import { ButtonWrapper } from './Button.styled'
// import { useNavigate } from 'react-router-dom'

function Button(props) {
  return (
    <ButtonWrapper >
      {props.children}
    </ButtonWrapper>
  )
}

export default Button
