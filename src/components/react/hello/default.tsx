import { useState } from "react";

/**
 * Hello world of React.js,
 * component for rendering a counter.
 */
const DefaultHelloReact = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="">
      <h1 className="text-center text-2xl mb-4">React Component</h1>
      <div className="flex mx-auto space-x-8 justify-center items-center">
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="bg-blue-700 h-8 w-8"
        >
          +
        </button>
        <h3 className="text-xl">{counter}</h3>

        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="bg-red-700 h-8 w-8"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default DefaultHelloReact;
