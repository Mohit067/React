import { ADD_TO_CART, INCREMENT } from "../constants/productConstant"

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}
export const increment = () => {
    return {
        type: INCREMENT,
    }
}