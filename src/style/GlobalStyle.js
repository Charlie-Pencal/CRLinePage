import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Red Hat Display', sans-serif;
        color: ${(props) => props.theme.branco};
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;600;800&display=swap');
    }
    html, :root {
        width: 100%;
        min-height: 100vh;
    }
    body{
        background-color: ${(props) => props.theme.azul};
    }
    button, a {
        cursor: pointer;
        color: inherit;
    }
    a, li{
        text-decoration: none;
        list-style: none;
        color: inherit;
    }
    button, input {
        outline: none;
    }
`;
