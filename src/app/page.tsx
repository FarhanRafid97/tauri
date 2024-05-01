"use client";
import { useState } from "react";
import Greet from "./greet";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className="bg-white w-full h-[100vh]">
      <Greet />
      <p className="text-black">Hello world = {count}</p>
      <button
        className="bg-black text-white px-4"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        className="bg-black text-white px-4"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
    </main>
  );
}
