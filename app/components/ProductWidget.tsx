import React, { FC } from 'react'
import { IoAddCircle } from "react-icons/io5";
import { IProduct } from '../Toolbox/Interfaces/interfaces';
import { useOrderStore } from '../stores/orderStorage';


interface productItemProp {
  product: IProduct;
}

 const ProductWidget: FC<productItemProp> = ({
  product,
}) => {
  const url = "https://res.cloudinary.com/zinedine-fernando-herrera/image/upload/v1697334310/fnprwqehecx7th0okbgh.jpg";

  const add = useOrderStore().addOrders;
  

  return (
    <div className='hover:-translate-y-1 hover:scale-110 duration-300 rounded-t-2xl  rounded-2xl shadow-lg cursor-pointer'
      onClick={()=>add(product)}
    >
      <div className='h-48 bg-slate-800 rounded-t-2xl rounded-tl-2xl'  style={{position: 'relative', backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
        <IoAddCircle color='#48515e' style={{ position: 'absolute', right: '8px', bottom: '8px'}} size={36} />
      </div>
      <div className='h-16  px-2 flex justify-between w-full'>
        <div>
        <h3 className='font-bold ' >{product.name}</h3>
        <p className=' text-xs'> {product.description}</p>
        </div>
        <div className=' flex items-center font-bold'>
          <p>S/{product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductWidget;
