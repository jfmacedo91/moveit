import Head from "next/head";
import { useState } from "react";

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const [name, setName] = useState('')

  return (
    <div className={ styles.loginContainer }>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={ styles.backgroundLogo }></div>
      <div className={ styles.formLogin}>
        <form action="/home">
          <header>
            <img src="/logo-full-branca.svg" alt="Move.it"/>
          </header>
          <main>
            <h1>Bem-vindo</h1>
            <div className={ styles.github }>
              <img src="/icons/github-logo.svg" alt="Logo github"/>
              <p>Faça login com seu Github para começar</p>
            </div>
            <div className={ styles.inputContainer }>
              <input
                type="text"
                name="name"
                id="name"
                onChange={ (event) => { setName(event.target.value) } }
              />
              <button type="submit" disabled={ name.length === 0 }>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </main>
        </form>
      </div>
    </div>
  )
}