import React from 'react'
import { Header } from '../../components/shared/Header/Index'
import * as S from "./Style"
import Button from '../../components/common/Button'
import Sketchbook from "/product.jpg"
import Grimorio from "/product.jpg"
import Tematico from "/product.jpg"
import Footer from '../../components/shared/Footer/Index'
import { tema } from '../../style/tema'
const Home = () => {
    return (
        <>
            <Header />
            <S.SectionStyled>
                <div className='divCardHome'>
                    <p className='release'>Lançamento</p>
                    <h1 className='text1'>Conheça nossa nova linha de Midoris</h1>
                    <h2 className='text2'>Troque os miolos sempre que quiser e precisar.</h2>
                    <div className='btnDiv'>
                        <Button variante={"quarto"} texto={"Conheça já"}/>
                    </div>
                </div>
            </S.SectionStyled>

            <S.SectionProducts>
                <div className='divText'>
                    <h1 className='text3'>Conheça nossos produtos</h1>
                    <p className='text4'>Temos Cadernos, sketchbooks, agendas, midoris e grimórios</p>
                    <div className='divBooks'>
                        <div>
                            <img src={Sketchbook} alt="" />
                            <p>Sketchbooks</p>
                        </div>
                        <div>
                            <img src={Grimorio} alt="" />
                            <p>Grimórios</p>
                        </div>
                        <div>
                            <img src={Tematico} alt="" />
                            <p>Temáticos</p>
                        </div>
                    </div>

                </div>
            </S.SectionProducts>
            <Footer/>
        </>
    )
}

export default Home