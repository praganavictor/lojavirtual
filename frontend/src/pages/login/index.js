import React from "react";

// import { Container } from './styles';

export default function login() {
  return (
    <>
    <header>
      <h4>Login</h4>
      <button>X</button>
    </header>

    <form>
      <div>
        <label>Nome de usuário ou e-mail *</label>
        <input type="text" name="user" required />

        <label>Senha *</label>
        <input type="password" name="password" required />

        <button type="submit">Acessar</button>
      </div>
      <div>
        <p>Use uma rede social para entrar</p>
        <a href="#">Facebook</a>
      </div>
    </form>
    <a href="#">Esqueceu a senha?</a>
    <div>
      <p>Ainda não possui conta?</p>
      <a href="#">Cadastra-se</a>
    </div>
  
  </>
  )
}
