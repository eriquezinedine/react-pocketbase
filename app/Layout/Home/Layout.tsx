import { FC } from 'react';


import { ILayoutsProps } from '@/app/Toolbox/Interfaces/Layouts';

export const Layout: FC<ILayoutsProps> = ({ children }) => {
   return (
      <div className= " w-10/12 mx-auto" style={{ position: 'relative',}}>
         {children}
      </div>
   );
};
