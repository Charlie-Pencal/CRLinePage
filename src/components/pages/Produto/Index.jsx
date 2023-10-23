import Footer from "../../shared/Footer/Index";
import styled from 'styled-components';

const Produto = () => {
  return (
    <>
      <Container>
        <Imagens>
          <Miniaturas>
            <ImagemMiniatura  src="/product.jpg" />
            <ImagemMiniatura   src="/product.jpg"/>
            <ImagemMiniatura src="/product.jpg" />
          </Miniaturas>
          <ImagemProdutoFig>
            <ImagemProduto src="/product.jpg" alt="Copta Genshin" />
          </ImagemProdutoFig>          
        </Imagens>
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
          <BotoesProduto>
            <Button>Adicionar ao Carrinho</Button>
            <Button>Comprar</Button>
          </BotoesProduto>
          <CategoriaTags>
            <Categoria>Copta</Categoria>
            <Tags>Copta, Genshin</Tags>
          </CategoriaTags>
        </InformacoesProduto>
      </Container>
      <DescricaoContainer>
        Descrição, adicionar informação e review
      </DescricaoContainer>
      <Footer />
    </>
  );
};

export default Produto;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  margin-top: 42px;
`;

const Miniaturas = styled.div`
  display: flex;
  max-width: 108px;
  flex-direction: column;
  gap: 10px;
`;


const Imagens = styled.div`
  display: flex;
  margin-right: 34px;
  width: 50%;
  gap: 17px;
`;

const ImagemMiniatura = styled.img`
  width: 108px;
  display: flex;
`;

const ImagemProdutoFig = styled.figure`
  display: flex;
  margin: auto;
`;

const ImagemProduto = styled.img`
  width: 481px;
  height: 391px;
`;

const InformacoesProduto = styled.div`
  width: 50%;
`;

const Titulo = styled.h2`
color: #FEFEFE;
font-family: Inconsolata;
font-size: 42px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const Subtitulo = styled.p`
color: #9F9F9F;
font-family: Inconsolata;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

const Avaliacao = styled.div`
  display: flex;
  align-items: center;
`;

const IconeAvaliacao = styled.span`
`;

const ReviewCliente = styled.span`
`;

const DescricaoProduto = styled.p`
color: #FEFEFE;
font-family: Red Hat Mono;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const BotoesProduto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
`;

const CategoriaTags = styled.div`
  display: flex;
  flex-direction: column;
`;

const Categoria = styled.p`
`;

const Tags = styled.p`
`;

const DescricaoContainer = styled.div`
  width: 1440px;
  height: 744px;
  top: 1042px;
  border: 1px solid #D9D9D9;
`;

