---
layout: base
title: Border Radius
relative: ..

eleventyNavigation:
  parent: Utilities
  key: Border Radius
---

# Border Radius

Rahvusarhiiv design system use rounded corners on various elements and components (buttons, forms, tooltips, etc) and they are mostly the same default size (utility class `.rounded`). `full` rounded border radius is reserved for components where full circle is needed. For example Badge.

---

<div class="flex space-x-10 mb-20">
  <div class="flex items-center justify-center text-sm w-52 h-36 rounded shadow">Default</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 rounded-full shadow">Full</div>
</div>

```html
<div class="rounded">Default</div>
<div class="rounded-full">Full</div>
```
