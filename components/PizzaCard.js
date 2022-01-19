import Image from "next/image";
import Link from "next/link";

function PizzaCard({ pizza }) {
  return (
    <Link href={`/product/${pizza._id}`}>
      <div className="w-[100%] lg:w-[22%] px-10 py-[40px] flex items-center justify-center flex-col hover:bg-gray-100 rounded-xl cursor-pointer mt-5 hover:shadow-md hover:shadow-red-300/50">
        <div className="relative h-[150px] w-[150px] p-3 ">
          <Image src={pizza.img} layout="fill" />
        </div>
        <p className="text-lg font-bold text-red-500 truncate p-1">{pizza.title} Pizza</p>
        <p className="text-lg font-semibold">${pizza.prices[1]}</p>
        <p className="text-center text-gray-500">{pizza.desc}</p>
      </div>
    </Link>
  );
}

export default PizzaCard;
