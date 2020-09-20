import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login () {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Identification:
  const login = (event) => {
    event.preventDefault() // Cela arrete le refresh !
    // La logique du Login

    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Connecté, redirection vers accueil...
        history.push('/')
      })
    // S'il y a un problème
      .catch((e) => alert(e.message))
  }
  // Création/connexion d'un nouvel USER
  const register = (event) => {
    event.preventDefault() // Cela arrete le refresh !
    // La logique de l'enregistrement

    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // Creation de l'utilisateur puis connexion et redirection vers la page d'accueil
        history.push('/')
      })
      .catch((e) => alert(e.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>S'indentifier</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type='email' />
          <h5>Mot de passe</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type='password' />
          <button onClick={login} type='submit' className='login__signInButton'>Se connecter</button>
        </form>
        <p>
            En créant un compte vous êtes en accord avec les conditions d'utilisation de Amyzon.
            Vos cookies et autres informations sont enregistrés.
        </p>
        <button onClick={register} type='submit' className='login__registerButton'>Créer un compte Amyzon !</button>
      </div>
    </div>
  )
}

export default Login
