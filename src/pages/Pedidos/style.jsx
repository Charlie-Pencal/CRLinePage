import styled from "styled-components";

export const StyledPedidos = styled.section`
    display: flex;
    border-radius: 8px;
    background-color: ${(props) => props.theme.marrom};
    width: 1000px;
    min-height: 500px;
    padding: 3rem 4rem;
    margin: 4rem auto 10rem auto;

    .containerNav {
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;
        gap: 2rem;

        .containerImg {
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
            box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
        }
        nav {
            display: flex;
            flex-direction: column;
        }
        .itemNav {
            border-left: solid transparent;
            padding: 1rem 0.5rem;
        }
        .itemNav:hover {
            border-left: solid ${(props) => props.theme.areia};
            box-shadow: inset 0 0 100px 100px rgba(100, 100, 100, 0.1);
        }
    }

    .containerInfos {
        padding: 0 2rem;
        width: 100%;

        h2 {
            padding: 1rem;

            span {
                text-decoration-line: line-through;
                font-weight: 300;
                font-size: small;
                padding-left: 1rem;
            }
        }
    }

    .containerPedidos {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .pedido {
            border: solid 1px ${(props) => props.theme.branco};
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            /* padding-top: 1rem; */
            padding: 1rem;
            width: 100%;

            .descricaoPedido {
                text-align: start;
            }
            .produtosPedido {
                text-align: end;
            }
        }
    }
    /* } */
`;
