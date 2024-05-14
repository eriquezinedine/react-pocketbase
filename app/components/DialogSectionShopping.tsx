import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useUiStore } from '../stores/uiStorage';
import CardShopping from './CardShopping';
import { useOrderStore } from '../stores/orderStorage';
import CategoryItemWidget from './CategoryItemWidget';



const DialogSectionShopping = () => {
    const enabled = useUiStore().enabledShopping;
    const orders = useOrderStore().orders;
    const cleanStore = useOrderStore().cleanStore;
    const totalOrders = useOrderStore().totalOrders;
    const toggleShopping = useUiStore().toggleShopping;

    const list = Array.from(orders.values())

    return (
        !enabled? <span></span> : <div className='duration-300 fixed top-0 bottom-0 ring-0 left-0 bg-black h-screen w-screen bg-opacity-80	flex justify-start ' >
        <div className='bg-gray-100 w-zineWidth h-full'>
            <div className='flex justify-between p-6'>
                <FaShoppingBasket color='#48515e'  size={36} />
                <p className='text-3xl font-bold'>Carrito</p>
                <IoMdClose onClick={toggleShopping} className='cursor-pointer' color='#48515e'  size={36} />
            </div>
            <div className=' w-full  overflow-y-auto p-4 ' style={{height: '75%'}}>
                {list?.map((option, index) => (
                    <CardShopping key={index} orderItem={option} />
                ))}
            </div>
            <div  className='  w-full h-full px-4 py-2 flex flex-col justify-between ' style={{height: '16%'}} >
                    <div className='flex justify-between '>
                        <h3 className='font-bold text-2xl'>Total</h3>
                        <span className='text-3xl'> S/ {totalOrders()}</span>
                    </div>
                    <div className='bg-slate-700 text-center font-bold text-2xl py-4 rounded-2xl text-white' onClick={cleanStore} >Crear orden</div>
            </div>
        </div>
    </div>
  )
}

export default DialogSectionShopping