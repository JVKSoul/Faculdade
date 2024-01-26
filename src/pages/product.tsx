import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FAKE_DATA from "../../mock/FAKE_DATA";
import { IProduct } from "../../mock/interface";
import cart from "../assets/cart.png";

const Product = () => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();

  useEffect(() => {
    setProduct(FAKE_DATA.find((product) => product.id === id));
  }, []);
  
  useEffect(() => {
    document.title = `${product ? product.name : "Carregando..."}`;
  }, [product]);
  
  return (
    <div className="bg-zinc-900  min-h-screen flex flex-col justify-start items-center">
      <div className="flex xl:flex-row 2xl:flex-row items-center justify-center flex-col w-4/5 gap-12 mt-24">
        <div className="w-4/5 lg:w-[30.375rem] 2xl:w-[30.375rem] xl:w-[30.375rem] lg:h-[30.375rem] 2xl:h-[30.375rem] xl:h-[30.375rem] flex justify-start items-center">
          <img
            className="w-4/5 lg:w-[30.375rem] 2xl:w-[30.375rem] xl:w-[30.375rem]"
            src={`${product?.thumb}`}
          />
        </div>
        <div className="flex flex-col items-start justify-around w-full">
          <h1 className="text-3xl">{product?.name}</h1>
          <div className="w-4/5 self-center flex xl:flex-row 2xl:flex-row gap-10 2xl:gap-0 xl:gap-0 flex-col justify-between items-center">
            <div className="flex flex-col">
              <p className="text-xl text-green-600">À vista</p>
              <p className="text-xl text-green-600 font-bold">
                R$ {product?.price}
              </p>
              <p className="text-xl text-slate-100">no PIX com 15% desconto</p>
              <div className="border-t border-red-600 mb-1 mt-2 w-10"></div>
              <p className="text-xl text-red-600 font-bold">
                R$ {product && (product?.price * 1.15).toFixed(2)}
              </p>
              <p className="text-xl flex">
                em até 12x de
                <p className="text-red-600 text-xl font-bold">
                  R$ {product && ((product?.price * 1.15) / 12).toFixed(2)}
                </p>
              </p>
              <p className="text-xl text-white font-normal">
                sem juros no cartão
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <button className="bg-green-600 py-3 px-10 rounded-xl">
                <p className="text-xl bold">COMPRAR</p>
              </button>
              <button className="bg-green-600 py-3 px-5 rounded-xl flex gap-6 items-center ">
                <img src={`${cart}`} width={40} height={40} alt="" />
                <p className="text-xl bold">Adicionar ao carrinho</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flexitems-center justify-center flex-col w-4/5 gap-12 mt-24">
        <p className="text-2xl self-start font-bold">
          Características/construção do produto
        </p>
        <div className="border-t-2 border-red-600 mb-1 mt-2 w-10"></div>
        <p className="text-xl ">{product?.description}</p>
        <p className="text-2xl font-bold mt-5">Outras imagens do produto</p>
        <div className="border-t-2 border-red-600 mb-1 mt-2 w-10"></div>
      </div>
      <div className="w-4/5 mx-auto justify-center flex flex-row flex-wrap gap-5 mt-10 mb-12">
        {product?.photos.map((image, index) => {
            return(
              <img src={image} key={index}/>
            )
        })}

      </div>
    </div>
  );
};

export default Product;
