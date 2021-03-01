import CartActionsType from "./cart.types";


export const toggleCartHidden = () => ({
    type: CartActionsType.TOGGLE_CART_HIDDEN
})

export const addItemToCart = item => ({
    type: CartActionsType.ADD_ITEM_TO_CART,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionsType.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = item => ({
    type: CartActionsType.REMOVE_ITEM,
    payload: item
})

export const updateCartItem = item => ({
    type: CartActionsType.UPDATE_ITEM_FROM_CART,
    payload: item
})