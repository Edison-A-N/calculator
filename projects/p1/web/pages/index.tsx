import React, { useState } from "react";
import { add, subtract, multiply, divide } from "../public/calculator_lib.wasm";

export default function Home() {
  const [result, setResult] = useState<number | null>(null);
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const handleCalculate = (operation: (a: number, b: number) => number) => {
    const a = parseInt(inputA);
    const b = parseInt(inputB);

    if (!isNaN(a) && !isNaN(b)) {
      const calculatedResult = operation(a, b);
      setResult(calculatedResult);
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        placeholder="Enter a number"
        value={inputA}
        onChange={(e) => setInputA(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter another number"
        value={inputB}
        onChange={(e) => setInputB(e.target.value)}
      />
      <button onClick={() => handleCalculate(add)}>Add</button>
      <button onClick={() => handleCalculate(subtract)}>Subtract</button>
      <button onClick={() => handleCalculate(multiply)}>Multiply</button>
      <button onClick={() => handleCalculate(divide)}>Divide</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}
