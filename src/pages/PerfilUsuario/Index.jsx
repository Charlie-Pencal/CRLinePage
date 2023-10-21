import React from "react";
import Header from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledPerfilUsuario } from "./style";

const PerfilUsuario = () => {
    return (
        <StyledPerfilUsuario>
            <Header />
            <div className="containerGeral">
                <div className="containerNav">
                    <img src="/product.jpg" alt="Foto de perfil do usuário" className="containerImg"/>
                    <nav>
                        <a href="" className="itemNav">Dados Pessoais</a>
                        <a href="" className="itemNav">Endereços</a>
                        <a href="" className="itemNav">Pedidos</a>
                    </nav>
                </div>
                <div className="containerInfos">
                    <h2>Olá Gertrude <span>Se esse for seu nome</span></h2>
                    <div className="conteudoInfos">
                        <p>;</p>

                    </div>
                </div>
            </div>
            <Footer />
        </StyledPerfilUsuario>
    );
};

export default PerfilUsuario;

