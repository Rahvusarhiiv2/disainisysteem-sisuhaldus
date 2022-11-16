---
layout: base
title: Shadows
relative: ..

eleventyNavigation:
  parent: Utilities
  key: Shadows
---

# Shadows

Shadows are used for showing elements subtle elevation changes and their location on the Z axis (in 3D space). Different components use elevation differently. Reference the UI Kit.

<div class="flex space-x-10 mb-20">

  <div class="flex items-center justify-center text-sm w-52 h-36 rounded shadow-sm">Small</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 rounded shadow-md">Medium</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 rounded shadow">Default</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 rounded shadow-lg">Large</div>

</div>

```html
<div class="shadow-sm">Small</div>
<div class="shadow-md">Medium</div>
<div class="shadow">Default</div>
<div class="shadow-lg">Large</div>
```
