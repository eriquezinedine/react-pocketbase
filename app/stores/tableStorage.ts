import {create} from "zustand";
import { isNumber } from "../Toolbox/utils/utils";
import { ITable } from "../Toolbox/Interfaces/interfaces";
import { PocketBaseClient } from "../services/pocketbase";

export enum StatusTable {
  Initial,
  Loading,
  Loaded,
  Error
}


interface TableStorage {
  status: StatusTable,
  table:  ITable | null;
  tables:  ITable[],
  selectedTable: (table: ITable | null)=> void;
  getAll: (callBack :(tables: ITable[])=>void) => Promise<void>;
}

export const useTableStorage = create<TableStorage>((set, get) => ({
  status: StatusTable.Initial,
  tables: [],
  table: null,
  selectedTable: (table: ITable | null)=>{
    // if(isNumber(table)){
      if(get().table == table){
        set({table:null})
        return;
      };
     set({table:table})
    // }
  },
  getAll :async (callBack :(tables: ITable[])=>void) => { 
    set((state) => ({ ...state, status: StatusTable.Loading }));
    try {
      const client = PocketBaseClient.getInstance();
      let tables = await client.pb.collection('table').getFullList<ITable>();
      set((state) => ({ ...state, tables: tables, status: StatusTable.Loaded, }));
      callBack(tables);
    } catch (error) {
      console.log('status tablet', error)
      set((state) => ({ ...state, status: StatusTable.Error }));
    }
   }
}));

