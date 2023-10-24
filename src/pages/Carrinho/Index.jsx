import React, { useEffect } from "react";
import { useState } from "react";
// import CarComponente from "../../components/common/CarComponente/Index";
import { StyledCarrinho } from "./Style";

import Footer from "../../components/shared/Footer/Index";
import Button from "../../components/common/Button/Index";
// import { Header } from "../../components/shared/Header/Index";

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  
    // const produtoObjeto = {
    // name:'produto',
    // preço:2,
    // quantidade:1,
    // }
    // const bancoDeDados = () => {

      

    //   api.get("/carrinho").then((response) => setCarrinho(response.data)) ;
        
    // }
      
      // useEffect(() => {
      // bancoDeDados();
      // } , []);
    
      // Inserir
      
    const handleAdicionarItem = () => {

      console.log("disparou o handleAdilitarItem");

      // api.post("/carrinho", produtoObjeto).then((response)) ;

      // console.log(response);

      // bancoDeDados();
    }

    // Remove

    const handleRemoveItem = (item) => {
      console.log("disparou o handleRemoveItem");
      console.log(item);

      // api.delete(`/carrinho/${item.id}`).then(response => {
      //   console.log(response);

      //   bancoDeDados();
      // });
      }

      // total aside
      const totalCarrinho = () => {
        let soma = 0;

        console.log(totalCarrinho);

        for (let item of carrinho) {

          soma += item.preco * item.quantidade;
        }
          return soma;
      };

      const total= totalCarrinho();

      totalCarrinho();
    
  return (
    <>
      {/* <Header/> */}
    <StyledCarrinho>
      <div className='carrinho-container'>
        <div className="carrinho-content">
          <section className="section-carrinho">

              <table>
              <thead>
                <tr>  
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carrinho.map((item) => (
                  <CarComponente key = {item.id} data ={item}  />
                ))}
                {carrinho.length === 0 && (
                  <tr>
                    <td colSpan={'1'} style={{ textAlign: 'center' }} >
                      <b>Carrinho de compras vazio</b>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          {/* <aside total = {totalCarrinho}> */}
          <aside>
            <div className="carrinho-aside">
              <div className="titulo-aside">Carrinho</div>
              <div className="subtotal"><span>Subtotal</span><span>R${totalCarrinho}</span></div>
              <div className="total"><span>Total</span><span className='span-total'>R${totalCarrinho}</span></div>
              <Button variante={'quarto'} texto={'Comprar'}/>            
            </div>
          </aside>
        </div>
      </div>  
    </StyledCarrinho>
    <Footer/>
    </>
);
};

export default Carrinho;
