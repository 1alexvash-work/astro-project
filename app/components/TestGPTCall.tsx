"use client";

import { callGPT } from "@/ServerFunctions";
import React, { useState } from "react";

const TestGPTCall = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [result, setResult] = useState<any>(null);

  const testGPT = async () => {
    setIsLoading(true);

    try {
      setError(null);
      const result = await callGPT();
      setResult({ result });
    } catch (error) {
      setError({ error });
    }

    setIsLoading(false);
  };

  return (
    <div>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={testGPT}
        disabled={isLoading}
      >
        Test GPT Call
      </button>
      {isLoading && <div>Loading...</div>}
      {result && <div>Result: {JSON.stringify(result)}</div>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
    </div>
  );
};

export default TestGPTCall;
