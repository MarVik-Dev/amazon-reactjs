export const initalState = {
  basket: [],
  user: null
}

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    case 'REMOVE_FROM_BASKET':
      // Logic for Removing item from basket

      // Clonage du panier
      let newBasket = [...state.basket]

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
      
      if (index >= 0) {
        // Si le produit est dans le panier, supprime le ...
        newBasket.splice(index, 1)
      } else {
        console.warn(`Impossible de supprimer l'article (id: ${action.id}) `)
      }
      
      return { ...state, basket: newBasket }
    default:
      return state
  }
}

export default reducer
