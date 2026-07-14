import { callLLM } from "./llm.service.js";

import { chapterQuizPrompt } from "../../prompts/quiz/chapterQuiz.prompt.js";
import { courseQuizPrompt } from "../../prompts/quiz/courseQuiz.prompt.js";

export const generateQuiz = async ({
    type,
    data,
}) => {

    let prompt;

    if (type === "CHAPTER") {

        prompt = chapterQuizPrompt(data);

    } else if (type === "COURSE") {

        prompt = courseQuizPrompt(data);

    } else {

        throw new Error("Invalid quiz type.");

    }
    
    console.log("====== QUIZ GENERATION START ======");

console.log("Prompt Length:", prompt.length);

console.log("Calling Gemini...");

const response = await callLLM(prompt);

console.log("Gemini finished.");

console.log(response);

console.log("====== QUIZ GENERATION END ======");

    let parsed;

    try {

        parsed = JSON.parse(response);

    } catch (error) {

        console.error(response);

        throw new Error("AI returned invalid JSON.");

    }

    if (!parsed.questions) {

        throw new Error("Questions array missing.");

    }

    if (!Array.isArray(parsed.questions)) {

        throw new Error("Questions should be an array.");

    }

    if (parsed.questions.length !== 10) {

        throw new Error("Quiz must contain exactly 10 questions.");

    }

    parsed.questions.forEach((question, index) => {

        if (!question.question) {

            throw new Error(
                `Question ${index + 1} is missing.`
            );

        }

        if (!Array.isArray(question.options)) {

            throw new Error(
                `Question ${index + 1} options are invalid.`
            );

        }

        if (question.options.length !== 4) {

            throw new Error(
                `Question ${index + 1} must contain 4 options.`
            );

        }

        if (
            question.correctAnswer < 0 ||
            question.correctAnswer > 3
        ) {

            throw new Error(
                `Question ${index + 1} has invalid answer index.`
            );

        }

        if (!question.explanation) {

            throw new Error(
                `Question ${index + 1} explanation missing.`
            );

        }

    });
    
    return parsed.questions;

};