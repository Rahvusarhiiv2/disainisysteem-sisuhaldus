---
layout: base
title: Rahvusarhiiv
index: true

eleventyNavigation:
  parent: Home
  key: Getting Started
---

# Getting Started

Welcome to Rahvusarhiiv Design System documentation site. This is the source of truth and hub to everything that is related to Rahvusarhiiv Design System.

The system is used for designing and building consistent user interfaces faster within Rahvusarhiiv. It consists of different reusable tools and principles for designers and developers.

- UI Design Kit (built in Figma) for designers
- Voice and tone guidelines for content and texts
- Utility-first CSS framework (based on Tailwind CSS)
- Reusable coded components and patterns

## For designers

```md
- [ ] TODO: Briefly describe the UI Design Kit in Figma and link to doc site page.
```

---

## For developers

The design system frontend methodology is based on [Tailwind CSS](https://tailwindcss.com/) — constraint-based utility classes. Tailwind CSS configuration and its values are the "design tokens" and an API for our design system. Sensible defaults on which components and complex user interfaces are built.

> Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

— tailwindcss.com

### Usage

#### 1. Set up Tailwind CSS into your codebase build pipeline

To integrate a proper CSS generation for your frontend code build pipeline check out [Tailwind CSS documentation for examples with using standalone executable Tailwind CLI or PostCSS](https://tailwindcss.com/docs/installation).

**Note:** Rahvusarhiiv Design System Tailwind CSS uses the official [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) plugin which is a dependency for the system.

```shell
npm install -D @tailwindcss/typography
```

#### 2. Copy over the Design System custom `tailwind.config.js` into your system

The foundation of Tailwind CSS is the single configuration file `tailwind.config.js` from which all the utility classes are generated.

Get the newest configuration file from the [Rahvusarhiiv Design System repository](#).

#### 3. Configure your template paths

Add the paths to all of your template files into the `content` key in the new configuration file where Tailwind CSS utility classes will occur.

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
