import React from 'react'
import Product from './Product'
import './Home.css'

function Home () {
  return (
    <div className='home'>
      <img
        className='home__image'
        // src='https://m.media-amazon.com/images/G/02/digital/video/Magellan_MLP/FR_MLP_RightAlign_TitleGrid._SY1200_FMJPG_.jpg'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />
      {/* Produit id, prix,note, image */}
      <div className='home__row'>
        <Product
          id='1221212'
          title='PhenixGa Cadre De Bureau Electrique Hauteur Réglable Hauteur Réglable De 68.58CM / 27IN A 121.92CM / 48IN Base De Station De Travail DIY...'

          price={321.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61uAZKKyGkL._AC_SL1500_.jpg'
        />
        <Product
          id='1221213'
          title='Apple Magic Mouse 2 - Gris Sidéral'

          price={78.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/41hLvdgRekL._AC_SL1024_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='1221214'
          title='Montre Connectée Femmes,Montre Intelligente Homme IP68Etanche Bracelet Connecté Cardio Podometre Smartwatch Sport Fitness Tracker Contrôle de la Musique pour Android iPhone (Noir)'

          price={357.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61AAq8ey6xL._AC_SL1500_.jpg'
        />
        <Product
          id='1221215'
          title='Apple AirPods Pro'
          price={229.00}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg'
        />
        <Product
          id='1221216'
          title='Nouveau Apple iPad Pro (12,9 pouces, Wi-Fi, 128 Go) - Argent (4e génération)'
          price={1167.00}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SL1500_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='1221217'
          title='Apple MacBook Pro (16 pouces, 16Go RAM, 1To de Stockage, Intel Core i9 2,3GHz) Gris Sidéral'
          price={2779.89}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._AC_SL1500_.jpg'
        />
      </div>
      {/* Produit */}
    </div>
  )
}

export default Home
