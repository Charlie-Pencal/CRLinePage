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
import Pedidos from './pages/Pedidos/Index';
import Contato from './pages/Contato/Index';

const Rotas = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={tema}>
                <GlobalStyle />
                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/shop" element={<Shop />} />

                    <Route path="/produto" element={<Produto />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/cadastro" element={<Cadastro />} />
                    
                    <Route path="/carrinho" element={<Carrinho />} />

                    <Route path="/perfil" element={<PerfilUsuario />} />

                    <Route path="/pedidos" element={<Pedidos />} />

                    <Route path="/contato" element={<Contato />} />

                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default Rotas;