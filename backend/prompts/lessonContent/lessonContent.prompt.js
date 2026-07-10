export const lessonContentPrompt = ({
    courseTitle,
    moduleTitle,
    chapterTitle,
    lessonTitle,
    lessonSummary,
    difficulty,
}) => `
You are a senior educator, technical writer, and software engineer.

Create a high-quality educational lesson.

Course:
${courseTitle}

Module:
${moduleTitle}

Chapter:
${chapterTitle}

Lesson:
${lessonTitle}

Summary:
${lessonSummary}

Difficulty:
${difficulty}

Return ONLY valid JSON.

{
  "lesson_title": "",
  "summary": "",
  "difficulty": "",
  "content": [
    {
      "section": "",
      "text": ""
    }
  ]
}

Generate the following sections in order:

1. Introduction

2. Why this topic matters

3. Learning Objectives

4. Detailed Explanation

5. Real World Example

6. Visual Analogy

7. Code Example (if applicable)

8. Best Practices

9. Common Mistakes

10. Interview Questions

11. Practice Exercises

12. Key Takeaways

Requirements:

- Return ONLY JSON.
- Do not wrap JSON inside markdown.
- Use GitHub-flavored Markdown inside every "text".
- Use headings.
- Use bullet lists.
- Use tables wherever useful.
- Use code fences.
- Make explanations beginner friendly.
- Add practical interview tips.
- Include examples wherever possible.
- For programming topics, include executable code.
- For mathematical topics, explain formulas step by step.
- Make the lesson detailed enough to study independently.
`;