'use client'
import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { useUiStore } from '../stores/uiStorage';
import { useOrderStore } from '../stores/orderStorage';

const ShoppingButton = () => {
  const toggleShopping = useUiStore().toggleShopping;
  const totalCount = useOrderStore().totalCount;
  return (
    <div onClick={toggleShopping} className='cursor-pointer size-14 rounded-full items-center justify-center flex' style={{ position: 'fixed', right: '64px', bottom: '48px', background : '#48515e',}}>
        <div className='size-7 bg-white absolute bottom-9 left-8 rounded-full border-bg-slate-700 items-center justify-center flex' style={{border: '1px solid '}} >
            <span className='text-xs' >{totalCount()}</span>
        </div>
        <FaShoppingBasket color='white'  size={36} />
    </div>
  )
}

export default ShoppingButton