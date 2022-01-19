import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider";

export default function Home({ pizzaList }) {
  return (
    <div>
      <Head>
        <title>Pizza Delivery in Goa</title>
        <meta name="description" content="Pizza Delivery in Goa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
    },
  };
};
