import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct ({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    //   Suppression d'un article du panier
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <strong>{price}</strong>
          <small>€</small>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><StarIcon /></p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Retirer du panier</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
