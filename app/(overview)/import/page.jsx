import React from "react";
import { Metadata } from "next";
import ImportCoutries from "../../ui/exp-imp/importCoutries";

export const metadata = {
  title: "DTL -Import",
  description: "Georgia's Export - Import 2023",
};

const page = () => {
  return (
    <div>
      <ImportCoutries />
    </div>
  );
};

export default page;
