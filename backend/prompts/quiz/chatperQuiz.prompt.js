export const chapterQuizPrompt = ({
    courseTitle,
    moduleTitle,
    chapterTitle,
    lessons,
}) => {

    return `

You are an expert educator and technical interviewer.

Generate a high-quality quiz based ONLY on the learning material provided.

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

Content:
${lesson.content}

`
    )
    .join("\n")}

==========================
QUIZ REQUIREMENTS
==========================

Generate EXACTLY 10 multiple-choice questions.

The quiz must evaluate the learner's understanding of the chapter.

Do NOT ask trivial definition-based questions only.

Cover every major concept taught in the lessons.

Questions should be evenly distributed across the chapter.

Avoid asking two questions that test exactly the same idea.

Use Bloom's Taxonomy.

Mix the following difficulty:

• 4 EASY

• 4 MEDIUM

• 2 HARD

Include:

• Conceptual questions

• Scenario-based questions

• Code understanding questions (if programming chapter)

• Practical reasoning questions

Do NOT use True/False questions.

Do NOT use multiple-correct questions.

Every question MUST have exactly FOUR options.

Shuffle the correct option.

Do not always keep option A correct.

==========================
IMPORTANT
==========================

Assume this learner may have taken previous quizzes.

Generate NEW questions.

Avoid repeating common textbook questions.

Focus on concepts that can still assess understanding.

It is acceptable if 1 or 2 questions are similar, but the remaining questions must be different.

==========================
FOR EACH QUESTION
==========================

Return:

Question

4 options

Correct Answer Index

Difficulty

Topic

Explanation

Explanation should explain WHY the answer is correct.

==========================
OUTPUT FORMAT
==========================

Return ONLY VALID JSON.

Do NOT wrap inside markdown.

Do NOT explain anything.

Use EXACTLY this schema.

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

Remember:

Return EXACTLY 10 questions.

Return ONLY JSON.

`;

};