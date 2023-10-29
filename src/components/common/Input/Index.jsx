import React from 'react'
import * as S from "./Style"
const Input = ({width, height, border, radius, background, value, padding, onChange}) => {
  return (
    <label>
    <S.Input width={width} height={height} border={border} radius={radius} background={background} value={value} padding={padding} onChange={onChange} type="text" />
    </label>
  )
}

export default Input