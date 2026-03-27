"use client";

import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (

    <main className="flex flex-col flex-1 items-center justify-center bg-gray-100 font-sans dark:bg-black">
      <ProductCard
        title="Producto 1"
        description="Descripción del producto 1"
        price={100}
        image="https://images.unsplash.com/photo-1526170755737-f0363f068977?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <ProductCard
        title="Producto 2"
        description="Descripción del producto 2"
        price={200}
        image="https://images.unsplash.com/photo-1526170755737-f0363f068977?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Button onClick={() => alert('hola')}>Hazme click</Button>
        <Button onClick={() => alert('hbuenas noches')}>Hazme click</Button>
        <Button onClick={() => alert('hola mundo')}>Hazme click</Button>
      </div>

      <ProductCard
        title="Producto 3"
        description="Descripción del producto 3"
        price={300}
        image="https://images.unsplash.com/photo-1526170755737-f0363f068977?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </main>

  );
}
