import React from "react";
import { getCountries } from "../lib/actions";
import Sort from "../ui/Sort";
import Countries from "../ui/countries/Countries";
export const metadata = {
  title: "GTrade - Countries",
  description: "Georgia's Tradecoun Partners",
};

const page = async () => {
  const data = await getCountries();

  return (
    <div className="pageContainer">
      <h1 className="centered">COUNTRIES</h1>
      <Sort />
      <Countries data={data} />
    </div>
  );
};

export default page;
