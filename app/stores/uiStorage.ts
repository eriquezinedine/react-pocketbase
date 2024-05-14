import {create} from "zustand";

interface uiState {
  enabledShopping: boolean,
  category: string,
  toggleShopping: ()=> void,
  selectedCategory: (item:string)=> void,
  cleanStore: () => void;
}

export const useUiStore = create<uiState>((set, get) => ({
  enabledShopping: false,
  category: 'Todos',
  selectedCategory: (item:string) => set({category: item}),
  toggleShopping: ()=>{
    const value = get().enabledShopping
    set({enabledShopping: !value});
  },
  cleanStore: () => set({}, true),

}));