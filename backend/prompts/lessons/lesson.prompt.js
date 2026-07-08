export const lessonPrompt = ({
    courseTitle,
    moduleTitle,
    chapterTitle,
    chapterDescription,
    difficulty,
}) => `
You are an expert curriculum designer.

Generate lessons ONLY for the given chapter.

Course Title:
${courseTitle}

Difficulty:
${difficulty}

Module:
${moduleTitle}

Chapter:
${chapterTitle}

Chapter Description:
${chapterDescription}

Return ONLY valid JSON.

The response MUST exactly follow this schema:

{
  "lessons": [
    {
      "order": 1,
      "title": "",
      "summary": "",
      "difficulty": "BEGINNER",
      "readingTime": 10
    }
  ]
}

Rules:

- Return ONLY JSON.
- No markdown.
- No code fences.
- Generate between 5 and 8 lessons.
- Lessons should progress from fundamentals to advanced concepts.
- Summary should be concise (1-2 sentences).
- readingTime should be between 5 and 20 minutes.
`;