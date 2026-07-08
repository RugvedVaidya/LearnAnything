import { chapterPrompt } from "../../prompts/chapters/chapter.prompt.js";
import { callLLM } from "./llm.service.js";
import { safeJsonParse } from "../../utils/safeJson.js";

export const generateChapters = async ({
    courseTitle,
    courseDescription,
    moduleTitle,
    moduleDescription,
    difficulty,
}) => {

    const prompt = chapterPrompt({
        courseTitle,
        courseDescription,
        moduleTitle,
        moduleDescription,
        difficulty,
    });

    const response = await callLLM(prompt);

    return safeJsonParse(response);

};