import React from "react";
import { StyledCadastro } from "./style";
import { Input } from '../../components/common/Input/Style'
import Button from '../../components/common/Button'

const Cadastro = () => {
  return (
    <StyledCadastro>
      <div>
        <div className="containerCadastro">
          <div className="cadastro">
            <h1 className="tituloCadastro">Cadastro</h1>
            <div className="inputs">
              <div className="nomesSenhaInput">
                <div className="labelSobreInput">
                  <label htmlFor="nome">Nome</label>
                  <Input 
                    type="text"
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'
                     />
                </div>
                <div className="labelSobreInput">
                  <label htmlFor="sobrenome">Sobrenome</label>
                  <Input 
                    type="text"
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'
                     />
                </div>
              </div>
              <div className="emailInput">
                <label htmlFor="email">E-mail</label>
                <Input 
                    type="text"
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'
                     />
              </div>
              <div className="nomesSenhaInput">
                <div className="labelSobreInput">
                  <label htmlFor="senha">Senha</label>
                  <Input 
                    type="text"
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'
                     />
                </div>
                <div className="labelSobreInput">
                  <label htmlFor="confirmarSenha">Confirmar Senha</label>
                  <Input 
                    type="text"
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'
                     />
                </div>
              </div>
            </div>
            <div>
              <Button variante={"primeiro"} texto={"Enviar"}/>
            </div>
          </div>
        </div>
      </div>
    </StyledCadastro>
  );
};

export default Cadastro;