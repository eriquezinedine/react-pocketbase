import {create} from "zustand";
import { PocketBaseClient } from "../services/pocketbase";
import { IOrderItem, IProduct } from '../Toolbox/Interfaces/interfaces';



interface orderState {
  orders:  Map<string, IOrderItem>;
  addOrders: (product: IProduct)=> void;
  subtractOrders: (itemOrder: IOrderItem)=> void;
  removeOrders: (idProduct: string) => void;
  totalOrders: () => number;
  totalCount: () => number;
  cleanStore: () => void;
}

export const useOrderStore = create<orderState>((set, get) => ({
  orders: new Map(),
  addOrders: (product: IProduct)=>{
    const  map = get().orders;
    const item = map.get(product.id);
    const orderItem: IOrderItem = {
      product: item != undefined? item.product : product,
      count: item != undefined? item.count + 1 : 1,
    };
    map.set(product.id, orderItem);
    set({orders: map})
  },
    
  subtractOrders: (itemOrder: IOrderItem)=>{
    const  map = get().orders;
    if(itemOrder.count > 1){
      const orderItem: IOrderItem = {
        product: itemOrder.product,
        count: itemOrder.count - 1,
      };
      map.set(itemOrder.product.id, orderItem);
      set({orders: map});
    }
  },
  removeOrders: (idProduct: string)=>{
    const map = get().orders;
    map.delete(idProduct);
    set({orders: map});
  },
  totalCount: ()=>{
    const array = Array.from(get().orders.values());
    const total = array.reduce((accumulator, currentItem) => accumulator + currentItem.count, 0);
    return total;
  },
  totalOrders: ()=>{
    const array = Array.from(get().orders.values());
    const total = array.reduce((accumulator, currentItem) => {
      const itemTotal = currentItem.count * currentItem.product.price;
      return accumulator + itemTotal;
    }, 0);
    return total;
  },
  cleanStore: () => set({orders:new Map()}),
}));