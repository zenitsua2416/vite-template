import { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="my-10 text-3xl font-bold">My Simple Vite App⭐</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="rounded-md border bg-neutral-200 p-2 px-4 font-semibold outline-none hover:bg-neutral-300"
      >
        Count is {count}
      </button>
    </div>
  );
};

export default App;
