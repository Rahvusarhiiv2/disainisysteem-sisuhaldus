---
layout: base
title: Kumerused
relative: ../..

eleventyNavigation:
  parent: Classes
  key: Kumerused
  order: 2
---

# Kumerused

<p class="-mt-8 text-gray-300">Rahvusarhiivi rakendustes tohib kasutada ainult järgmisi kumerusi</p>

Klass | Omadus | Soovitus
-- | -- | --
rounded-sm | border-radius: 0.25rem; /* 4px */ | väikeste elementide jaoks (nupud, sildid jne)
rounded | border-radius: 0.5rem; /* 8px */ | keskmiste ja suurte elementide jaoks (menüüd, pisipildid, hüpikaknad, jne)
rounded-full | border-radius: 9999px; | ümmarguste elementide jaoks

<div class="flex space-x-10 my-20">
  <div class="flex items-center justify-center text-sm w-52 h-36 rounded-sm border border-black select-all">rounded-sm</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 rounded border border-black select-all">rounded</div>
  <div class="flex items-center justify-center text-sm w-36 h-36 rounded-full border border-black select-all">rounded-full</div>
</div>


```html
<div class="rounded-sm ..."></div>
<div class="rounded ..."></div>
<div class="rounded-full ..."></div>
```

NB! Kumerusi on võimalik määrata ka nurkade ja servade kaupa! Loe selle kohta [dokumentatsioonist](https://tailwindcss.com/docs/border-radius#rounding-sides-separately).