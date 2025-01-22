"use client";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function UserInput() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");

    try {
      const response = await fetch(
        // API URL
        "https://e058-34-125-163-11.ngrok-free.app/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: prompt,
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching response from the API");
      }

      const data = await response.text();
      const cleanedOutput = data.replace(/[{}\[\]"]+/g, "").trim(); // Remove braces, brackets, and quotes
      setOutput(cleanedOutput || "");
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 flex-col gap-6 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center leading-tight">
        What can I help with?
      </h2>
      <div className="relative flex flex-col gap-4 w-full max-w-md">
        <form onSubmit={handleSubmit} className="w-full">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="resize-none w-full p-4 pr-12 border-none bg-slate-100 rounded-md text-sm sm:text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
            placeholder="Ask your symptoms here..."
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-200"
            type="submit"
            disabled={loading}
          >
            {loading ? "....." : "Send"}
          </button>
        </form>
      </div>

      {output && (
        <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md text-center w-full max-w-lg">
          <div className="flex justify-center mb-4 flex-row gap-2">
            <img src="logo.svg" alt="AI Doctor Logo" />
          </div>
          <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base leading-relaxed">
            {output}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserInput;
