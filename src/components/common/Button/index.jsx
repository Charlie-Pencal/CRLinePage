import React from 'react'
import * as S from "./Style"
const Button = ({text, background,radius,width, height, padding, font,fontWeight, textTransform, fontStyle,fontSize }) => {
  return (
    <S.Buttonzin background={background} radius={radius} width={width} height={height} padding={padding} font={font} fontWeight={fontWeight} textTransform={textTransform} fontStyle={fontStyle} fontSize={fontSize}>{text}</S.Buttonzin>
  )
}

export default Button