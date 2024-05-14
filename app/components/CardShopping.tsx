import React, { FC } from 'react'
import { IOrderItem } from '../Toolbox/Interfaces/interfaces';
import { IoMdAdd } from 'react-icons/io';
import { IoMdRemove } from "react-icons/io";
import { useOrderStore } from '../stores/orderStorage';
import { TiDeleteOutline } from "react-icons/ti";

{/* <IoMdAdd /> */}


interface CardShoppingProp {
    orderItem: IOrderItem;
  }

const CardShopping: FC<CardShoppingProp> = ({
    orderItem,
}) => {
  const url = "https://res.cloudinary.com/zinedine-fernando-herrera/image/upload/v1697334310/fnprwqehecx7th0okbgh.jpg";
  const addOrders = useOrderStore().addOrders;
  const subtractOrders = useOrderStore().subtractOrders;
  const removeOrders = useOrderStore().removeOrders;
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <img src={url} alt="Imagen del producto" className="w-16 h-16 object-cover rounded" />
        <div className="flex-grow mx-4">
            <h3 className="text-lg font-semibold">{orderItem.product.name}</h3>
            <div className="flex items-center justify-between mt-2">
                <div>
                    <button onClick={()=>{subtractOrders(orderItem)}} className="text-gray-500 focus:outline-none focus:text-gray-700">
                        <IoMdRemove />
                    </button>
                    <span className="mx-2"> {orderItem.count}  </span>
                    <button onClick={()=>{addOrders(orderItem.product)}} className="text-gray-500 focus:outline-none focus:text-gray-700">
                        <IoMdAdd />
                    </button>
                </div>
                <div className='font-bold'>
                    S/ {orderItem.count * orderItem.product.price}
                </div>
            </div>
        </div>
        <button onClick={()=>removeOrders(orderItem.product.id)} className="text-red-500 focus:outline-none text-2xl">
            < TiDeleteOutline/>
        </button>
    </div>
  )
}

export default CardShopping