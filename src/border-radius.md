---
layout: base
title: Border Radius
relative: ..

eleventyNavigation:
  parent: Utilities
  key: Border Radius
---

# Border Radius

Class | Properties | Recommended
-- | -- | --
rounded-sm | border-radius: 0.25rem; /* 4px */ | for something like a button
rounded | border-radius: 0.5rem; /* 8px */ | for various elements and components (dropdowns, thumbnails, etc)
rounded-full | border-radius: 9999px; | for components where full circle is needed


<div class="flex space-x-10 my-20">
  <div class="flex items-center justify-center text-sm w-52 h-36 rounded-sm border border-black">rounded-sm</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 rounded border border-black">rounded</div>
  <div class="flex items-center justify-center text-sm w-36 h-36 rounded-full border border-black">rounded-full</div>
</div>


```html
<div class="rounded-sm ..."></div>
<div class="rounded ..."></div>
<div class="rounded-full ..."></div>
```

Note that you can round sides and corners separately! Please consult [the official documentation](https://tailwindcss.com/docs/border-radius#rounding-sides-separately).