import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderDetail from "../components/OrderDetail";
import { reset } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const amount = cart.total;
  const [cash, setCash] = useState(false);

  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex py-[40px] px-5 flex-col xl:flex-row">
      {/* left */}
      <div className="flex-auto">
        <table className="" style={{ borderSpacing: "20px" }}>
          <tr className="">
            <th className="th">Product</th>
            <th className="th">Name</th>
            <th className="th">Extras</th>
            <th className="th">Price</th>
            <th className="th">Quantity</th>
            <th className="th">Total</th>
          </tr>
          {cart.products.length > 0 ? (
            cart.products.map((product) => (
              <tbody key={product._id}>
                <tr>
                  <td className="td">
                    <div className="relative h-20 w-20">
                      <Image src={product.img} layout="fill" objectFit="contain" />
                    </div>
                  </td>
                  <td className="td text-red-500 uppercase text-xl">{product.title}</td>
                  <td className="td">
                    <span className="word-wrap">
                      {product.extras.map((extra) => (
                        <span>{extra.text},</span>
                      ))}
                    </span>
                  </td>
                  <td className="td">
                    <span className="font-bold opacity-70 hover:opacity-100 text-lg">
                      ${product.price}
                    </span>
                  </td>
                  <td className="td">
                    <span>{product.quantity}</span>
                  </td>
                  <td className="td">
                    <span className="text-red-500 font-bold opacity-70 hover:opacity-100 text-lg">
                      ${product.price * product.quantity}
                    </span>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <div className="w-full h-screen absolute top-0 left-0 flex items-center justify-center bg-gray-400/40 ">
              <h1 className="text-center text-3xl text-red-500 font-semibold">Cart is Empty </h1>
            </div>
          )}
        </table>
      </div>
      {/* right */}
      <div className="flex-1 p-10 max-h-[300px] bg-gray-200  rounded-xl my-5  ">
        <div className="flex flex-col space-y-3 items-center justify-start">
          <h2 className="text-center text-2xl hover:underline uppercase font-bold">Cart Total</h2>
          <div>
            <p className="space-x-5">
              <b>Subtotal:</b>
              <span>${cart.total}</span>
            </p>
          </div>
          <div>
            <p className="space-x-5">
              <b>Discount:</b>
              <span>$0.00</span>
            </p>
          </div>
          <div>
            <p className="space-x-5">
              <b>Total:</b>
              <span>${cart.total}</span>
            </p>
          </div>
          <button
            className="bg-red-500 rounded-xl p-2 mt-9 text-white active:scale-90 transition-all duration-200 ease-out w-80 bg-opacity-80 hover:bg-opacity-100 "
            onClick={() => setCash(true)}
          >
            Checkout Now!
          </button>
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
}

export default Cart;
