import { useEffect, useState } from "react";
import Product from "../components/product";
import FAKE_DATA from "../../mock/FAKE_DATA";
import { IProduct } from "../../mock/interface";
import promotionFirstPageImage from "../assets/promotionFirstPageImage.png";

const Home = () => {
  const [productArray, setProductArray] = useState<IProduct[]>();
  const [newProductArray, setNewProductArray] = useState<IProduct[]>();

  useEffect(() => {
    setNewProductArray([...FAKE_DATA]);
    setProductArray([...FAKE_DATA, ...FAKE_DATA]);
  }, []);

  return (
    <div className="bg-zinc-900  min-h-screen flex flex-col justify-center">
      <div
        className="w-full h-[40rem] bg-cover bg-center flex items-start justify-center"
        style={{ backgroundImage: `url(${promotionFirstPageImage})` }}
      >
        <div className="bg-black/[.4] text-center px-10 py-5 mt-16 flex flex-col gap-5">
          <h1 className="text-4xl">ESPECIAL</h1>
          <h1 className="text-4xl">PROMOÇÃO DE FÉRIAS</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-10">
        <h2 className="self-start ml-32 text-2xl">Produtos novo e lançamentos</h2>
        <div className='self-start ml-32 border-t-2 border-red-600 mb-1 mt-2 w-24'></div>
        <div className="w-4/5 mx-auto flex flex-row flex-wrap gap-5 mt-10">
          {newProductArray &&
            newProductArray.map((product) => {
              return (
                <Product key={product.id} id={product.id} product={product as unknown as IProduct} />
              );
            })}
        </div>
        <h2 className="self-start ml-32 text-2xl">Outros produtos</h2>
        <div className='self-start ml-32 border-t-2 border-red-600 mb-1 mt-2 w-24'></div>
        <div className="w-4/5 mx-auto flex flex-row flex-wrap gap-5 mt-10">
          {productArray &&
            productArray.map((product) => {
              return (
                <Product key={product.id} id={product.id} product={product as unknown as IProduct} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
