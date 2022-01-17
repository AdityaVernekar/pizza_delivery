import PizzaCard from "./PizzaCard";

function PizzaList() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-gray-800 text-5xl font-bold py-2 mt-4 text-center">
        We Sell the Best Pizza In Town!
      </h1>
      <div className="text-gray-600 text-center px-5 text-xl mt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis hic modi incidunt quos
        laboriosam asperiores vero ratione voluptatum soluta natus, exercitationem neque rem maiores
        reprehenderit repellat. Laborum sapiente delectus ab saepe, reiciendis modi voluptate
        expedita, eligendi vitae nulla cumque optio voluptatem neque tenetur quidem quae consectetur
        sit! Nesciunt, sint atque.
      </div>
      <div className="lg:flex items-center lg:flex-wrap w-full justify-center px-10 grid grid-cols-1 md:grid-cols-3 place-items-center">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList;
