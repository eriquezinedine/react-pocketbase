"use client";


import React, { FC } from 'react'
import { ICategoryMock } from '../Toolbox/Interfaces/interfaces';

interface CategoryItemProp {
  category: ICategoryMock;
  onTap: () => void;
  isSelected: boolean;
}

const CategoryItemWidget: FC<CategoryItemProp> = ({
  category,
  onTap,
  isSelected,
}) => {
  const backgroundClass = isSelected ? 'bg-slate-700' : 'bg-transparent'; 
  const textClass = isSelected ? 'text-white font-bold' : ''; 

  return (
    <div
      className={`cursor-pointer  hover:bg-slate-700 hover:text-white duration-300 text-center flex justify-center items-center rounded-lg ${backgroundClass} ${textClass}`}
      style={{ width: '118px', height: '50px', fontSize: '14px' }}
      onClick={onTap}
    >
      <p>{category.name}</p>
    </div>
  );
};


export default CategoryItemWidget
