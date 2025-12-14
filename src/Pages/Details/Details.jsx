import { useParams } from "react-router";
import axios from "axios";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [productInfo, setproductInfo] = useState([]);
  const [orderCount, setOrderCount] = useState(1);
  const {
    _id,
    name,
    category,
    price,
    quantity,
    features,
    specifications,
    description,
    imageURL,
  } = productInfo;

  useState(()=> {
    axios
      .get(`${import.meta.env.VITE_API_URL}/product/${id}`)
      .then((res) => setproductInfo(res.data));
  }, [setproductInfo])

  
  return (
    <div>
      <div className="bg-white w-full lg:w-4/6 xl:max-w-7/12 mx-auto rounded-sm mt-6 shadow-md py-12 px-3 lg:px-12 flex flex-col lg:flex-row justify-center gap-8">
        <div className="h-80 w-full lg:w-80 border-2 p-4">
          <img className="h-full w-full" src={imageURL} />
        </div>
        <div className="w-full lg:w-2/3 space-y-2 pl-2">
          <h2 className="text-black text-2xl font-semibold">{name}</h2>
          <p className="text-lg font-semibold text-green-600">
            Price: <span className="text-green-600">{price} ৳</span>
          </p>
          <p className="text-sm">category: {category}</p>
          <h2 className="text-xl font-medium text-black mb-[-1px] mt-2">
            Features
          </h2>
          <ul className="list-disc text-gray-700 pl-5">
            {features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="mt-3">
            {quantity >= 1 ? (
              <div>
                <span className="border-2 border-green-500 bg-green-100 rounded-full px-1.5 py-0.5 text-sm">
                  {quantity} pics available
                </span>
              </div>
            ) : (
              <span className="border-2 border-red-500 bg-red-100 rounded-full px-1.5 py-0.5 text-sm">
                Out Of Stock
              </span>
            )}
          </div>
          <div className="flex items-center mt-6 gap-5">
            <div className="border-2 flex justify-center items-center gap-2">
              {orderCount > 1 ? (
                <button
                  onClick={() => setOrderCount(orderCount - 1)}
                  className="p-1 cursor-pointer hover:bg-gray-300 border-r-2 text-2xl"
                >
                  -
                </button>
              ) : (
                <button
                  disabled
                  className="p-1 cursor-pointer hover:bg-gray-300 text-gray-400 border-r-2 text-2xl"
                >
                  -
                </button>
              )}

              <p className="p-2">{orderCount}</p>
              <button
                onClick={() => setOrderCount(orderCount + 1)}
                className="p-1 cursor-pointer hover:bg-gray-300 border-l-2 text-2xl"
              >
                +
              </button>
            </div>
            <button className="flex justify-center items-center gap-3 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-lg font-medium cursor-pointer">
              <IoCartOutline className="text-xl" /> Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* specifications */}
      <div className="bg-white w-full lg:w-4/6 xl:max-w-7/12 mx-auto rounded-sm mb-10 shadow-md py-6 px-4 lg:px-12 gap-12 mt-6">
        <h3 className="text-lg font-medium text-black text-left mb-2">
          Specification
        </h3>
        {specifications &&
          Object.entries(specifications)?.map(([key, value]) => (
            <div className="flex">
              <div className="bg-gray-100 py-1 w-1/3 lg:w-3/12 pl-2 lg:pl-6 mb-1">
                {key}
              </div>
              <div className="bg-gray-200 py-1 w-9/12 pl-2 lg:pl-6 mb-1">
                {value}
              </div>
            </div>
          ))}
        <hr className="my-6" />
        {/* Description */}
        <div>
          <h3 className="text-lg font-medium text-black text-left mb-2">
            Description
          </h3>
          <p className="text-sm text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
