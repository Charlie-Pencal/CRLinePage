import styled from 'styled-components'

export const StyledLogin = styled.section`
width: 850px;
height: 500px;
margin: 0 auto;
border-radius: 8px;
background-image: url(/BannerLogin.png);

.loginSection{
    margin: 4rem auto 2rem auto;
    width: 100%;
    height: 100%;
}


    .divLogin{
        background-color: #131313a0;
        backdrop-filter: blur(6px);
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
        gap: 15px;
    }
    .labelLogin{
        font-family: 'Red Hat Display', sans-serif;
        font-weight: bold;
    }
    .aLogin{
        font-weight: bold;
        font-size: 16px;
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
