import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

function SngleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const fetchData = async () => {
        setIsLoading(true)
        const response = await axios(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setIsLoading(false);
    };
    // console.log(product);    

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) return <Loader /> // show loader while your data is fetching
    return (
        <>
            <button className="text-white m-4" onClick={handleGoBack}>Go Back</button>
            <div className="flex flex-col gap-12">
                {/* Image */}
                <div className="flex items-center justify-center mt-12">
                    <img
                        src={product.image}
                        alt={product.title}
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 grow items-center">
                    <h1 className="text-2xl font-semibold text-gray-800 items-center justify-center">
                        {product.title}
                    </h1>
                    <h1 className="text-3xl font-semibold text-black items-center justify-center m-2">
                        Category : {product.category}
                    </h1>
                    <p className="text-xl">{product.description}</p>
                    {/* Rating */}
                    <div className="flex flex-row gap-6 items-center bg-white-500 shadow-2xl p-2 rounded-md">
                        <div className="flex flex-col items-center gap-2 mt-3 text-sm text-gray-600">
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                ⭐ {product.rating?.rate}
                            </span>
                            <span>({product.rating?.count})</span>
                        </div>

                        {/* Price */}
                        <div className="mt-auto text-4xl font-bold text-[#1b323b]">
                            ₹ {product.price}
                        </div>
                    </div>
                </div>

            </div>;
        </>
    )
}

export default SngleProduct;
