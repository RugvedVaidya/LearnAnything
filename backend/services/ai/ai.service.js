import openRouter from "./openrouter.service.js";

export const generateAIResponse = async (messages) => {

    const response = await openRouter.post("/chat/completions", {

        model: process.env.OPENROUTER_MODEL,

        messages,

        response_format: {
            type: "json_object",
        },

    });

    return response.data.choices[0].message.content;

};