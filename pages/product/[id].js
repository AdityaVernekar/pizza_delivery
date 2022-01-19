import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

function Product({ pizza }) {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  console.log(quantity);
  return (
    <div className="flex  h-screen  ">
      {/* Left container */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative h-[70%] w-[70%]">
          <Image src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      {/* Right container */}
      <div className="flex-1 p-5 mt-10 flex flex-col  justify-start">
        <h1 className="text-4xl font-bold">{pizza.title}</h1>
        <span className="py-3 font-semibold text-lg text-red-500">${price}</span>
        <p className="text-lg">{pizza.desc}</p>

        <p className="font-bold text-lg py-3">Choose the size</p>
        <div className="flex items-center justify-between w-[80%] lg:w-[40%] ">
          <div
            className={`relative h-8 w-8 cursor-pointer  ${
              size == 0 ? `bg-red-400 rounded-full` : `outline-none`
            }`}
            onClick={() => handleSize(0)}
          >
            <Image src="/img/size.png" layout="fill" />
            <span className="absolute top-[-5px] right-[-20px] bg-teal-500 text-white rounded-xl px-[5px] text-xs cursor-pointer">
              Small
            </span>
          </div>
          <div
            className={`relative h-14 w-14 cursor-pointer ${
              size == 1 ? `bg-red-400 rounded-full` : `outline-none`
            } `}
            onClick={() => handleSize(1)}
          >
            <Image src="/img/size.png" layout="fill" />
            <span className="absolute top-[-5px] right-[-20px] bg-teal-500 text-white rounded-xl px-[5px] text-xs cursor-pointer">
              Medium
            </span>
          </div>
          <div
            className={`relative h-20 w-20 cursor-pointer ${
              size == 2 ? `bg-red-400 rounded-full` : `outline-none`
            } `}
            onClick={() => handleSize(2)}
          >
            <Image src="/img/size.png" layout="fill" />
            <span className="absolute top-[-5px] right-[-20px] bg-teal-500 text-white rounded-xl px-[5px] text-xs ">
              Large
            </span>
          </div>
        </div>
        <h3 className="text-xl text-gray-700 mb-3 font-semibold">Choose Additional Toppings</h3>
        <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-3 ">
          {pizza.extraOptions.map((options) => (
            <div className="flex items-center justify-center " key={options._id}>
              <input
                type="checkbox"
                name={options.text}
                id={options.text}
                onChange={(e) => handleChange(e, options)}
                className="w-5 h-5 mr-2"
              />
              <label htmlFor={options.text}>{options.text}</label>
            </div>
          ))}
        </div>
        <div className=" rounded-lg p-4 mt-4">
          <label htmlFor="quantity">Choose Quantity:</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            defaultValue={1}
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            maxLength={20}
            className="outline-none w-10 h-5 ml-5 font-semibold text-center rounded-xl text-red-500 "
          />
          <button
            className="bg-red-500 rounded-xl p-2 ml-2 text-white active:scale-90 transition-all duration-200 ease-out"
            onClick={handleClick}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);

  return {
    props: {
      pizza: res.data,
    },
  };
};
export default Product;
