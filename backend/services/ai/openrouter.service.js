import axios from "axios";

const openRouter = axios.create({
    baseURL: "https://openrouter.ai/api/v1",
    headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
    },
});

export const callOpenRouter = async (messages) => {
    try {
        const response = await openRouter.post("/chat/completions", {
            model: process.env.OPENROUTER_MODEL,
            messages,
            max_tokens: 2500,
            temperature: 0.3,
            response_format: {
                type: "json_object",
            },
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(error.response?.data || error.message);
        throw new Error("Failed to generate AI response.");
    }
};