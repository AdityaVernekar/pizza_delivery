import axios from "axios";
import Image from "next/image";

function Order({ order }) {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return "done";
    if (index - status === 1) return "inProg";
    if (index - status > 1) return "undone";
  };
  return (
    <div className="flex h-full flex-col xl:flex-row p-[40px] items-center ">
      {/* left */}
      <div className="flex-auto">
        <div className="py-5">
          <table className="grid grid-cols-2">
            <thead className="flex flex-col  space-y-2">
              <th className="th">Order ID</th>
              <th className="th">Customer</th>
              <th className="th">Address</th>
              <th className="th">Total</th>
            </thead>
            <tr className="flex flex-col space-y-3">
              <td className="td text-red-500 uppercase text-xl break-normal">{order._id}</td>
              <td className="td">
                <span className="font-bold opacity-70 hover:opacity-100 text-lg">
                  {order.customer}
                </span>
              </td>
              <td className="td">
                <span className="text-sm">{order.address}</span>
              </td>
              <td className="td">
                <span className="text-red-500 hover:font-bold text-2xl">${order.total}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="flex justify-around flex-col lg:flex-row space-y-3">
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} objectFit="contain" />
            <span>Payment</span>
            <div>
              <Image src="/img/checked.png" width={20} height={20} className="checked" />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} objectFit="contain" />
            <span>Preparing</span>
            <div>
              <Image src="/img/checked.png" width={20} height={20} className="checked" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} objectFit="contain" />
            <span>On the way</span>
            <div>
              <Image src="/img/checked.png" width={20} height={20} className="checked" />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} objectFit="contain" />
            <span>Delivered</span>
            <div>
              <Image src="/img/checked.png" width={20} height={20} className="checked" />
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex-1 p-9 max-h-[300px] bg-gray-800 text-white rounded-xl my-5 max-w-max  items-center justify-center group ">
        <div className="flex flex-col space-y-3 items-center justify-start">
          <h2 className="text-center text-2xl uppercase font-bold group-hover:text-red-500 transition duration-200 ">
            Cart Total
          </h2>
          <div>
            <p className="space-x-5">
              <b>Subtotal:</b>
              <span>{order.total}</span>
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
              <span>{order.total}</span>
            </p>
          </div>
          <button
            disabled
            className="bg-white rounded-xl p-2 mt-9 text-teal-500 active:scale-90 transition-all duration-200 ease-out w-80 bg-opacity-80 hover:bg-opacity-100 cursor-not-allowed "
          >
            Paid!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);

  return {
    props: {
      order: res.data,
    },
  };
};
