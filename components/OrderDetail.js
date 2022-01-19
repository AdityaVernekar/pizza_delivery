import { useState } from "react";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState(null);
  const [address, setAddress] = useState(null);
  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-gray-400/40 z-50">
      <div className="bg-white w-[500px] rounded-lg p-[50px] flex justify-items-center flex-col space-y-4">
        <h1 className="text-center text-2xl font-semibold">You will pay $12 after delivery</h1>
        <div>
          <label htmlFor="name" className="p-2 font-semibold">
            Name Surname :
          </label>
          <input
            type="text"
            name="name"
            id=""
            value={customer}
            className=" p-2 w-full border-b focus:outline-none"
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="p-2 font-semibold">
            Phone :
          </label>
          <input
            type="number"
            name="phone"
            maxLength={10}
            id=""
            // value={}
            className=" p-2 w-full border-b focus:outline-none"
            // onChange={(e) => setCustomer(e.target.value)}
            placeholder="+91(XXX)XXX-XXXX"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="p-2 font-semibold">
            Address :
          </label>
          <input
            type="text"
            name="address"
            id=""
            value={address}
            className=" p-2 w-full border-b focus:outline-none"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
        </div>
        <button
          className="bg-red-500 p-2 rounded-xl text-white font-bold opacity-80 hover:opacity-100 active:scale-95 transition duration-200 ease-out"
          onClick={handleClick}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
