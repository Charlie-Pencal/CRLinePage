import React, { useState } from 'react'
import { StyledLogin } from './style'
import { Input } from '../../components/common/Input/Style'
import Button from '../../components/common/Button'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from '../../components/shared/Header/Index'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const urlApi = "http://localhost:3000/clientes/login"
  
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  



  async function submit() {
    
    try {
      
      const cliente = {
        email: emailValue,
        senha: passwordValue
      } 


      
      
      const response = await axios.post(urlApi, cliente)
      console.log(response)
      const userId = response.data.id
      localStorage.setItem('userId', JSON.stringify(userId))
      

  
      
      

    
      toast.success("Login realizado com sucesso, redirecionando para pagina de compras")
    
      setTimeout(() => {
        window.location.href = "/shop"
      }, 3000);
    
    
    } catch (error) {
      toast.error("Dados invalidos, tente novamente!")
      
      console.log(error)
    }
  }





  return (
    <>
      <Header />
      <StyledLogin>
        <section className='loginSection'>
          <div className='divLogin'>
            <h1 className='tituloLogin'>Login</h1>
            <div className='divInput'>
              <label htmlFor="email" className='labelLogin'>E-mail</label>
              <Input
                type="text"
                value={emailValue}
                onChange={(e) => { setEmailValue(e.target.value) }}
                width='100%'
                height='45px'
                radius='8px'
                padding='10px'
              />
              <label htmlFor="password" className='labelLogin'>Senha</label>
              <Input
                type="password"
                value={passwordValue}
                onChange={(e) => { setPasswordValue(e.target.value) }}
                width='100%'
                height='45px'
                radius='8px'
                padding='10px' />
            </div>
            <div className='divSubmit'>
              <Button variante={"primeiro"} texto={"Entrar"} onClick={submit} />
              <a href="" className='aLogin'>Esqueceu a senha?</a>
            </div>
            <p>Não tem cadastro? <Link to="/cadastro" className='aLogin'>Clique aqui.</Link></p>
          </div>
        </section>
      </StyledLogin>
    </>
  )
}

export default Login