export const curriculumPrompt = ({
    topic,
    currentKnowledge,
    goal,
}) => `
You are an expert curriculum designer.

Design a complete learning roadmap.

Topic:
${topic}

Current Knowledge:
${currentKnowledge}

Learning Goal:
${goal}

Return ONLY valid JSON.

The response MUST exactly follow this schema:

{
  "title": "",
  "description": "",
  "difficulty": "BEGINNER",
  "estimatedHours": 0,
  "modules": [
    {
      "order": 1,
      "title": "",
      "description": "",
      "estimatedTime": 0
    }
  ]
}

Rules:

- Return ONLY JSON.
- Do NOT use markdown.
- Do NOT use code fences.
- Do NOT generate chapters.
- Do NOT generate lessons.
- Generate exactly 5 modules.
- Each module description must be under 20 words.
- Keep the entire response concise.
- Modules must be ordered logically.
- Description should be concise.
- Every module MUST include estimatedTime.
- estimatedTime is the number of hours required to complete that module.
- The sum of all module estimatedTime values should approximately equal estimatedHours.
`;