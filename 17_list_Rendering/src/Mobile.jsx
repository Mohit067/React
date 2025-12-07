import React from "react";

function Mobile({ photo, details }) {
  console.log(details);

  return (
    // main container
    <div className=" mx-auto flex gap-30 p-4 border rounded-xl shadow-md bg-white">
        {/* image left side */}
      <img src={details.image} alt="" className="w-40 h-40 m-6 p-4" />
        {/* right side content */}
      <div className="flex flex-col w-full">
        <h1 className="text-xl font-semibold text-gray-800">{details.title}</h1>
        
        <span className="text-sm text-gray-600 mb-2">
          ⭐ {details.rating} | {details.reviews}
        </span>

        <div className="flex justify-between items-start mt-2">
          <div className="w-2/3">
            {details.details.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-sm text-gray-700 list-disc ml-5"
                >
                  {item}
                </li>
              );
            })}
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">{details.price}</p>
            <p className="text-sm text-gray-500 line-through">
              {details.originalPrice}
            </p>
            <p className="text-sm text-red-500 font-medium">
              {details.discount}
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm text-blue-700 font-medium">
          {details.offers.exchangeOffer}
        </p>

        <p className="text-sm text-purple-700 font-medium">
          {details.offers.bankOffer}
        </p>
      </div>
    </div>
  );
}

export default Mobile;
