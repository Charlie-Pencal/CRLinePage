import React from "react";
import { StyledContato } from "./style";
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import Button from "../../components/common/Button";
import { Input } from '../../components/common/Input/Style'
import { toast } from "react-toastify";

const Contato = () => {
    const handleSubmit = () => {
      toast.success("Enviado!");
      setTimeout(() => {
        location.reload()
      }, 2000)
    }
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
                    <div className="containerFormulario" >
                        <label className="descricaoLabel">Seu Nome</label>
                        <Input
                            type="text"
                            width='100%'
                            height='45px'
                            radius='8px'
                            padding='10px'
                        />
                        <label className="descricaoLabel">Email</label>
                        <Input
                            type="text"
                            width='100%'
                            height='45px'
                            radius='8px'
                            padding='10px'
                        />
                        <label className="descricaoLabel">Sua Mensagem</label>
                        <textarea
                            cols="30"
                            rows="10"
                            placeholder="Olá, gostaria de ..."
                        ></textarea>
                        <Button variante={"quarto"} texto={"Enviar"} onClick={handleSubmit}/>
                    </div>
                </div>
            </StyledContato>
            <Footer />
        </>
    );
};

export default Contato;
