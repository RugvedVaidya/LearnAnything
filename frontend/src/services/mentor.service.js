import { askMentor } from "../api/mentor.api";

export const sendQuestion = async (
    lessonId,
    question
) => {

    const response = await askMentor(
        lessonId,
        question
    );

    return response.data;

};