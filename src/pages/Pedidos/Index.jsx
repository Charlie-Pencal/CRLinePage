import React from "react";
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledPedidos } from "./style";
import { Link } from "react-router-dom";

const Pedidos = () => {

    const pedidoTeste = {
		"_id": "6539a8a63739753d006f6ec9",
		"idCliente": "6538827f773e2f64ceac545c",
		"produtosPedido": [
			{
				"key": "653859a6cdd41fdc6e022628",
				"idProduto": "653859a6cdd41fdc6e022628",
				"nome": "Grimorio",
				"preco": 80,
				"quantidade": 1
			},
			{
				"key": "65385b49cdd41fdc6e022634",
				"idProduto": "65385b49cdd41fdc6e022634",
				"nome": "Grimório para aquarela",
				"preco": 150,
				"quantidade": 1
			}
		],
		"__v": 0
	}
    const pedidoTeste2 = {
		"_id": "6539a8a63739753d006f6ec1",
		"idCliente": "6538827f773e2f64ceac545c",
		"produtosPedido": [
            {
                "key": "653859a6cdd41fdc6e022621",
                "idProduto": "653859a6cdd41fdc6e022628",
                "nome": "Agenda",
                "preco": 50,
                "quantidade": 1
            },
            {
                "key": "65385b49cdd41fdc6e022631",
                "idProduto": "65385b49cdd41fdc6e022634",
                "nome": "Caderno",
                "preco": 40,
                "quantidade": 1
            }
        ],
        "__v": 0
    }

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
                            <div className="pedido">
                                <p className="descricaoPedido">{pedidoTeste._id}</p>
                                <p className="produtosPedido">{pedidoTeste.produtosPedido[0].nome}</p>
                                <p className="produtosPedido">{pedidoTeste.produtosPedido[1].nome}</p>
                            </div>
                            <div className="pedido">
                                <p className="descricaoPedido">{pedidoTeste2._id}</p>
                                <p className="produtosPedido">{pedidoTeste2.produtosPedido[0].nome}</p>
                                <p className="produtosPedido">{pedidoTeste2.produtosPedido[1].nome}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledPedidos>
            <Footer />
        </>
    );
};

export default Pedidos;

