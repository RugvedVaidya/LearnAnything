export const lessonContentPrompt = ({
    courseTitle,
    moduleTitle,
    chapterTitle,
    lessonTitle,
    lessonSummary,
    difficulty,
}) => `
You are an expert educator.

Write a complete lesson.

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

The content should include:

# Introduction

# Learning Objectives

# Explanation

# Examples

# Code Example (if applicable)

# Common Mistakes

# Interview Questions

# Practice Exercises

# Summary

Rules:

Return only the lesson content.
Do NOT wrap it in JSON.
Do NOT use markdown code fences.
`;