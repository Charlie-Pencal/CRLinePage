import styled from "styled-components";

export const StyledPerfilUsuario = styled.section`
    display: flex;
    justify-content: center;
    border-radius: 8px;
    background-color: ${(props) => props.theme.marrom};
    width: 1000px;
    height: 500px;
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
            gap: 0.5rem;
        }
        .itemNav {
            border-left: solid 1px ${(props) => props.theme.areia};
            padding: 1rem 0.5rem;
        }
        .itemNav:hover {
            border-left: solid 1px ${(props) => props.theme.areia};
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
    .formularioDadosPessoais {
        div {
            display: flex;
            flex-direction: row;
            padding-top: 1rem;

            label {
                width: 4rem;
                display: flex;
                justify-content: end;
                align-items: center;
                padding: 0 0.5rem;
            }
            input {
                width: 30rem;
                color: ${(props) => props.theme.preto};
                height: 3rem;
                margin-left: 1rem;
                padding-left: 1rem;
                border-radius: 8px;
            }
        }
        button {
            background-color: ${(props) => props.theme.areia};
            padding: 0.8rem 2rem;
            margin-top: 2rem;
            border-radius: 8px;
            border: none;
            font-weight: 500;
        }
    }
`;
