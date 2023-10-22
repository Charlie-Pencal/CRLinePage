import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { tema } from "./style/tema";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Index';
import Shop from './pages/Shop/Index';
import Produto from './pages/Produto/Index';
import Login from './pages/Login/Index';
import Cadastro from './pages/Cadastro/Index';
import Carrinho from './pages/Carrinho/Index';
import PerfilUsuario from './pages/PerfilUsuario/Index';

const Rotas = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={tema}>
                <GlobalStyle />
                <Routes>

                {/* ANDRE */}
                    {/* rota para a Home */}
                    <Route path="/" element={<Home />} />
                    {/* rota para Catalogo */}
                    <Route path="/shop" element={<Shop />} />

                {/* LETICIA */}
                    {/* rota para Produto */}
                    <Route path="/produto" element={<Produto />} />

                {/* CHARLIE */}
                    {/* rota para Login */}
                    <Route path="/login" element={<Login />} />
                    {/* rota para Cadastro */}
                    <Route path="/cadastro" element={<Cadastro />} />

                {/* EMERSON */}
                    {/* rota para Carrinho */}
                    <Route path="/carrinho" element={<Carrinho />} />
                    {/* rota para Checkout */}
                    {/* <Route path="/checkout" element={<></>} /> */}

                {/* JULIANE */}
                    {/* rota para Perfil */}
                    <Route path="/perfil" element={<PerfilUsuario />} />
                    {/* rota para Pedidos */}
                    {/* <Route path="/pedidos" element={<></>} /> */}

                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default Rotas;
