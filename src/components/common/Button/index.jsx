// import React from 'react'

import * as S from "./Style"

const Button = ({texto, variante, onClick, onSubmit}) => {
  return (
    <>
      {variante == 'primeiro' && <S.PrimeiroButton onClick={onClick} onSubmit={onSubmit}>{texto}</S.PrimeiroButton>}
      {variante == 'segundo' && <S.SegundoButton onClick={onClick} onSubmit={onSubmit}>{texto}</S.SegundoButton>}
      {variante == 'terceiro' && <S.TerceiroButton onClick={onClick} onSubmit={onSubmit}>{texto}</S.TerceiroButton>}
      {variante == 'quarto' && <S.QuartoButton onClick={onClick} onSubmit={onSubmit}>{texto}</S.QuartoButton>}
    </>
  )
}

export default Button 