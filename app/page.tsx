'use client'
import { useEffect } from "react";
import { Layout } from "./Layout/Home";
import SectionBanner from "./components/SectionBanner";
import SectionCategory from "./components/SectionCategory";
import SectionProducts from "./components/SectionProducts";
import { useMenuStore } from "./stores/menuStorage";
import { PocketBaseClient } from "./services/pocketbase";
import ShoppingButton from "./components/ShoppingButton";
import DialogSectionShopping from "./components/DialogSectionShopping";
import SectionHeader from "./components/SectionHeader";
import { useSearchParams } from "next/navigation";
import { useTableStorage } from "./stores/tableStorage";
import { ITable } from './Toolbox/Interfaces/interfaces';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  PocketBaseClient.getInstance();
  const getAll = useMenuStore().getAll;
  const getAllTablet = useTableStorage().getAll;
  
  const selectedTable = useTableStorage().selectedTable;
  const searchParams = useSearchParams()


  const selectionTable = (tables: ITable[] )=>{
    const idTable = searchParams.get('mesa')
    const table = tables.find(table => table.id.toString() === idTable);
    if(table == undefined) return;
    selectedTable(table);
  }

  useEffect(() => {
    getAll();
    getAllTablet(selectionTable)
  }, [])

  return (
    <main >
      <Layout   >
        <SectionHeader/>
        <SectionBanner />
        <SectionCategory />
        <SectionProducts />
      </Layout>
      <ShoppingButton />
      <DialogSectionShopping/>
      <ToastContainer/>
    </main>
  );
}
