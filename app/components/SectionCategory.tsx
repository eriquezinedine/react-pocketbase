'use client'
import { useEffect } from 'react'
import CategoryItemWidget from './CategoryItemWidget'
import { useMenuStore } from '../stores/menuStorage'
import { useUiStore } from '../stores/uiStorage'

const SectionCategory = () => {
  const categories = useMenuStore().categories;
  const category = useUiStore().category;
  const selectedCategory = useUiStore().selectedCategory;



  return (
    <div className='bg-slate-50 mt-4 mb-4 rounded-lg'>
        <div className='bg-transparent flex-wrap  md:inline-flex' style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly'
        }} >
        {categories?.map((option, index) => (
            < CategoryItemWidget 
              key={index} 
              isSelected={category === option.id} 
              category={option} 
              onTap={()=> {
                selectedCategory(option.id);
              }} 
      />

         ))}
        </div>
    </div>
  )
}

export default SectionCategory