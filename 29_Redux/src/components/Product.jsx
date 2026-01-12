import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/productAction';

const Product = () => {

    const product = useSelector(state => state.productReducer.product);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            id: 1,
            name: 'Mohit'
        }))
    }
    console.log(product);
    return (
        <div>
            <button onClick={() => handleAddToCart()}>Product</button>
            <h4>{JSON.stringify(product)}</h4>
        </div>
    )
}

export default Product