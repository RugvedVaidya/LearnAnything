import { curriculumPrompt } from "../../prompts/curriculum/curriculum.prompt.js";
import { callOpenRouter } from "./openrouter.service.js";
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

    const response = await callOpenRouter([
    {
        role: "user",
        content: prompt,
    },
]);

console.log("========== AI RAW RESPONSE ==========");
console.log(response);
console.log("=====================================");

return safeJsonParse(response);
};