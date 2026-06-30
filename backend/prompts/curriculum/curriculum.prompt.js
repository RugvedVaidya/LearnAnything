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
      "description": ""
    }
  ]
}

Rules:

- Return ONLY JSON.
- Do NOT use markdown.
- Do NOT use code fences.
- Do NOT generate chapters.
- Do NOT generate lessons.
- Generate between 6 and 10 modules.
- Modules must be ordered logically.
- Description should be concise.
`;