import React from 'react'
import { StyledLogin } from './style'
import { Buttonzin } from '../../components/common/Button/Style'
import { Input } from '../../components/common/Input/Style'

const Login = () => {
  return (
    <StyledLogin>
        <section className='loginSection'>
            <div className='divLogin'>
                <h1 className='tituloLogin'>Login</h1>
                <div className='divInput'>
                    <label htmlFor="email" className='labelLogin'>E-mail</label>
                    <Input 
                    type="text"
                    width='100%'
                    height='30px'
                    border='1px solid #fefffe'
                    radius='8px'
                    background='none'
                    padding='10px'
                     />
                    <label htmlFor="password" className='labelLogin'>Senha</label>
                    <Input 
                    type="password" 
                    width='100%'
                    height='30px'
                    border='1px solid #fefffe'
                    radius='8px'
                    background='none'
                    padding='10px'/>
                </div>
                <div className='divSubmit'>
                  <Buttonzin
                  width='170px'
                  height='42px'
                  background='#ffb27d'
                  radius='8px'
                  >Entrar</Buttonzin>
                  <a href="" className='aLogin'>Esqueceu a senha?</a>
                </div>
                <p>Não tem cadastro? <a href="" className='aLogin'>Clique aqui.</a></p>
            </div>
        </section>
    </StyledLogin>
  )
}

export default Login