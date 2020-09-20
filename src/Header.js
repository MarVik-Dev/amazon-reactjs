import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
  const [{ basket, user }] = useStateValue()
// CONSOLE.LOG pour Voir l'etat du panier (vide à cet instant)
  console.log(basket)

  const login = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <nav className='header'>
      <Link to='/'>
        {/* Logo à gauche => img */}
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>

      {/* Barre de recherche */}
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      {/* 3 liens */}
      <div className='header__nav'>
        {/* 1er lien */}
        <Link to={!user &&'/login'} className='header__link'>
          <div onClick={login} className='header__option'>
            <span className='header__optionLineOne'>Salut,{user?.email}</span>
            <span className='header__optionLineTwo'>{user ? 'Se déconnecter' : 'Se connecter'}</span>
          </div>
        </Link>
        {/* 2nd lien */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Retours</span>
            <span className='header__optionLineTwo'>& Mes commandes</span>
          </div>
        </Link>

        {/* 3ème lien */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Votre</span>
            <span className='header__optionLineTwo'>Amyzon-Prime</span>
          </div>
        </Link>

        {/* 4ème lien */}
        <Link to='/checkOut' className='header__link'>
          <div className='header__optionBasket'>
            {/* Shopping basket IMG */}
            <ShoppingBasketIcon />
            {/* Number of items in the basket */}
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
