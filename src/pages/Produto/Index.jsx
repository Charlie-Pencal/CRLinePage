import React from "react";
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledProduto } from "./style";
import Button from "../../components/common/Button";

const Produto = () => {
    return (
        <>
            <Header />
            <StyledProduto>

                <div className="barraTop"></div>

                <div className="containerProduto">

                    <div className="containerImagens">
                        <div className="containerImgPequena">
                            <img className="imgPequena" src="/product.jpg" alt="" />
                            <img className="imgPequena" src="/product.jpg" alt="" />
                            <img className="imgPequena" src="/product.jpg" alt="" />
                            <img className="imgPequena" src="/product.jpg" alt="" />
                        </div>
                        <img className="imgGrande" src="/product.jpg" alt="" />
                    </div>

                    <div className="containerDescrição">
                        <h2>Nome do Livro</h2>
                        <h3>Breve descrição</h3>
                        <p>Caderno costurado a mão com costura exposta.</p>
                        <p>Pauta Lisa</p>
                        <p>100 folhas</p>
                        <p>Papel Reciclado</p>
                        <div className="botoesCategoriasProdutos">
                            <Button variante={"segundo"} texto={"1"}/>
                            <Button variante={"segundo"} texto={"2"}/>
                            <Button variante={"segundo"} texto={"3"}/>
                        </div>
                        <div className="botoesCompras">
                            <Button variante={"quarto"} texto={"Adicionar ao Carrinho"}/>
                            <Button variante={"quarto"} texto={"Comprar"}/>
                        </div>
                    </div>

                </div>

                <div className="containerMaisDetalhes">
                    <h2>Descrição Adicional</h2>
                    <p>Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                    <div>
                        <img src="/product.jpg" alt="" />
                        <img src="/product.jpg" alt="" />
                    </div>

                </div>
            
            </StyledProduto>
            <Footer />
        </>
    );
};

export default Produto;
