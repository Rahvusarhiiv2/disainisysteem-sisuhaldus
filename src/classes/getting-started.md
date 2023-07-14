---
layout: base
title: Seadistamine
relative: ../..

eleventyNavigation:
  parent: Classes
  key: Seadistamine
  order: 1
---

# Seadistamine

<p class="-mt-8 text-gray-300">Rahvusarhiivi disainisüsteemi on soovitatav kasutada stiiliraamistiku "Tailwind CSS" abil</p>

## 1. Paigalda stiiliraamistik

Loe [dokumentatsioonist](https://tailwindcss.com/docs/installation), kuidas paigaldada stiiliraamistik "Tailwind CSS".

## 2. Kopeeri rahvusarhiivi stiilierisused 

Kopeeri alljärgnev kood oma projekti failina `rahvusarhiiv.presets.js`:


```js
{% include "../../rahvusarhiiv.preset.js" %}
```

## 3. Seadista rahvusarhiivi stiilierisused

Lisa faili `tailwind.config.js` viide failile `rahvusarhiiv.presets.js`:

```js
module.exports = {
  presets: [
    require('./rahvusarhiiv.presets.js')
  ],
  ...
}

```

Rahvusarhiivi stiilierisused muudavad ainult väikest osa üldisest stiiliraamistikust. Suurem osa raamistikust toimib ka pärast erisuste paigaldamist edasi nii, nagu on kirjeldatud [dokumentatsioonis](https://tailwindcss.com/docs/).


## 4. Seadista rahvusarhiivi baas-stiil ja kirjatüübid

Laadi alla [kirjatüüpide failid](../../assets/fonts/fonts.zip) ja kopeeri need oma projekti `fonts` kausta. Lisa rakenduse CSS faili järgmised read:

```css
@tailwind base;

body {
  color: theme("colors.gray.900");
  font-family: theme("fontFamily.body");
}

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

@tailwind components;
@tailwind utilities;

```

Prototüübis võib kirjatüübid Google API kaudu linkida:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

## 5. Seadista pistikud

Käivita konsoolis: 

```shell
npm install @tailwindcss/typography
npm install @tailwindcss/forms
```

Lisa faili `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms"),
  ],
  ...
}
```
