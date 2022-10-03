---
layout: base
title: Colors
relative: ..

eleventyNavigation:
  parent: Styles
  key: Colors
---

# Colors

```md
- [ ] TODO: Add full color scheme table
```

---

## Naming

As colors are not only aesthetic choices, but also have a meaning in different contexts, we have a color naming system that is in two layers — literal and semantic.

The first layer is **literal color names** (red, green, etc.) with a numeric scale (where `50` is lightest and `900` is darkest).

```js
// tailwind.config.js

const literalColors = {
  // ...
  red: {
    50: "#feeceb", // error light
    100: "#fdd9d7",
    200: "#fbb4af",
    300: "#f88e86",
    400: "#f6695e",
    500: "#f44336", // error default
    600: "#c3362b",
    700: "#922820",
    800: "#621b16",
    900: "#310d0b",
  },
  // ...
};
```

These literal names are the foundation colors, which are referenced by semantic names.

Literal colors usage should be limited only for purely aesthetics parts of the design.

The second layer is **semantic names**. Color names like `success`, `warning`, `action`, etc. that have meaning and depend on context. Every semantic color also has a lighter version of the default color. Semantic color values come from literal colors. For example, if you need to change the color of the form error message throughout the system, you would only need to change the value of the semantic named color not the value of the base color.

```js
// tailwind.config.js

// ...
error: {
  light: literalColors.red.100,
  DEFAULT: literalColors.red.500,
  dark: literalColors.red.700,
},
// ...
```
