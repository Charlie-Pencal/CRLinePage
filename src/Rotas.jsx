import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { tema } from "./style/tema";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Rotas = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={tema}>
                <GlobalStyle />
                <Routes>
                    {/* Rotas aguardando a criação das Páginas/Elementos */}

                {/* ANDRE */}
                    {/* rota para a Home */}
                    <Route path="/" element={<></>} />
                    {/* rota para Catalogo */}
                    <Route path="/catalogo" element={<></>} />

                {/* LETICIA */}
                    {/* rota para Produto */}
                    <Route path="/produto" element={<></>} />

                {/* CHARLIE */}
                    {/* rota para Login */}
                    <Route path="/login" element={<></>} />
                    {/* rota para Cadastro */}
                    <Route path="/cadastro" element={<></>} />

                {/* EMERSON */}
                    {/* rota para Carrinho */}
                    <Route path="/carrinho" element={<></>} />
                    {/* rota para Checkout */}
                    {/* <Route path="/checkout" element={<></>} /> */}

                {/* JULIANE */}
                    {/* rota para Perfil */}
                    <Route path="/perfil" element={<></>} />
                    {/* rota para Pedidos */}
                    {/* <Route path="/pedidos" element={<></>} /> */}

                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default Rotas;
