import styled from "styled-components";

export const StyledCarrinho = styled.section`
    padding: 50px;
    margin-bottom: 100px;

    .carrinho-content {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 30px;
        color: ${(props) => props.theme.branco};
    }

    .section-carrinho {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 15px;
        width: 100%;
        padding: 10px;
        border-collapse: collapse;
    }

    .carrinho-aside {
        background-color: #043a55;
        width: 393px;
        height: 390px;
        max-height: 400px;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        padding: 10px 30px;
        text-align: center;

        > span {
            width: 62px;
            height: 21px;
            top: 612px;
            left: 1022px;
        }

        > .titulo-aside {
            text-align: center;
            font-family: Red Hat Display;
            font-size: 32px;
            font-weight: 800;
            line-height: 42px;
            letter-spacing: 0em;
        }
        > .subtotal {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 50px;
        }

        > .total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 50px;
            font-weight: bold;

            > .span-total {
                font-weight: bold;
                color: ${(props) => props.theme.areia};
            }
        }
    }
`;
