import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider";

export default function Home({ pizzaList, admin }) {
  const [closed, setClosed] = useState(true);
  return (
    <div>
      <Head>
        <title>Pizza Delivery in Goa</title>
        <meta name="description" content="Pizza Delivery in Goa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      {admin && <AddButton setClosed={setClosed} />}
      <PizzaList pizzaList={pizzaList} />
      {!closed && <Add setClosed={setClosed} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
