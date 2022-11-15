---
layout: base
title: Installation
relative: ..

eleventyNavigation:
  parent: Utilities
  key: Installation
  order: -1
---

# Installation

## 1. Install Tailwind CSS

Consult [the official documentation](https://tailwindcss.com/docs/installation) on how to install Tailwind CSS.



## 2. Add custom configuration file

Save following as `rahvusarhiiv.presets.js` into your project:


```js
{% include "../rahvusarhiiv.preset.js" %}
```

## 3. Configure custom presets

Require `rahvusarhiiv.presets.js` as presets in `tailwind.config.js` as follows:

```js
module.exports = {
  presets: [
    require('./rahvusarhiiv.presets.js')
  ],
  ...
}

```

## 4. Configure custom fonts

For prototyping you can use Google Fonts CDN, but for optimal performance self-hosting is more performant. In case of self-hosting add font-face rules in `tailwind.css` as follows:

```css
@layer base {
  @font-face {
    font-family: 'Raleway';
    font-weight: 400;
    font-display: swap;
    font-style: normal;
    src: url('./fonts/Raleway-VariableFont_wght.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 400;
    font-display: swap;
    font-style: italic;
    src: url('./fonts/Raleway-Italic-VariableFont_wght.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-display: swap;
    font-style: normal;
    src: url('./fonts/Roboto-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-display: swap;
    font-style: normal;
    src: url('./fonts/Roboto-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-display: swap;
    font-style: normal;
    src: url('./fonts/Roboto-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-display: swap;
    font-style: italic;
    src: url('./fonts/Roboto-Italic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-display: swap;
    font-style: italic;
    src: url('./fonts/Roboto-BoldItalic.ttf') format('truetype');
  }
}

```


## 5. Make use of default utilities

Custom configuration overrides only necessary parts of the configuration to adhere to our design rules. All other utilities and configurations are default to Tailwind CSS. [Browse the official documentation.](https://tailwindcss.com/docs/)
