import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 42px;


`;

export const BreadCrumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #250E11;
  color: white;
  width: 100%;
  height: 90px;
  margin-bottom: 30px;
  align-items: center;
  padding-left: 30px;
`


export const SupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`

export const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`


export const InfoProdWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-left: 25px;
`

export const Miniaturas = styled.div`
  display: flex;
  max-width: 108px;
  flex-direction: column;
  gap: 10px;
`;


export const Imagens = styled.div`
  display: flex;
  margin-right: 34px;
  width: 50%;
  gap: 17px;
`;

export const ImagemMiniatura = styled.img`
  width: 108px;
  display: flex;
  cursor: pointer;
  transform: scale(1);
  transition: .3s ease-in-out;

  &:hover {
    transform: scale(.9);
  }

`;

export const ImagemProdutoFig = styled.figure`
  display: flex;
  margin: auto;
`;

export const ImagemProduto = styled.img`
  width: 481px;
  height: 391px;
`;

export const InformacoesProduto = styled.div`
  width: 50%;
`;

export const Titulo = styled.h2`
color: #FEFEFE;
font-family: Inconsolata;
font-size: 42px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Subtitulo = styled.p`
color: #9F9F9F;
font-family: Inconsolata;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
`;

export const IconeAvaliacao = styled.span`
`;

export const ReviewCliente = styled.span`
`;

export const DescricaoProduto = styled.p`
color: #FEFEFE;
font-family: Red Hat Mono;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const BotoesProduto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
`;

export const CategoriaTags = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Categoria = styled.p`
`;

export const Tags = styled.p`
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid #D9D9D9;
  margin-bottom: 25px;
`

export const DescricaoContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 15px 0;
`
export const ButtonQty = styled.div`
  width: 80px;
  height: 50px;
  color: white;
  background-color: #03273B;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ActionQuantity = styled.text`
  font-size: 15px;
  cursor: pointer;
`
