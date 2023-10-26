import React from "react";
import { StyledContato } from "./style";
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input/Index";

const Contato = () => {
    return (
        <>
            <Header />
            <StyledContato>
                <div className="containerBanner">
                    <img src="/BannerContact.png" alt="" />
                </div>
                <div className="containerTitulo">
                    <h2>Quer algo específico e não encontrou no site?</h2>
                    <h2>Entre em contato conosco.</h2>
                </div>
                <div className="containerCorpo">
                    <div className="containerInfos">
                        <h3>Endereço</h3>
                        <p>Av. Sete de Setembro, 2775</p>
                        <p>Rebouças, Curitiba - PR, 80230-010</p>
                        <h3>Contato</h3>
                        <p>Whatsapp: (00) 9 9999-9999</p>
                        <h3>Horário de Atendimento</h3>
                        <p>Segunda-Sexta: 9:00 - 22:00</p>
                    </div>
                    <form className="containerFormulario">
                        <label className="descricaoLabel">Seu Nome</label>
                        <Input
                            width={"100%"}
                            height={"45px"}
                            radius={"8px"}
                        />
                        <label className="descricaoLabel">Email</label>
                        <Input
                            width={"100%"}
                            height={"45px"}
                            radius={"8px"}
                        />
                        <label className="descricaoLabel">Sua Mensagem</label>
                        <textarea
                            cols="30"
                            rows="10"
                            placeholder="Olá, gostaria de ..."
                        ></textarea>
                        <Button variante={"quarto"} texto={"Enviar"} />
                    </form>
                </div>
            </StyledContato>
            <Footer />
        </>
    );
};

export default Contato;
