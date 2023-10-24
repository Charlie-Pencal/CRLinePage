import React from 'react'
import { Header } from '../../components/shared/Header/Index'
import * as S from "./Style"
import Cards from '../../components/common/Cards'
import Button from '../../components/common/Button'
import Filter from "/filter.svg"
import Footer from '../../components/shared/Footer/Index'
const Shop = () => {
  return (
    <>
      <Header />
      <S.SectionShop>
        <h1>Shop</h1>
      </S.SectionShop>
      <S.DivSeparate>

        <p>Produtos</p>

        
      </S.DivSeparate>
      <S.ProductSection>
        <div className='firstColumn'>
          <Cards BookName={"SketchBook Classico"} description={"Sketchbook"} price={"R$47,00"} discount={"R$65,00"} />
          <Cards BookName={"SketchBook Classico"} description={"Sketchbook"} price={"R$47,00"} discount={"R$65,00"} />
          <Cards BookName={"SketchBook Classico"} description={"Sketchbook"} price={"R$47,00"} discount={"R$65,00"} />
          <Cards BookName={"SketchBook Classico"} description={"Sketchbook"} price={"R$47,00"} discount={"R$65,00"} />

        </div>

        <div className='seccondColumn'>
          <Cards BookName={"SketchBook Classico"} description={"Sketchbook"} price={"R$47,00"} discount={"R$65,00"} />
          <Cards BookName={"SketchBook Classico"} description={"Sketchbook"} price={"R$47,00"} discount={"R$65,00"} />
          <Cards BookName={"SketchBook Classico"} description={"Sketchbook"} price={"R$47,00"} discount={"R$65,00"} />
          <Cards BookName={"SketchBook Classico"} description={"Sketchbook"} price={"R$47,00"} discount={"R$65,00"} />
        </div>

      </S.ProductSection>
      <Footer />


    </>
  )
}

export default Shop