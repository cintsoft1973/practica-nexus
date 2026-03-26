"use client";

import Button from "@/components/Button";

export default function Home() {
  return (


    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button onClick={() => alert('hola')}>Hazme click</Button>
      <Button onClick={() => alert('hbuenas noches')}>Hazme click</Button>
      <Button onClick={() => alert('hola mundo')}>Hazme click</Button>

    </div>

  );
}
