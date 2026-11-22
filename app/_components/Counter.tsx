"use client";
import { useState } from "react";

export default function Counter({ userCount }: { userCount: number }) {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-primary-900 rounded my-4">
      <p>Загальна кількість користувачів: {userCount}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="mt-2 bg-accent-500 px-4 py-2 text-primary-950 font-bold rounded hover:bg-accent-600"
      >
        Лічильник: {count}
      </button>
    </div>
  );
}