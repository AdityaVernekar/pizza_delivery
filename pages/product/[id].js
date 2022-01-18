import Image from "next/image";
import { useState } from "react";

function Product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };
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
        <h1 className="text-4xl font-bold">{pizza.name}</h1>
        <span className="py-3 font-semibold text-lg text-red-500">${pizza.price[size]}</span>
        <p className="text-lg">{pizza.desc}</p>

        <p className="font-bold text-lg py-3">Choose the size</p>
        <div className="flex items-center justify-between w-[80%] lg:w-[40%] ">
          <div
            className={`relative h-8 w-8 cursor-pointer  ${
              size == 0 ? `bg-red-400 rounded-full` : `outline-none`
            }`}
            onClick={() => setSize((val) => (val = 0))}
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
            onClick={() => setSize((val) => (val = 1))}
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
            onClick={() => setSize((val) => (val = 2))}
          >
            <Image src="/img/size.png" layout="fill" />
            <span className="absolute top-[-5px] right-[-20px] bg-teal-500 text-white rounded-xl px-[5px] text-xs ">
              Large
            </span>
          </div>
        </div>
        <h3 className="text-xl text-gray-700 mb-3 font-semibold">Choose Additional Toppings</h3>
        <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-3 ">
          <div className="flex items-center justify-center ">
            <input type="checkbox" name="double" id="double" className="w-5 h-5 mr-2" />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className="flex items-center justify-center">
            <input type="checkbox" name="extracheese" id="extracheese" className="w-5 h-5 mr-2" />
            <label htmlFor="extracheese" className="">
              Extra Cheese
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input type="checkbox" name="spicysauce" id="spicysauce" className="w-5 h-5 mr-2" />
            <label htmlFor="spicysauce">Spicy sauce</label>
          </div>
          <div className="flex items-center justify-center">
            <input type="checkbox" name="garlicsauce" id="garlicsauce" className="w-5 h-5 mr-2" />
            <label htmlFor="garlicsauce">Garlic sauce</label>
          </div>
        </div>
        <div className=" rounded-lg p-4 mt-4">
          <label htmlFor="quantity">Choose Quantity:</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            defaultValue={1}
            maxLength={20}
            className="outline-none w-10 h-5 ml-5 font-semibold text-center rounded-xl text-red-500 "
          />
          <button className="bg-red-500 rounded-xl p-2 ml-2 text-white active:scale-90 transition-all duration-200 ease-out">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
