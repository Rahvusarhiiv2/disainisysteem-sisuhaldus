---
layout: base
title: Kirjasuurused

eleventyNavigation:
  parent: Classes
  key: Kirjasuurused
  order: 9
---

# Kirjasuurused

<p class="-mt-8 text-gray-300">Rahvusarhiivi rakendustes tohib kasutada ainult järgmisi kirjasuurusi ja reavahesid</p>

{% for name, size in tailwindData.fontSize %}

<div class="bg-gray-50 rounded p-4 mb-8">
  <div class="border-b flex space-x-6 pb-4">
    <code class="text-sm select-all">text-{{ name }}</code>
    <span class="text-sm font-mono text-gray-300">font size: {{ size[0] }} — line-height: {{ size[1].lineHeight }}</span>
  </div>
  <p style="font-size: {{ size[0] }}; line-height: {{ size[1].lineHeight }};">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tortor at ipsum efficitur varius. Etiam auctor dictum turpis, vel faucibus diam iaculis eu. Morbi in quam non mi consectetur tempor.
  </p>
</div>

{% endfor %}

```html
<div class="font-xs ..."></div>
<div class="font-sm ..."></div>
<div class="font-base ..."></div>
<div class="font-lg ..."></div>
<div class="font-xl ..."></div>
<div class="font-2xl ..."></div>
<div class="font-3xl ..."></div>
<div class="font-4xl ..."></div>
<div class="font-5xl ..."></div>
```
