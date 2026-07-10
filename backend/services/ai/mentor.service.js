import { mentorPrompt } from "../../prompts/mentor/mentor.prompt.js";
import { callLLM } from "./llm.service.js";

export const askMentor = async ({
    lessonContent,
    question,
}) => {

    const prompt = mentorPrompt({
        lessonContent,
        question,
    });

    const response = await callLLM(
        prompt,
        false
    );

    return response;

};