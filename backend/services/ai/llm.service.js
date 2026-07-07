import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const callLLM = async (prompt) => {
    try {
        const response = await ai.models.generateContent({
            model: process.env.GEMINI_MODEL,
            contents: prompt,
            config: {
                temperature: 0.3,
                responseMimeType: "application/json",
                maxOutputTokens: 2048,
            },
        });

        return response.text;
    } catch (error) {
        console.error("Gemini Error:");

        if (error.response?.data) {
            console.error(error.response.data);
        } else {
            console.error(error);
        }

        throw new Error("Failed to generate AI response.");
    }
};