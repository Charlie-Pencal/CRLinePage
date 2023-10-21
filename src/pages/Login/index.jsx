import React from 'react'

const Login = () => {
  return (

    <section>
        <div>
            <h1>Login</h1>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="text" />
                <label htmlFor="password">Senha</label>
                <input type="password" />
            </div>
            <button>Entrar</button>
            <a href="">Esqueceu a senha?</a>
            <p>Não tem cadastro? <a href="">Clique aqui.</a></p>
        </div>
    </section>

  )
}

export default Login