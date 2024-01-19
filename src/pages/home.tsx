import React, { useEffect, useState } from "react";
import Product from "../components/product";
import FAKE_DATA from "../../mock/FAKE_DATA";
import { IProduct } from "../../mock/interface";

const Home = () => {
  const [productArray, setProductArray] = useState<IProduct[]>();

  useEffect(() => {
    setProductArray(FAKE_DATA);
  });
  
  return (
    <div className="bg-zinc-900  min-h-screen">
      <div className="w-4/5 mx-auto flex flex-row flex-wrap gap-5">
        {productArray &&
          productArray.map((product, index) => {
            return (
              <Product key={index} product={product as unknown as IProduct} />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
