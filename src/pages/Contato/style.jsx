import styled from "styled-components";

export const StyledContato = styled.section`
    .containerBanner {
        > img {
            min-width: 100%;
            max-width: 100%;
            max-height: 250px;
        }
    }
    .containerTitulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        > h2 {
            line-height: 40px;
            color: ${(props) => props.theme.areia};
        }
    }
    .containerCorpo {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 8rem;
        width: 90%;
    }
    .containerInfos {
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;
        > h3 {
            padding-top: 2rem;
            padding-bottom: 0.3rem;
        }
    }
    .containerFormulario {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        width: 50%;
        gap: 1rem;
        > label {
            width: 100%;
        }
        > .descricaoLabel {
            padding-top: 1rem;
        }
        > textarea {
            border-radius: 8px;
            padding: 0.5rem;
            border: none;
            margin-bottom: 1rem;
            color: ${(props) => props.theme.preto};
        }
    }
`;
