import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledProduto } from "./style";
import Button from "../../components/common/Button";
import axios from 'axios'
import {toast} from 'react-toastify'
import { LinkDaApi } from "../../service/api";

const Produto = () => {
    const navigate = useNavigate();
    const params = useParams()
    
    const urlApi = `${LinkDaApi}/produtos/${params.id}`

    const [produto, setProduto] = useState([])

    const getProduto = async() => {
        try {
            const resposta = await axios.get(urlApi)
            const data = resposta.data
            setProduto(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduto()
    }, [])

    const handleAdicionarCarrinho = () => {
        console.log("adicionado ao carrinho", params.id)
        const carrinhoAtual = JSON.parse(localStorage.getItem('cart')) || [];
        const novoProduto = {
            key: Math.round(Math.random() * 1000),
            idProduto: params.id,
            nome: produto.nome,
            preco: produto.preco,
            imagensProduto: produto.imagensProduto,
            quantidade: 1
        };
        carrinhoAtual.push(novoProduto);
        localStorage.setItem('cart', JSON.stringify(carrinhoAtual));
        toast.success("Adicionado ao carrinho", {icon:false})
    }
    
    const handleComprar = () => {
        handleAdicionarCarrinho();
        navigate('/carrinho')
    }
    
    return (
        <>
            <Header />
            <StyledProduto>

                <div className="barraTop"></div>

                <div className="containerProduto">

                    <div className="containerImagens">
                        <div className="containerImgPequena">
                            <img className="imgPequena" src={produto.imagensProduto && produto.imagensProduto[1]} alt="" />
                            <img className="imgPequena" src={produto.imagensProduto && produto.imagensProduto[2]} alt="" />
                        </div>
                        <img className="imgGrande" src={produto.imagensProduto && produto.imagensProduto[0]} alt="" />
                    </div>

                    <div className="containerDescrição">
                        <h2>{produto.nome}</h2>
                        <h3>{produto.descricao}</h3>
                        <p>{produto.tipoCostura}</p>
                        <p>{produto.tamanhoCapa}</p>
                        <p>{produto.tipoPauta}</p>
                        <p>Papel Reciclado</p>
                        <div className="botoesCategoriasProdutos">
                            <Button variante={"segundo"} texto={"A4"}/>
                            <Button variante={"segundo"} texto={"A5"}/>
                            <Button variante={"segundo"} texto={"A6"}/>
                        </div>
                        <div className="botoesCompras">
                            <Button variante={"quinto"} texto={"Adicionar ao Carrinho"} onClick={handleAdicionarCarrinho}/>
                            <Button variante={"quarto"} texto={"Comprar"} onClick={handleComprar}/>
                        </div>
                    </div>

                </div>

                <div className="containerMaisDetalhes">
                    <h2>Descrição Adicional</h2>
                    <p>A CRLine Cadernos foi fundada em agosto de 2022 com uma motivação profunda: superar um burnout e encontrar um propósito mais significativo na vida. A costura de cadernos tornou-se uma terapia transformadora e uma paixão.</p>
                    <p>O que começou como uma atividade terapêutica rapidamente ganhou reconhecimento. Amigos e conhecidos, impressionados com a singularidade e qualidade dos cadernos, começaram a fazer pedidos personalizados. Isso levou a uma expansão natural de nossos serviços, à medida que aceitamos encomendas de clientes em todo o país.</p>
                </div>
            
            </StyledProduto>
            <Footer />
        </>
    );
};

export default Produto;
