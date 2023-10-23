import {
  Avaliacao,
 // BotoesProduto,
  //Button,
  Categoria,
  CategoriaTags,
  Container,
  ImageWrapper,
  InfoProdWrapper,
  //DescricaoContainer,
  DescricaoProduto,
  IconeAvaliacao,
  ImagemMiniatura,
  ImagemProduto,
  ImagemProdutoFig,
  Imagens,
  InformacoesProduto,
  Miniaturas,
  ReviewCliente,
  Subtitulo,
  Tags,
  Titulo,
  SupWrapper,
  BreadCrumbWrapper,
  Line,
  ButtonsWrapper,
  ButtonQty,
  ActionQuantity
} from "./style"


import Footer from "../../components/shared/Footer/Index";
import { Header } from "../../components/shared/Header/Index";
import { useState } from "react";
import ButtonCompDetails from "../../components/common/Button/DetailsProcuct";
import BasicTabs from "../../components/common/DescriptionTabs";

const Produto = () => {

  const [imgProduct, setImgProduct] = useState("product.jpg")
  const [quantity, setQuantity] = useState(1)


  return (
    <>
      <Header />
      <Container>
        
        <BreadCrumbWrapper>
          {"Home > Shop > | Copta Genshin"}
        </BreadCrumbWrapper>

        <SupWrapper>
          <ImageWrapper>
          <Imagens>

            <Miniaturas>
              <ImagemMiniatura  
              src="/product.jpg"
              onClick={() => setImgProduct("product.jpg")}
              />
              <ImagemMiniatura  
              src="/product2.jpg"
              onClick={() => setImgProduct("product2.jpg")}
              />
              <ImagemMiniatura  
              src="/product3.jpg"
              onClick={() => setImgProduct("product3.jpg")}
              />
            </Miniaturas>

            <ImagemProdutoFig>
              <ImagemProduto src={imgProduct} alt="Copta Genshin" />
            </ImagemProdutoFig>

          </Imagens>
          </ImageWrapper>

          <InfoProdWrapper>
            <InformacoesProduto>
              <Titulo>Copta Genshin</Titulo>
              <Subtitulo>Genshin Impact</Subtitulo>
              <Avaliacao>
                <IconeAvaliacao>⭐⭐⭐⭐⭐</IconeAvaliacao>
                <ReviewCliente>| Review do Cliente</ReviewCliente>
              </Avaliacao>
              <DescricaoProduto>
                Caderno costurado a mão com costura exposta.
                Pauta lisa
                100 folhas
                Papel Reciclado
                Size L
              </DescricaoProduto>

              {/* <BotoesProduto>
                <Button>Adicionar ao Carrinho</Button>
                <Button>Comprar</Button>
              </BotoesProduto> */}
              
              <ButtonsWrapper>

                <ButtonQty>
                  <ActionQuantity 
                  onClick={() => setQuantity(quantity >= 2 ? quantity - 1 : 1)}>
                    -
                  </ActionQuantity>
                  {quantity}
                  <ActionQuantity
                  onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </ActionQuantity>  
                </ButtonQty>

                <ButtonCompDetails 
                  title={"Adicionar ao Carrinho"}
                  onClick={() => alert("Adicionado")}
                />
                <ButtonCompDetails 
                  title={"Comprar"}
                  onClick={() => alert("Comprado")}
                />
              </ButtonsWrapper>

              <CategoriaTags>
                <Categoria>Copta</Categoria>
                <Tags>Copta, Genshin</Tags>
              </CategoriaTags>
            </InformacoesProduto>
          </InfoProdWrapper>
        </SupWrapper>


      <Line></Line>
      <BasicTabs />

      </Container>
      <Footer />
    </>
  );
};

export default Produto;



