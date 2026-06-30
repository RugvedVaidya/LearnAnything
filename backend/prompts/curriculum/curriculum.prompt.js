export const curriculumPrompt = ({
    topic,
    level,
    goal,
}) => `
You are an expert curriculum designer.

Generate a complete learning roadmap.

Topic:
${topic}

Current Knowledge:
${level}

Learning Goal:
${goal}

Return ONLY valid JSON.

The JSON format must be:

{
"title":"",
"description":"",
"estimatedHours":0,
"difficulty":"BEGINNER",
"modules":[]
}

Do not include markdown.

Do not include explanations.

Only JSON.
`;