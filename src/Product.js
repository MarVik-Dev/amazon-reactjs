import React, { useState } from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from './StateProvider'

function Product ({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()
  const addToBasket = () => {
    // Ajouter d'un article dans le panier
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {
            Array(rating)
              .fill()
              .map((_) => (
                <p><StarIcon /></p>
              ))
          }
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Ajouter au panier</button>
    </div>
  )
}

export default Product
