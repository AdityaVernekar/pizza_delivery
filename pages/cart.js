import Image from "next/image";

function Cart() {
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
          <tr>
            <td className="td">
              <div className="relative h-20 w-20">
                <Image src="/img/pizza.png" layout="fill" objectFit="contain" />
              </div>
            </td>
            <td className="td text-red-500 uppercase text-xl">CORALZO</td>
            <td className="td">
              <span className="word-wrap">Extra Cheese,Spicy sauce</span>
            </td>
            <td className="td">
              <span className="font-bold opacity-70 hover:opacity-100 text-lg">$20.00</span>
            </td>
            <td className="td">
              <span>2</span>
            </td>
            <td className="td">
              <span className="text-red-500 font-bold opacity-70 hover:opacity-100 text-lg">
                $40.00
              </span>
            </td>
          </tr>
          <tr>
            <td className="td">
              <div className="relative h-20 w-20">
                <Image src="/img/pizza.png" layout="fill" objectFit="contain" />
              </div>
            </td>
            <td className="td text-red-500 uppercase text-xl">CORALZO</td>
            <td className="td">
              <span className="word-wrap">Extra Cheese,Spicy sauce</span>
            </td>
            <td className="td">
              <span className="font-bold opacity-70 hover:opacity-100 text-lg">$20.00</span>
            </td>
            <td className="td">
              <span>2</span>
            </td>
            <td className="td">
              <span className="text-red-500 font-bold opacity-70 hover:opacity-100 text-lg">
                $40.00
              </span>
            </td>
          </tr>
          <tr>
            <td className="td">
              <div className="relative h-20 w-20">
                <Image src="/img/pizza.png" layout="fill" objectFit="contain" />
              </div>
            </td>
            <td className="td text-red-500 uppercase text-xl">CORALZO</td>
            <td className="td">
              <span className="word-wrap">Extra Cheese,Spicy sauce</span>
            </td>
            <td className="td">
              <span className="font-bold opacity-70 hover:opacity-100 text-lg">$20.00</span>
            </td>
            <td className="td">
              <span>2</span>
            </td>
            <td className="td">
              <span className="text-red-500 font-bold opacity-70 hover:opacity-100 text-lg">
                $40.00
              </span>
            </td>
          </tr>
        </table>
      </div>
      {/* right */}
      <div className="flex-1 p-10 max-h-[300px] bg-gray-200  rounded-xl my-5  ">
        <div className="flex flex-col space-y-3 items-center justify-start">
          <h2 className="text-center text-2xl hover:underline uppercase font-bold">Cart Total</h2>
          <div>
            <p className="space-x-5">
              <b>Subtotal:</b>
              <span>$100.00</span>
            </p>
          </div>
          <div>
            <p className="space-x-5">
              <b>Discount:</b>
              <span>$20.00</span>
            </p>
          </div>
          <div>
            <p className="space-x-5">
              <b>Total:</b>
              <span>$80.00</span>
            </p>
          </div>
          <button className="bg-red-500 rounded-xl p-2 mt-9 text-white active:scale-90 transition-all duration-200 ease-out w-80 bg-opacity-80 hover:bg-opacity-100 ">
            Checkout Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
