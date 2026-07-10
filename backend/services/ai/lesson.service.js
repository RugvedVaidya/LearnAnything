import { lessonPrompt } from "../../prompts/lessons/lesson.prompt.js";
import { callLLM } from "./llm.service.js";
import { safeJsonParse } from "../../utils/safeJson.js";

export const generateLessons = async ({
    courseTitle,
    moduleTitle,
    chapterTitle,
    chapterDescription,
    difficulty,
}) => {

    const prompt = lessonPrompt({
        courseTitle,
        moduleTitle,
        chapterTitle,
        chapterDescription,
        difficulty,
    });

    const response = await callLLM(prompt, false);

    return safeJsonParse(response);

};