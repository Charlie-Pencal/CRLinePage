import React from 'react'
import * as S from "./Style"
const Input = ({width, height, border, radius, background}) => {
  return (
    <label>
    <S.Input width={width} height={height} border={border} radius={radius} background={background}  type="text" />
    </label>
  )
}

export default Input