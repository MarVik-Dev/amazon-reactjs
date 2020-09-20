import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer'

function Subtotal () {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className='subtotal'>
      {/* Prix */}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total de ({basket.length} article(s)): <strong />{` ${value}`}
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> Cette commande contient un cadeau
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'€'}
      />
      <button>Valider le panier</button>
    </div>
  )
}

export default Subtotal
