export const courseQuizPrompt = ({
    courseTitle,
    modules,
}) => {

    return `

You are an expert educator and technical interviewer.

Generate a comprehensive final assessment for this course.

===================================
COURSE
===================================

${courseTitle}

===================================
COURSE STRUCTURE
===================================

${modules.map((module, moduleIndex) => `

MODULE ${moduleIndex + 1}

Title:
${module.title}

Description:
${module.description}

${module.chapters.map((chapter, chapterIndex) => `

Chapter ${chapterIndex + 1}

Title:
${chapter.title}

Description:
${chapter.description}

${chapter.lessons.map((lesson, lessonIndex) => `

Lesson ${lessonIndex + 1}

Title:
${lesson.title}

Summary:
${lesson.summary}

Content:
${lesson.content}

`).join("\n")}

`).join("\n")}

`).join("\n")}

===================================
QUIZ REQUIREMENTS
===================================

Generate EXACTLY 10 multiple-choice questions.

This is the FINAL COURSE ASSESSMENT.

Questions should evaluate understanding of the ENTIRE course.

Do NOT concentrate on only one module.

Cover every major topic.

Every module should contribute questions.

Avoid duplicate concepts.

Questions should require reasoning rather than memorization.

===================================
DIFFICULTY
===================================

Generate

3 EASY

5 MEDIUM

2 HARD

===================================
QUESTION TYPES
===================================

Include a mix of:

• Conceptual questions

• Practical questions

• Code understanding questions (if applicable)

• Scenario-based questions

• Best-practice questions

Avoid:

• True/False

• Multiple correct answers

• Fill in the blanks

===================================
OPTIONS
===================================

Every question must contain EXACTLY four options.

Shuffle the correct answer.

Never always keep Option A as correct.

===================================
IMPORTANT
===================================

The learner may already have attempted previous quizzes.

Generate a NEW assessment.

Avoid repeating common interview questions.

Avoid repeating previous quiz questions.

It is acceptable if 1 or 2 questions resemble previous quizzes.

The remaining questions must be different.

===================================
FOR EVERY QUESTION RETURN
===================================

Question

4 options

Correct Answer Index

Difficulty

Topic

Explanation

Explanation should teach the learner why the answer is correct.

===================================
OUTPUT
===================================

Return ONLY valid JSON.

Do NOT wrap inside markdown.

Do NOT explain anything.

Return EXACTLY this format.

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

Return ONLY JSON.

`;

};