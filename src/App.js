import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function App() {
  
  const [{ user }, dispatch] = useStateValue()
  
  // useEffect <= Très puissant
  // Morceau de code qui s'exécute en fonction d'une condition donnée
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // L'utilisateur se connecte
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //  l'utilisateur se déconnecte
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      // Toutes les opérations de nettoyage vont ici
      unsubscribe()
    }

  }, [])


  console.log( 'USER EST >>>>>', user);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Header />
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
