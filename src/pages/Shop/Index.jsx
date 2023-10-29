import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/shared/Header/Index'
import * as S from "./Style"
import Cards from '../../components/common/Cards'
// import Button from '../../components/common/Button'
// import Filter from "/filter.svg"
import Footer from '../../components/shared/Footer/Index'
import axios from 'axios'
import { LinkDaApi } from "../../service/api";

const Shop = () => {

    const urlApi = `${LinkDaApi}/produtos`

    const [produtos, setProdutos] = useState([])

    const getProdutos = async() => {
        try {
            const resposta = await axios.get(urlApi)
            const data = resposta.data
            setProdutos(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProdutos()
    }, [])

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

            {produtos.map((produto) => (
                <div key={produto._id}>
                    <Cards data={produto} />
                </div>
            ))}

        </S.ProductSection>
        <Footer />


        </>
    )
}

export default Shop