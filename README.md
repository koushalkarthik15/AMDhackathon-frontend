# Chatbot-Driven Smart Planner System – Frontend

## Overview

The frontend provides a modern conversational interface for generating personalized activity plans.

It connects to the backend API and visualizes:
- Chat conversation
- Suggestions
- Optimized activity timeline
- Cost and distance summary
- Plan status

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Hooks

---

## Project Structure

app/
│
├── page.tsx
├── layout.tsx
│
├── components/
│   ├── ChatPanel.tsx
│   ├── MessageBubble.tsx
│   ├── SuggestionChips.tsx
│   ├── PlanPanel.tsx
│   ├── TimelineItem.tsx
│   └── SummaryCards.tsx
│
├── types/
│   └── chat.ts

---

## UI Architecture

### Left Panel – Chat Interface
- User & assistant message bubbles
- Suggestion chips
- Auto-scroll
- Loading indicator

### Right Panel – Plan Display
- Plan status badge
- Timeline view
- Cost summary
- Accessibility information
- Reasoning explanation

---

## State Management

Managed using React hooks:

- messages
- plan
- suggestions
- loading
- sessionId (persistent via useRef)

No external state management library required.

---

## Backend Integration

Connects to:

POST http://localhost:5000/chat

Handles:
- Chat reply
- Plan object
- Suggestions
- Regeneration

---

## Running the Frontend

npm install
npm run dev

App runs on:
http://localhost:3000

---

## UI Features

- Two-panel responsive layout
- Modern chat bubble styling
- Timeline visualization
- Dynamic plan updates
- Smooth transitions
- Loading indicator animation

---

## Design Principles

- Clean SaaS-style layout
- Strong type safety (TypeScript)
- Modular component architecture
- Clear separation of UI & logic

---

## Limitations

- Requires backend running
- No authentication
- No persistent chat history
- No dark mode

---

## Future Enhancements

- Dark mode toggle
- Animations (Framer Motion)
- Map preview
- Plan comparison mode
- Mobile optimization
