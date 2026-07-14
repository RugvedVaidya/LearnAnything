export const chapterQuizPrompt = ({
    courseTitle,
    moduleTitle,
    chapterTitle,
    lessons,
}) => {

    return `

You are an expert educator and technical interviewer.

Generate a high-quality quiz based ONLY on the learning material below.

==========================
COURSE
==========================

${courseTitle}

==========================
MODULE
==========================

${moduleTitle}

==========================
CHAPTER
==========================

${chapterTitle}

==========================
LESSONS
==========================

${lessons
        .map(
            (lesson, index) => `

Lesson ${index + 1}

Title:
${lesson.title}

Summary:
${lesson.summary}

`
        )
        .join("\n")}

==========================
QUIZ REQUIREMENTS
==========================

Generate EXACTLY 10 multiple-choice questions.

The quiz must cover every important concept from the chapter.

Avoid asking the same concept twice.

Mix question styles:

• Conceptual
• Scenario Based
• Practical Reasoning
• Code Understanding (if applicable)

Difficulty Distribution:

• 4 EASY
• 4 MEDIUM
• 2 HARD

Every question must have EXACTLY four options.

Only ONE option is correct.

Shuffle the correct option.

==========================
VERY IMPORTANT
==========================

Assume the learner may have attempted previous quizzes.

Generate fresh questions.

Small overlap (1-2 questions) is acceptable.

The remaining questions must be different.

==========================
RETURN FORMAT
==========================

Return ONLY valid JSON.

Do NOT wrap in markdown.

Schema:

{
    "questions":[
        {
            "question":"",
            "options":[
                "",
                "",
                "",
                ""
            ],
            "correctAnswer":0,
            "difficulty":"EASY",
            "topic":"",
            "explanation":""
        }
    ]
}

Return EXACTLY 10 questions.

`;

};