import styled from "styled-components";

export const StyledProduto = styled.section`
    .barraTop {
        background-color: ${(props) => props.theme.marrom};
        height: 100px;
    }

    .containerProduto {
        display: flex;
        padding: 2rem 0;
        gap: 3rem;
    }

    .containerImagens {
        width: 50%;
        display: flex;
        justify-content: end;
        padding: 20px 40px;

        .containerImgPequena {
            display: flex;
            flex-direction: column;
            padding: 0 15px;
            gap: 15px;
        }
        .imgPequena {
            width: 50px;
        }
        .imgGrande {
            width: 300px;
        }
    }

    .containerDescrição {
        width: 50%;
        padding: 15px;

        > h2 {
            line-height: 50px;
        }
        > h3 {
            line-height: 40px;
        }
        > .botoesCategoriasProdutos {
            display: flex;
            gap: 15px;
            padding: 30px 0;
        }
        > .botoesCompras {
            display: flex;
            gap: 15px;
            padding: 60px 0;
        }
    }

    .containerMaisDetalhes {
        width: 80%;
        margin: 0 auto;
        padding: 4rem 0;
        gap: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        > h2:hover {
            color: ${(props) => props.theme.areia};
        }
        > p {
            text-align: justify;
        }

        > div {
            display: flex;
            gap: 4rem;
            > img {
                width: 200px;
            }
        }
    }
`;
