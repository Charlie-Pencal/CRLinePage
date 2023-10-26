import React,{ useState} from 'react'
import { StyledLogin } from './style'
import { Input } from '../../components/common/Input/Style'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import {Header} from '../../components/shared/Header/Index'

const Login = () => {
  const idCliente = "6538827f773e2f64ceac545c"
const [passwordValue,setPasswordValue] = useState('')
const [emailValue,setEmailValue] = useState('')

function handleSubmit(){
  const name = 'Carla Monteiro'
  const user = {email:'carlamonteiro85@hotmail.com',password:'12345678'}
  if(user.email === emailValue && user.password === passwordValue){
    alert(`${name} Seu login efetuado com sucesso`)
    window.location.href = '/shop'
  } else {
    alert('Email ou senha incorretos')
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
                    onChange={(e) => setEmailValue(e.target.value)}
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'
                     />
                    <label htmlFor="password" className='labelLogin'>Senha</label>
                    <Input 
                    type="password" 
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    width='100%'
                    height='45px'
                    radius='8px'
                    padding='10px'/>
                </div>
                <div className='divSubmit'>
                <Button variante={"primeiro"} texto={"Entrar"} onClick={handleSubmit}/>
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