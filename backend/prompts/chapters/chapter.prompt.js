export const chapterPrompt = ({
    courseTitle,
    courseDescription,
    moduleTitle,
    moduleDescription,
    difficulty,
}) => `
You are an expert curriculum designer.

Generate chapters ONLY for the given module.

Course Title:
${courseTitle}

Course Description:
${courseDescription}

Difficulty:
${difficulty}

Module Title:
${moduleTitle}

Module Description:
${moduleDescription}

Return ONLY valid JSON.

The response MUST exactly follow this schema:

{
  "chapters": [
    {
      "order": 1,
      "title": "",
      "description": ""
    }
  ]
}

Rules:

- Return ONLY JSON.
- No markdown.
- No code fences.
- Generate between 5 and 8 chapters.
- Chapters should progressively cover the module.
- Keep descriptions concise.
`;