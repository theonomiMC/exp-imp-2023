import React from "react";
import Resources from "../ui/resources/Resources";

export const metadata = {
  title: "DTL - Resources",
  description: "Website Resources information.",
};
const page = () => {
  return (
    <div className="pageContainer">
      <Resources />
    </div>
  );
};

export default page;
