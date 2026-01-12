import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/actions/productAction';

const Increment = () => {
    const count = useSelector(state => state.productReducer.count);
    
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    }
    console.log(count);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Increment