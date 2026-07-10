import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const callLLM = async (prompt, json = true) => {

    try {

        const response = await ai.models.generateContent({

            model: process.env.GEMINI_MODEL,

            contents: prompt,

            config: {

                temperature: 0.3,

                maxOutputTokens: 8192,

                ...(json && {
                    responseMimeType: "application/json",
                }),

            },

        });

        return response.text;

    } catch (error) {

        console.error("Gemini Error:", error);

        throw new Error("Failed to generate AI response.");

    }

};