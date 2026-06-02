---
layout: base
title: Varjud

eleventyNavigation:
  parent: Classes
  key: Varjud
  order: 3
---

# Varjud

<p class="-mt-8 text-gray-300">Rahvusarhiivi rakendustes tohib kasutada ainult järgmisi varje</p>

Klass&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Omadus
-- | -- 
shadow-sm | 0px 10px 80px rgba(0, 0, 0, 0.02275), 0px 5.0625px 34.875px rgba(0, 0, 0, 0.035), 0px 2px 13px rgba(0, 0, 0, 0.04725), 0px 0.4375px 4.625px rgba(0, 0, 0, 0.07) 
shadow-md | 0px 33px 80px rgba(0, 0, 0, 0.02275), 0px 16.7062px 34.875px rgba(0, 0, 0, 0.035), 0px 6.6px 13px rgba(0, 0, 0, 0.04725), 0px 1.44375px 4.625px rgba(0, 0, 0, 0.07)
shadow | 0px 43px 80px rgba(0, 0, 0, 0.02275), 0px 21.7687px 34.875px rgba(0, 0, 0, 0.035), 0px 8.6px 13px rgba(0, 0, 0, 0.04725), 0px 1.88125px 4.625px rgba(0, 0, 0, 0.07) 
shadow-lg | 0px 65px 80px rgba(0, 0, 0, 0.02275), 0px 32.9062px 34.875px rgba(0, 0, 0, 0.035), 0px 13px 13px rgba(0, 0, 0, 0.04725), 0px 2.84375px 4.625px rgba(0, 0, 0, 0.07)
shadow-inner | inset 0 2px 4px 0 rgb(0 0 0 / 0.05)

<div class="flex space-x-10 my-20">
  <div class="flex items-center justify-center text-sm w-52 h-36 shadow-sm select-all">shadow-sm</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 shadow-md select-all">shadow-md</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 shadow select-all">shadow</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 shadow-lg select-all">shadow-lg</div>
  <div class="flex items-center justify-center text-sm w-52 h-36 shadow-inner select-all">shadow-inner</div>
</div>

```html
<div class="shadow-sm ..."></div>
<div class="shadow-md ..."></div>
<div class="shadow ..."></div>
<div class="shadow-lg ..."></div>
<div class="shadow-inner ..."></div>
```
