import React from "react";
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledPedidos } from "./style";
import { Link } from "react-router-dom";

const Pedidos = () => {
    return (
        <>
            <Header />
            <StyledPedidos>
                <div className="containerNav">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTip18a5vyLJJXYZgGE44WTFaislpkAcvQURSqLik0tsv8DuPggkyib-NrlShXqM2mO9k&usqp=CAU" alt="Foto de perfil do usuário" className="containerImg"/>
                    <nav>
                        <Link to="/perfil" className="itemNav">Dados Pessoais</Link>
                        <Link to="/pedidos" className="itemNav">Pedidos</Link>
                    </nav>
                </div>
                <div className="containerInfos">
                    <h2>Olá Gertrude <span>Se esse for seu nome</span></h2>
                    <div className="containerPedidos">
                        <div className="pedido">
                            <p className="descricaoPedido">Data: 20/11/2011</p>
                            <p className="produtosPedido">Produto</p>
                            <p className="produtosPedido">Produto</p>
                            <p className="produtosPedido">Produto</p>
                        </div>
                        <div  className="pedido">
                            <p className="descricaoPedido">Data: 20/11/2011</p>
                            <p className="produtosPedido">Produto</p>
                            <p className="produtosPedido">Produto</p>
                        </div>
                        <div  className="pedido">
                            <p className="descricaoPedido">Data: 20/11/2011</p>
                            <p className="produtosPedido">Produto</p>
                            <p className="produtosPedido">Produto</p>
                            <p className="produtosPedido">Produto</p>
                            <p className="produtosPedido">Produto</p>
                        </div>
                        <div  className="pedido">
                            <p className="descricaoPedido">Data: 20/11/2011</p>
                            <p className="produtosPedido">Produto</p>
                            <p className="produtosPedido">Produto</p>
                            <p className="produtosPedido">Produto</p>
                            <p className="produtosPedido">Produto</p>
                        </div>
                    </div>
                </div>
            </StyledPedidos>
            <Footer />
        </>
    );
};

export default Pedidos;

