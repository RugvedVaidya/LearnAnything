import { curriculumPrompt } from "../../prompts/curriculum/curriculum.prompt.js";
import { callLLM } from "./llm.service.js";
import { safeJsonParse } from "../../utils/safeJson.js";

export const generateCurriculum = async ({
    topic,
    currentKnowledge,
    goal,
}) => {

    const prompt = curriculumPrompt({
        topic,
        currentKnowledge,
        goal,
    });

    const response = await callLLM(prompt);

    console.log("========== AI RESPONSE ==========");
    console.log("TYPE:", typeof response);
    console.log(response);
    console.log("================================");

    return safeJsonParse(response);
};