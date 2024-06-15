"use client";

import { callGPT } from "@/ServerFunctions";
import React from "react";

const TestGPTCall = () => {
  const testGPT = async () => {
    const result = await callGPT();
    console.log("result:", result);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={testGPT}
      >
        Test GPT Call
      </button>
    </div>
  );
};

export default TestGPTCall;
