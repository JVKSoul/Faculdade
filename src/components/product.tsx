import React from 'react'
import { IProduct } from "../../mock/interface";

interface IPropsProduct {
  product: IProduct
}

const Product:React.FC<IPropsProduct> = ({product}) => {
  return (
    <div className='w-36 h-96 '>
        <img height={145} width={145} src={`${product.thumb}`}/>
        <p className='text-xs text-slate-100 font-semibold'>{product.name}</p>
        <p className='text-[0.63rem] text-green-600'>À vista</p>
        <p className='text-lg text-green-600 font-bold'>R$ {product.price}</p>
        <p className='text-[0.63rem] text-slate-100'>no PIX com 15% desconto</p>
        ----------
        <p className='text-xs text-red-600 font-bold'>R$ 541,14</p>
        <p className='text-xs'>em até 12x de <p className='text-red-600 font-bold'>R$18,62</p> sem juros no cartão</p>

    </div>
  )
}

export default Product