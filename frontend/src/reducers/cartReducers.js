import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../actions/actionTypes'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM: {
            const item = action.payload

            const itemExisting = state.cartItems.find(i => i.product === item.product)

            if (itemExisting) {
                const updatedCartItems = state.cartItems.map(i => i.product === item.product ? item : i)

                return {
                    ...state,
                    cartItems: updatedCartItems
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        }

        case CART_REMOVE_ITEM: {
            const id = action.payload

            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.product !== id)
            }
        }

        default: {
            return state
        }
    }
}