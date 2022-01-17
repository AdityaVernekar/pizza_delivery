import Image from "next/image";

function PizzaCard() {
  return (
    <div className="w-[100%] lg:w-[22%] px-10 py-[40px] flex items-center justify-center flex-col hover:bg-gray-100 rounded-xl cursor-pointer mt-5 hover:shadow-md hover:shadow-red-300/50">
      <div className="relative h-[150px] w-[150px] p-3 ">
        <Image src="/img/pizza.png" layout="fill" />
      </div>
      <p className="text-lg font-bold text-red-500 truncate p-1">Mageritta Pizza</p>
      <p className="text-lg font-semibold">$20</p>
      <p className="text-center text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vero a excepturi quod
      </p>
    </div>
  );
}

export default PizzaCard;
