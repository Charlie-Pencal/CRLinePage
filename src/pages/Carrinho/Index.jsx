import { useEffect, useState } from "react";
import { StyledCarrinho } from "./Style";
import Footer from "../../components/shared/Footer/Index";
import Button from "../../components/common/Button/index";
import { Header } from "../../components/shared/Header/Index";
import CarComponente from "../../components/common/CarComponente/Index";
import axios from "axios";
import { toast } from "react-toastify";

const Carrinho = () => {
    const [carrinho, setCarrinho] = useState([]);
    const idCliente = JSON.parse(localStorage.getItem('userId'))
    const urlApi = `http://localhost:3000/pedidos`;

    const getCarrinho = () => {
        const carrinhoLocalStorage =
            JSON.parse(localStorage.getItem("cart")) || [];
        setCarrinho(carrinhoLocalStorage);
    };

    useEffect(() => {
        getCarrinho();
    }, []);

    const totalCarrinho = () => {
        let soma = 0;
        for (let item of carrinho) {
            soma += item.preco * item.quantidade;
        }
        return soma;
    };
    const total = totalCarrinho();

    const handleCompra = async () => {
        try {
            const data = {
                idCliente: idCliente,
                produtosPedido: carrinho
            };
            if (carrinho.length < 1) throw new Error("Carrinho vazio")
            const resposta = await axios.post(urlApi, data);
            toast.success("Pedido Concluido!")
            localStorage.setItem('cart', JSON.stringify([]));
            getCarrinho();
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemoveItem = (key) => {
        const novoCarrinho = [...carrinho];
        const CarrinhoFiltrado = novoCarrinho.filter((item) =>
            item.key !== key ? item : null
        );
        setCarrinho(CarrinhoFiltrado);
        localStorage.setItem('cart', JSON.stringify(CarrinhoFiltrado));
    };

    return (
        <>
            <Header />
            <StyledCarrinho>
                <div className="carrinho-content">
                    <section className="section-carrinho">
                        {carrinho.map((item) => (
                            <CarComponente
                                key={item.key}
                                id={item.id}
                                data={item}
                                handleRemoveItem={handleRemoveItem}
                            />
                        ))}
                        {carrinho.length === 0 && (
                            <div style={{ textAlign: "center" }}>
                                <b>Carrinho de compras vazio</b>
                            </div>
                        )}
                    </section>
                    <aside className="carrinho-aside">
                        <h4 className="titulo-aside">Carrinho</h4>
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span>R$ {total}</span>
                        </div>
                        <div className="total">
                            <span>Total</span>
                            <span className="span-total">R$ {total}</span>
                        </div>
                        <Button
                            variante={"quarto"}
                            texto={"Comprar"}
                            onClick={handleCompra}
                        />
                    </aside>
                </div>
            </StyledCarrinho>
            <Footer />
        </>
    );
};

export default Carrinho;
