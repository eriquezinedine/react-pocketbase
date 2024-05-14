'use client'
// import Form from "./components/Form";
import { useEffect } from "react";
import { Layout } from "./Layout/Home";
import SectionBanner from "./components/SectionBanner";
import SectionCategory from "./components/SectionCategory";
import SectionProducts from "./components/SectionProducts";
import { useMenuStore } from "./stores/menuStorage";
import { PocketBaseClient } from "./services/pocketbase";
import ShoppingButton from "./components/ShoppingButton";
import DialogSectionShopping from "./components/DialogSectionShopping";
// import SectionProducts from "./components/SectionProducts";

export default function Home() {
  PocketBaseClient.getInstance();
  const getAll = useMenuStore().getAll;

  useEffect(() => {
    getAll();
  }, [])

  return (
    <main >
      <Layout   >
        <SectionBanner />
        <SectionCategory />
        <SectionProducts />
      </Layout>
      <ShoppingButton />
      <DialogSectionShopping/>
    </main>
  );
}
