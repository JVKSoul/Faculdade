import React from "react";
import { IProduct } from "../../mock/interface";
import { Link } from "react-router-dom";

interface IPropsProduct {
  product: IProduct;
  id: string;
}

const Product: React.FC<IPropsProduct> = ({ product, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="w-36 h-96 hover:scale-110 transition-all flex flex-col items-start">
        <div className="w-40 h-40 flex justify-start items-center">
          <img height={145} width={145} src={`${product.thumb}`} />
        </div>
        <p className="text-xs text-slate-100 font-semibold">{product.name}</p>
        <p className="text-[0.63rem] text-green-600">À vista</p>
        <p className="text-lg text-green-600 font-bold">R$ {product.price}</p>
        <p className="text-[0.63rem] text-slate-100">no PIX com 15% desconto</p>
        <div className="border-t border-red-600 mb-1 mt-2 w-10"></div>
        <p className="text-xs text-red-600 font-bold">
          R$ {(product.price * 1.15).toFixed(2)}
        </p>
        <p className="text-xs">
          em até 12x de{" "}
          <p className="text-red-600 font-bold">
            R$ {((product.price * 1.15) / 12).toFixed(2)}
          </p>{" "}
          sem juros no cartão
        </p>
      </div>
    </Link>
  );
};

export default Product;
