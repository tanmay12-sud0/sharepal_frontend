import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AllProducts from "./product/Allproduct";

const CONSTANTS = require("../cssVariables").default;

function Home() {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  const style = {
    "background-color": CONSTANTS.shadowText,
    color: CONSTANTS.background,
    "letter-spacing": "4px",
    width: "80vw",
  };

useEffect(() => {

}, []);

  return (
    <div
      style={{
        display: "grid",
        "place-items": "center",
      }}
    >
     <AllProducts />
    </div>
  );
}

export default Home;
