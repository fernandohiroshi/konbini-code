# Konbini Code - Modern Website Development

This repository hosts the **Konbini Code** project, which offers modern, responsive, and unique website development with cutting-edge UI/UX and front-end technologies.

![Konbini Web Preview](https://cdn.cosmicjs.com/b1e6b4b0-80fe-11ef-9257-112b43bd2f70-Macbook-Air-konbinicode.com.png)

> **Notice**: This project is protected by copyright. Any use or copying of this code without proper authorization is prohibited.

To get started, clone the repository and run `npm install && npm run dev`:

```bash
git clone https://github.com/fernandohiroshi/konbini-code.git
npm install
npm run dev
```
## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Additional Features](#additional-features)
3. [Code Formatting](#code-formatting)
4. [Project Structure](#project-structure)
5. [Responsiveness](#responsiveness)
6. [Deploy](#deploy)

## Technologies Used

- **Next.js**: A React framework that enables server-side rendering and static website generation for React applications.
- **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, providing static type-checking.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development with predefined classes.
- **Framer Motion**: A library for creating animations and transitions in React applications.
- **Radix UI**: A set of low-level UI primitives that help build accessible and customizable components.
- **Lucide Icons**: A collection of beautiful, open-source icons for React applications.
- **Tabler Icons**: A set of icons that are free and customizable for use in web applications.
- **Tsparticles**: A library for creating customizable particle animations in web applications.
- **Next Themes**: A theme management library for Next.js that simplifies implementing dark mode and other themes.
- **Next Intl**: A library for internationalization in Next.js applications, allowing for easy language management.
- **EmailJS**: A service for sending emails directly from JavaScript applications without a server.
- **React Hot Toast**: A library for displaying toast notifications in React applications.
- **Class Variance Authority**: A utility for managing CSS classes and variants in a consistent manner.
- **Tailwind Merge**: A utility for merging Tailwind CSS classes, ensuring no conflicts between them.

## Additional Features

- **Multilingual Support**: The application is designed to support multiple languages, allowing users to switch languages seamlessly.
- **Particle Backgrounds**: Engaging particle animations enhance the user experience and add a modern touch to the UI.
- **Custom Notifications**: Users receive smooth feedback through notifications powered by React Hot Toast, improving interaction.
- **Accessible Components**: All components are built with accessibility in mind, using Radix UI to ensure compliance with web standards.

## Code Formatting

The project adheres to best practices for code formatting and organization:

- **Prettier**: Used for automatic code formatting, ensuring consistency across the codebase.
- **ESLint**: Implements linting rules to catch errors and enforce coding standards.
- **Custom ESLint Configuration**: Includes rules for React, TypeScript, and Prettier to minimize conflicts and enhance code quality.
- **Tailwind CSS Sorter**: Automatically organizes Tailwind CSS classes to improve readability and maintainability.

## Project Structure

The project follows a clear and organized structure:

## Project Structure

Below is the basic folder structure of the project:

```bash
src
├── globals.css          # Global styles for the application
├── app
│   ├── [locale]        # Directory for localization files
│   │   ├── layout.tsx   # Layout component for pages
│   │   └── page.tsx     # Main page for each locale
│   ├── [...rest]        # Catch-all route for additional pages
│   │   └── page.tsx     # Default page component
├── components            # Reusable components for the application
│   ├── theme            # Theme-related components (e.g., toggler)
│   ├── ui               # UI components (e.g., buttons, modals)
│   └── view             # Components for different views
│       ├── header       # Header component
│       ├── feature      # Feature components
│       └── footer       # Footer component
├── i18n                 # Internationalization files and configurations
└── lib                  # Utility functions and shared libraries

message                   # Translation files for localization
├── en.json              # English translations
├── ja.json              # Japanese translations
└── pt.json              # Portuguese translations
```
## Responsiveness

The project is fully responsive and provides an optimal experience across various devices:

![Konbini Web Preview](https://cdn.cosmicjs.com/ac06ccb0-80fe-11ef-9257-112b43bd2f70-iPhone-13-PRO-konbinicode.com.png)

- **Desktop**: The layout adapts beautifully to larger screens, ensuring all elements are displayed correctly.
- **Tablet**: The design maintains usability and readability, adjusting elements for a comfortable browsing experience.
- **Mobile**: A mobile-first approach ensures the site is easy to navigate and interact with on smaller screens.

## Deploy

The project is deployed and can be accessed at:

[Live Demo](https://konbinicode.com/en)

