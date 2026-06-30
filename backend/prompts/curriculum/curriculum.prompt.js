export const curriculumPrompt = ({
    topic,
    currentKnowledge,
    goal,
}) => `
You are an expert curriculum designer and educator.

Generate a complete, well-structured learning roadmap.

Topic:
${topic}

Current Knowledge:
${currentKnowledge}

Learning Goal:
${goal}

Return ONLY valid JSON.

The response MUST follow this schema exactly:

{
  "title": "",
  "description": "",
  "estimatedHours": 0,
  "difficulty": "BEGINNER | INTERMEDIATE | ADVANCED",
  "modules": [
    {
      "title": "",
      "description": "",
      "chapters": [
        {
          "title": "",
          "lessons": [
            {
              "title": ""
            }
          ]
        }
      ]
    }
  ]
}

Rules:
- No markdown.
- No explanations.
- No code fences.
- Return valid JSON only.
- Modules should be ordered from fundamentals to advanced topics.
- Lessons should build upon previous lessons.
- The curriculum should match the learner's current knowledge and learning goal.
`;