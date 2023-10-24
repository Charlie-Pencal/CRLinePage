import React from 'react'
import { StyledLogin } from './style'
import { Input } from '../../components/common/Input/Style'
import Button from '../../components/common/Button'

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
                    height='45px'
                    radius='8px'
                    padding='10px'
                     />
                    <label htmlFor="password" className='labelLogin'>Senha</label>
                    <Input 
                    type="password" 
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'/>
                </div>
                <div className='divSubmit'>
                <Button variante={"primeiro"} texto={"Entrar"}/>
                  <a href="" className='aLogin'>Esqueceu a senha?</a>
                </div>
                <p>Não tem cadastro? <a href="" className='aLogin'>Clique aqui.</a></p>
            </div>
        </section>
    </StyledLogin>
  )
}

export default Login