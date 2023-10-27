import React from "react";
import { StyledCadastro } from "./style";
import { Input } from '../../components/common/Input/Style'
import Button from '../../components/common/Button'
import {useForm} from 'react-hook-form'
import validator from 'validator';
import {Header} from '../../components/shared/Header/Index'
import axios from "axios";
import { toast } from "react-toastify";

const Cadastro = () => {

  const urlApi = `http://localhost:3000/clientes`;

  const {register, handleSubmit, formState: {errors},watch} = useForm();
  
  const onSubmit = async (data) => {
    console.log("aki ", data);
    try {
      const dadosCadastro = {
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        senha: data.senha
      };
      console.log(dadosCadastro);
      const resposta = await axios.post(urlApi, dadosCadastro);
      console.log("foi", resposta.data);
      toast.success("Sucesso no Cadastro")
      setTimeout(() => {
        window.location.href = '/login'
      } , 3000)
     
    } catch (error) {
        console.log(error);
    }
    
  }
  const watchSenha = watch("senha")

  return (
    <>
    <Header />
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
                    {...register("nome",{required: true})}
                    className={errors?.nome && "erro"} 
                     />
                    {errors?.nome?.type === "required" && <span className="erro">Nome é um campo obrigatório</span>}
                </div>
                <div className="labelSobreInput">
                  <label htmlFor="sobrenome">Sobrenome</label>
                  <Input 
                    type="text"
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'
                    {...register("sobrenome",{required: true})}
                    className={errors?.sobrenome && "erro"}
                     />
                    {errors?.sobrenome?.type === "required" && <span className="erro">Sobrenome é um campo obrigatório</span>}
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
                    {...register("email",{required: true, validate: (value) => validator.isEmail(value)})}
                    
                    className={errors?.email && "erro"}
                     />
                    {errors?.email?.type === "required" && <span className="erro">E-mail é um campo obrigatório</span>}
                    {errors?.email?.type === "validate" && <span className="erro">E-mail inválido</span>}
              </div>
              <div className="nomesSenhaInput">
                <div className="labelSobreInput">
                  <label htmlFor="senha">Senha</label>
                  <Input 
                    type="password"
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'
                    {...register("senha",{required: true})}
                    className={errors?.senha && "erro"}
                     />
                    {errors?.senha?.type === "required" && <span className="erro">Senha é um campo obrigatório</span>}
                </div>
                <div className="labelSobreInput">
                  <label htmlFor="confirmarSenha">Confirmar Senha</label>
                  <Input 
                    type="password"
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'
                    {...register("confirmarSenha",{required: true, validate: (value) => value === watchSenha})}
                    className={errors?.confirmarSenha && "erro"}
                     />
                    {errors?.confirmarSenha?.type === "required" && <span className="erro">Confirmar Senha é um campo obrigatório</span>}
                    {errors?.confirmarSenha?.type === "validate" && <span className="erro">Senhas não coincidem</span>}
                </div>
              </div>
            </div>
            <div>
              <Button variante={"primeiro"} texto={"Enviar"} onClick={handleSubmit(onSubmit)}/>
            </div>
          </div>
        </div>
      </div>
    </StyledCadastro>
    </>
  );
};

export default Cadastro;