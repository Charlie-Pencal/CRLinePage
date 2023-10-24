import styled from 'styled-components'

export const StyledLogin = styled.section`
width: 850px;
height: 500px;
margin: 0 auto;
border-radius: 8px;
background-image: url(/BannerLogin.png);

.loginSection{
    border: solid red;
    width: 100%;
    height: 100%;
}


    .divLogin{
        background-color: rgb(8, 8, 8, 0.75);
        width: 50%;
        height: 100%;
        padding: 50px;
        border-radius: 0 8px 8px 0;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        gap: 50px;
        justify-content: center;
    }
    .divInput{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .labelLogin{
        font-family: 'Red Hat Display', sans-serif;
        font-weight: bold;
    }
    .aLogin{
        font-weight: bold;
        font-size: 14px;
        color: ${(propos) => propos.theme.areia};
    }
    .divSubmit{
        display: flex;
        gap: 15px;
        align-items: center;
    }
    .tituloLogin{
        font-size: 36px;
        display: flex;
        align-self: flex-start;
    }
    `
