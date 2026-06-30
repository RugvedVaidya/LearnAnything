import { curriculumPrompt } from "../../prompts/curriculum.prompt.js";
import { safeJsonParse } from "../../utils/safeJson.js";
import { generateAIResponse } from "./ai.service.js";

export const generateCurriculum = async ({
    topic,
    level,
    goal,
}) => {

    const prompt = curriculumPrompt({
        topic,
        level,
        goal,
    });

    const response = await generateAIResponse([
        {
            role: "user",
            content: prompt,
        },
    ]);

    return safeJsonParse(response);;

};