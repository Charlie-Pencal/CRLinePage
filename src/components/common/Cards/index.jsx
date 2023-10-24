import React from 'react'
import Product from "/product.jpg"
import * as S from "./Style"
const Cards = ({ display, BookName, description, price, discount}) => {
  return (
    <S.Card display={display}>
      <img src={Product} alt="" />
      <div className='divDetails'>

        <h1>{BookName}</h1>
        <h2>{description}</h2>

        <div className='divPrice'>

          <p className='principalPrice'>{price}</p> 
          <p className='discount'>{discount}</p>
        </div>


      </div>
    </S.Card>
  )
}

export default Cards