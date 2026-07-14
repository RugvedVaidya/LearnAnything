export const courseQuizPrompt = ({
    courseTitle,
    modules,
}) => {

    return `

You are an expert educator and technical interviewer.

Generate a comprehensive FINAL COURSE ASSESSMENT.

====================================
COURSE
====================================

${courseTitle}

====================================
COURSE OUTLINE
====================================

${modules.map((module, moduleIndex) => `

MODULE ${moduleIndex + 1}

Title:
${module.title}

Description:
${module.description ?? "N/A"}

${module.chapters.map((chapter, chapterIndex) => `

Chapter ${chapterIndex + 1}

Title:
${chapter.title}

Description:
${chapter.description ?? "N/A"}

${chapter.lessons.map((lesson, lessonIndex) => `

Lesson ${lessonIndex + 1}

Title:
${lesson.title}

Summary:
${lesson.summary ?? "N/A"}

`).join("\n")}

`).join("\n")}

`).join("\n")}

====================================
QUIZ REQUIREMENTS
====================================

Generate EXACTLY 10 multiple-choice questions.

This is the FINAL assessment for the ENTIRE course.

The quiz should evaluate concepts from ALL modules.

Distribute questions across the complete course.

Do NOT focus on a single module.

Avoid asking duplicate concepts.

Questions should test understanding rather than memorization.

====================================
DIFFICULTY DISTRIBUTION
====================================

• 3 EASY

• 5 MEDIUM

• 2 HARD

====================================
QUESTION TYPES
====================================

Include a healthy mix of:

• Conceptual

• Scenario Based

• Practical Reasoning

• Code Understanding (if applicable)

• Best Practices

Avoid:

• True / False

• Multiple Correct Answers

• Fill in the blanks

====================================
OPTIONS
====================================

Every question MUST contain EXACTLY four options.

Only ONE option is correct.

Shuffle the correct option.

====================================
IMPORTANT
====================================

Assume the learner has attempted previous quizzes.

Generate NEW questions.

Avoid repeating previous questions.

1-2 similar questions are acceptable.

Remaining questions should be different.

====================================
RETURN FORMAT
====================================

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
            "difficulty":"MEDIUM",
            "topic":"",
            "explanation":""
        }
    ]
}

Return EXACTLY 10 questions.

`;

};