import React from 'react'
import * as S from "./Style"
const Button = ({text, background,radius,width, height}) => {
  return (
    <S.Buttonzin background={background} radius={radius} width={width} height={height} >{text}</S.Buttonzin>
  )
}

export default Button