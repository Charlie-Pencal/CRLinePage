import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledProduto } from "./style";
import Button from "../../components/common/Button";
import axios from 'axios'

const Produto = () => {
    const navigate = useNavigate();
    const params = useParams()
    
    const urlApi = `http://localhost:3000/produtos/${params.id}`

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
            key: params.id,
            idProduto: params.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        };
        carrinhoAtual.push(novoProduto);
        localStorage.setItem('cart', JSON.stringify(carrinhoAtual));
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
                    <p>Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                    

                </div>
            
            </StyledProduto>
            <Footer />
        </>
    );
};

export default Produto;
