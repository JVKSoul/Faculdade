import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../mock/interface";
import FAKE_DATA from "../../mock/FAKE_DATA";
import Product from "../components/product";

const ProductFilter = () => {
    const [products, setProducts] = useState<IProduct[]>();
    const { filter } = useParams();

    useEffect(() => {
        setProducts([])
        setProducts(FAKE_DATA.filter((product) => product.filter.includes(`${filter}`)));
    }, [filter]);

    useEffect(() => {
      document.title = `${filter?.toUpperCase()  === "COMPUTER"? "Computador" : filter?.toUpperCase() === "PERIPHERALS" ? "Periféricos" : filter?.toUpperCase() === "HARDWARE" ? "Hardware" : "Carregando..."}`;
    }, [filter]);

  return (
    <div className="bg-zinc-900  min-h-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center py-10">
        <h2 className="self-start ml-32 text-2xl">{filter?.toUpperCase()  === "COMPUTER"? "Computador" : filter?.toUpperCase() === "PERIPHERALS" ? "Periféricos" : filter?.toUpperCase() === "HARDWARE" ? "Hardware" : "CARREGANDO..."}</h2>
        <div className='self-start ml-32 border-t-2 border-red-600 mb-1 mt-2 w-24'></div>
        <div className="w-4/5 mx-auto flex flex-row flex-wrap gap-5 mt-10">
          {products &&
            products.map((product) => {
              return (
                <Product key={product.id} id={product.id} product={product as unknown as IProduct} />
              );
            })}
        </div>
      </div>
    </div>
  )
}

export default ProductFilter