import {create} from "zustand";
import { PocketBaseClient } from "../services/pocketbase";
import { ICategory, IProduct } from "../Toolbox/Interfaces/interfaces";

export enum StatusMenu {
  Initial ,
  Loading ,
  Loaded ,
  Error
}


interface MenuState {
  status: StatusMenu,
  categories: ICategory[];
  products: IProduct[];
  menu: Map<string, IProduct[]>;
  getAll: () => Promise<void>;
  cleanStore: () => void;
}

export const useMenuStore = create<MenuState>((set, get) => ({
    status: StatusMenu.Initial,
    menu: new Map(),
    categories: [],
    products: [],
  getAll: async () => {
    set((state) => ({ ...state, status: StatusMenu.Loading }));
    try {
      const client = PocketBaseClient.getInstance();
      let categories = await client.pb.collection('category').getFullList<ICategory>();
      let products = await client.pb.collection('product').getFullList<IProduct>();
      
      const menu: Map<string, IProduct[]> = new Map();
      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        const hasCategory: boolean = menu.has(products[index].id_category);
        if(hasCategory){
          const listProducts = menu.get(element.id_category)  as   IProduct[];
          menu.set(element.id_category, [...listProducts, element]);
        }else{
          menu.set(element.id_category, [element]);
        }
      }
      const allCategory: ICategory = {
        collectionId: '9999',
        collectionName: 'n',
        created: '',
        id: 'Todos',
        name: 'Todos',
        updated: '',
      };
      set((state) => ({ ...state, categories: [allCategory,...categories], products: products, status: StatusMenu.Loaded, menu: menu }));
      console.log('PINEDA GAY',categories,products,);

    } catch (error) {
      console.log('PINEDA GAY ERROR');
      
      set((state) => ({ ...state, status: StatusMenu.Error }));
    }
 
  },
  cleanStore: () => set({}, true),

}));