import React, { FC } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useTableStorage } from '../stores/tableStorage'

interface DialogSelectionTableProp {
    onClosed: ()=>void,
} 

const DialogSelectionTable :FC<DialogSelectionTableProp> = ({onClosed}) => {

  const tables = useTableStorage().tables;
  const itemTable = useTableStorage().table;
  const selectedTable = useTableStorage().selectedTable;


  const getSelected = (isSelected: boolean)=>{
    const style =  isSelected ? ' border-black' : 'border-transparent'

    return `border-4 size-16 rounded-lg bg-slate-700 m-2 text-white flex items-center justify-center ${style} cursor-pointer`;
  }

  return (
    <div className='fixed top-0 bottom-0 ring-0 left-0 bg-black h-screen w-screen bg-opacity-80	flex justify-start  z-50' >
        <div className='flex m-auto items-center justify-center' style={{maxWidth: '500px'}}>
           <div className='bg-gray-100  rounded-2xl ' >
            <div className='flex  justify-between items-center px-2 mt-2'>
              <h3 className='font-bold text-2xl text-center mr-4'>Selecciona una mesa</h3>
              <IoMdClose onClick={()=>{
                onClosed();
                
              }} size={24} className='cursor-pointer' />
            </div>
            <div className='flex flex-wrap items-start justify-center py-2 '>
              {
              tables.map((table,index)=>
              <div key={table.id + index} onClick={()=>{
                onClosed();
                selectedTable(table);
              }} 
                className={getSelected(table.id === itemTable?.id)}>{table.number}</div>
              
              )}
           
            </div>

            </div>
        </div> 
     </div> 
  )
}

export default DialogSelectionTable