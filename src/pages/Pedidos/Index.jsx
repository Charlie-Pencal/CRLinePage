import { useState, useEffect } from 'react'
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledPedidos } from "./style";
import { Link } from "react-router-dom";
import axios from 'axios';

const Pedidos = () => {
    
    const idCliente = JSON.parse(localStorage.getItem('userId'))
    const urlApi = `http://localhost:3000/clientes/${idCliente}/pedidos`;
    const [pedidos, setPedidos] = useState([])

    const getPedidos = async() => {
        try {
            const resposta = await axios.get(urlApi)
            const data = resposta.data.pedidos
            setPedidos(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (idCliente){
            getPedidos()
        } else {
            window.location.href = "/login"
        }
    }, [])

    return (
        <>
            <Header />
            <StyledPedidos>
                <div className="containerGeral">
                    <div className="containerNav">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTip18a5vyLJJXYZgGE44WTFaislpkAcvQURSqLik0tsv8DuPggkyib-NrlShXqM2mO9k&usqp=CAU" alt="Foto de perfil do usuário" className="containerImg"/>
                        <nav>
                            <Link to="/perfil" className="itemNav">Dados Pessoais</Link>
                            <Link to="/pedidos" className="itemNav">Pedidos</Link>
                        </nav>
                    </div>
                    <div className="containerInfos">
                        <h2>Pedidos</h2>
                        <div className="containerPedidos">

                            {pedidos.map((pedido) => (
                                <div className="pedido" key={pedido._id}>

                                    {pedido.produtosPedido.map((produto, index) => (
                                        <div className='itemPedido' key={index}>
                                            <p className="produtosPedido">{produto.nome}</p>
                                            <Link to={`/produto/${produto.idProduto}`}>
                                                <img className="imagemProduto" src={produto.imagensProduto && produto.imagensProduto[0]}/>
                                            </Link>
                                        </div>
                                    ))}

                                    <small className="descricaoPedido">Identificador: {pedido._id}</small>
                                </div>
                            ))}
                            {pedidos.length === 0 && (
                                <div className='listaPedidosVazia'>
                                    <b>Lista de pedidos vazia</b>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </StyledPedidos>
            <Footer />
        </>
    );
};

export default Pedidos;

