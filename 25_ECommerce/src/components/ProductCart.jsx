import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductCart({item}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${item.id}`);
  }

  return (
        <div
          className=" group
            bg-white
            rounded-2xl
            p-4
            shadow-md
            hover:shadow-xl
            hover: cursor-pointer
            transition-all
            duration-300
            flex
            flex-col
          "
          onClick={handleNavigate}
        >
          {/* Image */}
          <div className="h-40 flex items-center justify-center mb-3 hover:scale-75 transition-all duration-200">
            <img
              src={item.image}
              alt={item.title}
              className="h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 grow">
            <h1 className="line-clamp-2 text-lg font-semibold text-gray-800 hover:text-blue-500">
              {item.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
                ⭐ {item.rating.rate}
              </span>
              <span>({item.rating.count})</span>
            </div>

            {/* Price */}
            <div className="mt-auto text-xl font-bold text-[#1b323b]">
              ₹ {item.price}
            </div>
          </div>
        </div>
      );
}

export default ProductCart