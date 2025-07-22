# Next.js Project Setup and Basics

## 📖 Project Description

This project serves as a comprehensive introduction to setting up and working with **Next.js**, **TypeScript**, and **Tailwind CSS**. It walks you through building a modern web application featuring reusable components, routing, API integration, and a clean project structure.  

You’ll cover the fundamentals of web development with Next.js — from project setup to creating interactive components and fetching data from external APIs.

---

## 🎯 Learning Objectives

By completing this project, you will:

- Understand how to scaffold a **Next.js** application with **TypeScript** and **Tailwind CSS**.
- Implement **basic routing** in Next.js using the **Pages Router**.
- Create **reusable components** using TypeScript interfaces.
- Implement interactive UI elements like **modals** and **buttons**.
- Fetch and display **data from external APIs** (e.g., JSONPlaceholder).
- Structure a Next.js project following **best practices**.
- Work with **component props** and **state management**.
- Build **responsive layouts** with navigation.

---

## ⚙️ Requirements

To get started, ensure you have:

- **Node.js** (v16 or later)
- **npm** or **yarn** package manager
- Basic knowledge of **React** and **TypeScript**
- Familiarity with **HTML/CSS**
- **Git** and a **GitHub account**
- Code editor (**VS Code recommended**)

---

## 🏗️ Best Practices

### **Project Structure**

- Organize components by domain (`layout`, `common`, etc.).
- Keep **interfaces** in a dedicated folder.
- Separate pages according to routes.

### **Component Design**

- Create **reusable, modular components**.
- Use **TypeScript interfaces** for component props.
- Follow the **Single Responsibility Principle**.

### **Code Quality**

- Use **ESLint** for linting.
- Maintain a **consistent code style**.
- Add **meaningful comments** where necessary.

### **Performance**

- Optimize **API calls**.
- Implement **lazy loading** where appropriate.
- Use **Tailwind CSS** for efficient styling.

### **Documentation**

- Maintain a **clear README**.
- Document component props and usage.
- Keep **commit messages descriptive**.

---

## 📂 Project Structure

```bash
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.
