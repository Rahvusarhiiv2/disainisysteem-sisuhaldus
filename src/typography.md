---
layout: base
title: Typography
relative: ..

eleventyNavigation:
  parent: Styles
  key: Typography
---

# Typography

## Font families

<div class="space-y-8 mb-20">
  <div class="flex w-full flex-col space-y-2">
    <code class="text-sm text-gray-300">font-body</code>
    <p class="text-xl font-body">Roboto — The quick brown fox ...</p>
  </div>

  <div class="flex w-full flex-col space-y-2">
    <code class="text-sm text-gray-300">font-display</code>
    <p class="text-xl font-display">Raleway — The quick brown fox ...</p>
  </div>

  <div class="flex w-full flex-col space-y-2">
    <code class="text-sm text-gray-300">font-mono</code>
    <p class="text-xl font-mono">System Font Stack — The quick brown fox ...</p>
  </div>
</div>

---

<table class="mb-20">
  <thead>
    <th>Font Family</th>
    <th>Usage</th>
    <th>Utility class</th>
    <th>Available weights and styles</th>
  </thead>
  <tbody>
    <tr>
      <td>Roboto</td>
      <td>Default body text</td>
      <td><code>.font-body</code></td>
      <td>400, 500, 700, italic 400, italic 700</td>
    </tr>
    <tr>
      <td>Raleway</td>
      <td>Headings</td>
      <td><code>.font-display</code></td>
      <td>600</td>
    </tr>
    <tr>
      <td>System monospace font stack</td>
      <td>Code (mostly internal use)</td>
      <td><code>.font-mono</code></td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Rahvusarhiiv Design System uses two fonts: **Roboto** for body text and **Raleway** for headings.

Every text should use the `body` font family by default. `display` is reserved for headings and titles. `mono` is an edge case when it comes to setting type, for example, for showing code snippets in internal tools.

Both fonts are available from Google Fonts:

- [Roboto (Google Fonts)](https://fonts.google.com/specimen/Roboto)
- [Raleway (Google Fonts)](https://fonts.google.com/specimen/Raleway)

## Typographic scale

```md
- [ ] TODO: Fetch the scale from tailwind config file and build the table
```

## Typographic defaults for vanilla HTML

Rahvusarhiiv frontend framework uses Tailwind CSS [Typography plugin](https://tailwindcss.com/docs/typography-plugin) for default styles in using vanilla HTML you don’t control, like HTML rendered from WYSIWYG editors and fetched from database.

Wrap the rendered content with `prose` class.

```html
<article class="prose">
  <h1>Title</h1>
  <p>Lorem ipsum...</p>
  [...]
</article>
```

## Implementation in code

For prototyping you can use Google Fonts CDN, but for optimal performance self-hosting the font is more performant. [Read more about modern use of Web Fonts](https://leerob.io/blog/fonts).

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>
```
