
# LearnAnything

An AI-powered personalized learning platform that generates structured learning roadmaps, tracks progress, and helps users stay consistent throughout their learning journey.

---

## Features

### Authentication
- User Registration
- Secure Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes

### AI Course Generation
- Generate personalized learning roadmaps using Google Gemini AI
- AI-generated modules and lessons
- Learning objectives for every lesson
- Estimated learning duration
- Difficulty level selection

### Dashboard
- Personalized dashboard
- Total courses created
- Progress overview
- Recent activity

### My Learning
- Continue Learning section
- Active Courses
- Completed Courses
- Lesson Progress Tracking
- Course Completion Progress

### Progress Tracking
- Mark lessons as completed
- Track completed lessons
- Overall course progress
- Resume learning from the last lesson

### User Profile
- User information
- Account management

---

# Tech Stack

## Frontend

- React.js
- React Router
- Tailwind CSS
- Axios
- Framer Motion
- Lucide React

## Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT
- bcrypt

## AI

- Google Gemini API

---

# Project Structure

```
LearnAnything
│
├── frontend
│   ├── src
│   │
│   ├── api
│   ├── services
│   ├── components
│   ├── pages
│   ├── layouts
│   ├── context
│   └── routes
│
└── backend
    ├── prisma
    ├── src
    │
    ├── controllers
    ├── routes
    ├── middleware
    ├── services
    ├── utils
    └── config
```

---

# System Architecture

```
                 +----------------------+
                 |      React App       |
                 +----------+-----------+
                            |
                         Axios API
                            |
                 +----------v-----------+
                 |    Express Server    |
                 +----------+-----------+
                            |
               +------------+-------------+
               |                          |
        Google Gemini API          Prisma ORM
               |                          |
               |                    PostgreSQL
               |
        AI Course Generation
```

---

# Database

The application uses PostgreSQL with Prisma ORM.

Main Models:

- User
- Course
- Module
- Lesson
- LessonProgress

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/learnanything.git
```

```
cd learnanything
```

---

## Backend Setup

```
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL=your_database_url

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

Run Prisma

```bash
npx prisma generate

npx prisma migrate dev
```

Start Backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

## Frontend Setup

```
cd frontend
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api/v1
```

Run

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# API Endpoints

## Authentication

```
POST /api/v1/auth/register

POST /api/v1/auth/login

GET /api/v1/auth/me
```

---

## Courses

```
POST /api/v1/courses/generate

GET /api/v1/courses

GET /api/v1/courses/:id
```

---

## Learning

```
GET /api/v1/my-learning

PATCH /api/v1/progress/:lessonId

GET /api/v1/progress/:courseId
```

---

# Current Project Status

## Completed

- Authentication
- AI Course Generation
- Dashboard
- My Learning
- Lesson Progress Tracking
- Responsive UI
- PostgreSQL Database
- Prisma ORM

## Planned Features

- Common AI Mentor
- Learning Analytics
- RAG-based Knowledge Retrieval
- PDF Upload & Chat
- Quiz Generation
- Certificates
- Course Search
- Notes
- Bookmarks

---

# Future Improvements

- Common AI Mentor
- Vector Database Integration
- RAG Pipeline
- PDF Learning
- Voice Assistant
- Spaced Repetition
- Gamification
- Multi-language Support
- Dark/Light Theme

---

# Deployment

Frontend

- Vercel

Backend

- Render

Database

- Neon PostgreSQL

---

# Author

**Rugved Vaidya**

B.Tech Computer Engineering

Vishwakarma Institute of Information Technology

---

# License

This project is developed for educational and portfolio purposes.