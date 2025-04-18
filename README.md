Here's an improved version of your README with better organization, clearer language, and enhanced visual appeal:

---

# � Konbini Code - Modern Website Development

![Konbini Web Preview](https://cdn.cosmicjs.com/b1e6b4b0-80fe-11ef-9257-112b43bd2f70-Macbook-Air-konbinicode.com.png)

**Konbini Code** is a cutting-edge website template built with modern UI/UX principles, offering a responsive design, sleek animations, and robust functionality.

> **⚠️ Copyright Notice**  
> This project is protected under copyright law. Unauthorized use, reproduction, or distribution of this code is strictly prohibited.

---

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/fernandohiroshi/konbini-code.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📋 Table of Contents

- [✨ Key Features](#-key-features)
- [🛠️ Technologies Used](#%EF%B8%8F-technologies-used)
- [📂 Project Structure](#-project-structure)
- [🌐 Multilingual & Responsive](#-multilingual--responsive)
- [🎨 Code Quality](#-code-quality)
- [🚀 Deployment](#-deployment)

---

## ✨ Key Features

- **🌍 Multilingual Support** – Seamless language switching (English, Japanese, Portuguese).
- **🎆 Dynamic Particle Backgrounds** – Interactive animations using Tsparticles.
- **🔔 User Feedback** – Elegant notifications via React Hot Toast.
- **♿ Accessibility-First** – WCAG-compliant components built with Radix UI.
- **📱 Fully Responsive** – Flawless experience on all devices (mobile, tablet, desktop).

![Mobile Preview](https://cdn.cosmicjs.com/ac06ccb0-80fe-11ef-9257-112b43bd2f70-iPhone-13-PRO-konbinicode.com.png)

---

## 🛠️ Technologies Used

| Category          | Tools                                    |
| ----------------- | ---------------------------------------- |
| **Framework**     | Next.js, React                           |
| **Styling**       | Tailwind CSS, Tailwind Merge             |
| **Animation**     | Framer Motion, Tsparticles               |
| **UI Components** | Radix UI, CVA (Class Variance Authority) |
| **Icons**         | Lucide Icons, Tabler Icons               |
| **Theming**       | Next Themes (Dark/Light mode)            |
| **i18n**          | Next Intl                                |
| **Emails**        | EmailJS                                  |

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── [locale]/           # Localized routes (en, ja, pt)
│   │   ├── layout.tsx      # Shared layout
│   │   └── page.tsx        # Localized homepage
│   └── [...rest]/          # Catch-all routes
├── components/
│   ├── theme/              # Dark/light mode toggle
│   ├── ui/                 # Reusable UI (buttons, modals)
│   └── view/               # Page sections (header, footer)
├── i18n/                   # Internationalization config
└── lib/                     # Utilities & helpers

messages/                   # Translation files
├── en.json
├── ja.json
└── pt.json
```

---

## 🌐 Multilingual & Responsive

- **Language Support**: Easily extendable with JSON translations.
- **Mobile-First Design**: Adapts flawlessly to all screen sizes.

---

## 🎨 Code Quality

- **Prettier + ESLint**: Enforced code consistency.
- **Tailwind Class Sorting**: Auto-organized utility classes.
- **Type Safety**: TypeScript integration for fewer runtime errors.

---

## 🚀 Deployment

Access the live demo:  
🔗 [https://konbinicode.com/en](https://konbinicode.com/en)

---

### 📜 License

All rights reserved. Unauthorized copying or reuse prohibited.

---
