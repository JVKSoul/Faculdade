import React, { useEffect, useState } from "react";
import Product from "../components/product";
import FAKE_DATA from "../../mock/FAKE_DATA";
import { IProduct } from "../../mock/interface";
import promotionFirstPageImage from "../assets/promotionFirstPageImage.png"

const Home = () => {
  const [productArray, setProductArray] = useState<IProduct[]>();

  useEffect(() => {
    setProductArray(FAKE_DATA);
  });
  
  return (
    <div className="bg-zinc-900  min-h-screen flex flex-col justify-center">
      <div className="w-full h-[40rem] bg-cover bg-center flex items-start justify-center" style={{backgroundImage: `url(${promotionFirstPageImage})`}}>
        <div className="bg-black/[.4] text-center px-10 py-5 mt-16 flex flex-col gap-5">
          <p className="text-4xl">ESPECIAL</p>
          <p className="text-4xl">PROMOÇÃO DE FÉRIAS</p>
        </div>
      </div>
      <div className="w-4/5 mx-auto flex flex-row flex-wrap gap-5 mt-32">
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
