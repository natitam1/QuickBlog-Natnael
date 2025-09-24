import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  // Access candidates directly (not response.response)
  return (
    response?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No content generated."
  );
}

export default main;
