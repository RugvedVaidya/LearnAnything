import { lessonContentPrompt } from "../../prompts/lessonContent/lessonContent.prompt.js";
import { callLLM } from "./llm.service.js";

export const generateLessonContent = async (data) => {

    const prompt = lessonContentPrompt(data);

    const content = await callLLM(prompt);

    return {
        content,
    };

};