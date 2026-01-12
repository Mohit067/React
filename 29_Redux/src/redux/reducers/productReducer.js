import { ADD_TO_CART, INCREMENT } from "../constants/productConstant"

const initialState = {
    product: [],
    count: 0
}

const productReducer = (state = initialState, action) => {
    if(action.type === ADD_TO_CART){
        return {
            ...state,
            product: [...state.product, action.payload]
        }
    } else if(action.type === INCREMENT){
    return {
        ...state,
        count: state.count+1
    }
    } else {
        return state
    }
}

export { productReducer }