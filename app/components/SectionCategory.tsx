'use client'
import { useEffect } from 'react'
import CategoryItemWidget from './CategoryItemWidget'
import { StatusMenu, useMenuStore } from '../stores/menuStorage'
import { useUiStore } from '../stores/uiStorage'
import SkeletonCategory from './skeleton/SkeletonCategory'

const SectionCategory = () => {
  const categories = useMenuStore().categories;
  const status = useMenuStore().status;
  const category = useUiStore().category;
  const selectedCategory = useUiStore().selectedCategory;

  const length = 5;
const listSkeleton = Array.from({ length }, (_, __) => {});

  return (
    <div className='bg-slate-50 mt-4 mb-4 rounded-lg'>
        <div className='bg-transparent flex-wrap  md:inline-flex' style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly'
        }} >
         { status != StatusMenu.Loaded? listSkeleton?.map((__, index) => (
            < SkeletonCategory key={index}  />
         )) : categories?.map((option, index) => (
          < CategoryItemWidget 
            key={index} 
            isSelected={category === option.id} 
            category={option} 
            onTap={()=> {
              selectedCategory(option.id);
            }} 
         />
       ))
        }
        </div>
    </div>
  )
}

export default SectionCategory