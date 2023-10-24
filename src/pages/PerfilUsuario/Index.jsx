import React from "react";
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledPerfilUsuario } from "./style";
import { Link } from "react-router-dom";

const PerfilUsuario = () => {
    return (
        <>
            <Header />
            <StyledPerfilUsuario>
                <div className="containerNav">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTip18a5vyLJJXYZgGE44WTFaislpkAcvQURSqLik0tsv8DuPggkyib-NrlShXqM2mO9k&usqp=CAU" alt="Foto de perfil do usuário" className="containerImg"/>
                    <nav>
                        <Link to="/perfil" className="itemNav">Dados Pessoais</Link>
                        <Link to="/pedidos" className="itemNav">Pedidos</Link>
                    </nav>
                </div>
                <div className="containerInfos">
                    <h2>Olá Gertrude <span>Se esse for seu nome</span></h2>
                    <form className="formularioDadosPessoais" onSubmit={""}>
                        <div>
                            <label>Nome</label>
                            <input type="text" placeholder="Gertrude Joaquina" readOnly/>
                        </div>
                        <div>
                            <label>CPF</label>
                            <input type="text" placeholder="000.000.000-00" readOnly/>
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input type="text" placeholder="(00)0000-0000" readOnly/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" placeholder="email@provedor.com" readOnly/>
                        </div>
                        <button type="submit">Editar Dados</button>
                    </form>
                </div>
            </StyledPerfilUsuario>
            <Footer />
        </>
    );
};

export default PerfilUsuario;

