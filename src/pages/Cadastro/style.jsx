import styled from "styled-components";

export const StyledCadastro = styled.section`

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
      align-items: center;

    .cadastro{
        width: 700px;
        height: 635px;
        background-color: #250e11;
        padding: 50px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .tituloCadastro{
        font-family: 'Red Hat Display', sans-serif;
        font-weight: bold;
        color: #fefffe;
        font-size: 36px;
    }
    .nomesSenhaInput{
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }
    .labelSobreInput{
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    .emailInput{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .inputs{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .erro{
        color: red;
        font-size: 12px;
    }
`