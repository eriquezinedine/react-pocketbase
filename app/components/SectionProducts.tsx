'use client'
import ProductWidget from './ProductWidget'
import { useMenuStore } from '../stores/menuStorage';
import { useUiStore } from '../stores/uiStorage';

export default function SectionProducts() {
  const menu = useMenuStore().menu;
  const products = useMenuStore().products;
  const category = useUiStore().category;

  const data = menu.get(category) ?? products;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-6 gap-4 mb-6">
        {data?.map((option, index) => (
            < ProductWidget key={index} product={option}
      />
         ))}
    </div>
  )
}
