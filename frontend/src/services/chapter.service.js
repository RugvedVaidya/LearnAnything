import { generateChapters } from "../api/chapter.api";

export const generateModuleChapters = async (moduleId) => {

    const response = await generateChapters(moduleId);

    return response.data;

};