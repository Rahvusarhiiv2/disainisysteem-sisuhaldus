---
layout: base
title: Rahvusarhiiv
relative: .

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

From a designer's perspective, the primary tool is the **UI Design Kit**. I.e. a Figma file with all the same base styles and naming logic as is the CSS framework and developer tools. Design Kit contains components, styleguide and complex UI patterns.

---

## For developers

The design system frontend methodology is based on [Tailwind CSS](https://tailwindcss.com/) — constraint-based utility classes. Tailwind CSS configuration and its values are the "design tokens" and an API for our design system. Sensible defaults on which components and complex user interfaces are built.

> Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

— tailwindcss.com

### Usage

#### 1. Set up Tailwind CSS into your codebase build pipeline

To integrate a proper CSS generation for your frontend code build pipeline check out [Tailwind CSS documentation for examples with using standalone executable Tailwind CLI or PostCSS](https://tailwindcss.com/docs/installation).

**Note:** Rahvusarhiiv Design System documentation site uses the official [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) plugin which is a dependency for the site. If you want to use it on your application, install the package and add plugin into the configuration.

```shell
npm install -D @tailwindcss/typography
```

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [require("@tailwindcss/typography")],
};
```

#### 2. Set up Rahvusarhiiv Design System configuration preset `rahvusarhiiv.preset.js` in your codebase

The foundation of Tailwind CSS is the single configuration file `tailwind.config.js` from which all the utility classes are generated.

Rahvusarhiiv Design System use a [pre-configured preset](https://tailwindcss.com/docs/presets) with all the base styles.

Get the newest configuration preset file from the [Rahvusarhiiv Design System repository](#).

Register the preset in your code base.

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./rahvusarhiiv.preset.js")],
  // ...
};
```

#### 3. Configure your template paths

Add the paths to all of your template files into the `content` key in the new configuration file where Tailwind CSS utility classes will occur.

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html,php}", "./src/**/*.svg", "./.eleventy.js"],
  presets: [require("./rahvusarhiiv.preset.js")],
  plugins: [require("@tailwindcss/typography")],
};
```
