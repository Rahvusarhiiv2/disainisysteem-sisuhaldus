---
layout: base
title: Kirjatüübid
relative: ..

eleventyNavigation:
  parent: Utilities
  key: Kirjatüübid
  order: 7
---

# Kirjatüübid

<p class="-mt-8 text-gray-300">Rahvusarhiivi rakendustes tohib kasutada ainult järgmisi kirjatüüpe:</p>

Klass | Kirjatüüp (laadid) | Soovitus  
-- | -- | -- 
font-body | Roboto (400, 500, 700; kursiivis: 400, 700) | vaikimisi kõikjal, kus pole määratud teist kirjatüüpi
font-heading | Raleway (600) | pealkirjade jaoks
font-mono | Monospace | programmikoodi jaoks

<div class="bg-gray-50 rounded p-4 mb-8">
  <div class="border-b flex space-x-6 pb-4">
    <code class="text-sm select-all">font-body</code>
    <span class="text-sm font-mono text-gray-300">Roboto</span>
  </div>
  <p class="font-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

<div class="bg-gray-50 rounded p-4 mb-8">
  <div class="border-b flex space-x-6 pb-4">
    <code class="text-sm select-all">font-heading</code>
    <span class="text-sm font-mono text-gray-300">Raleway</span>
  </div>
  <p class="font-heading text-xl">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

<div class="bg-gray-50 rounded p-4 mb-8">
  <div class="border-b flex space-x-6 pb-4">
    <code class="text-sm select-all">font-mono</code>
    <span class="text-sm font-mono text-gray-300">Monospace</span>
  </div>
  <p class="font-mono">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

```html
<div class="font-body ..."></div>
<div class="font-heading ..."></div>
<div class="font-mono ..."></div>
```

## Kirjalaadid

Roboto kirjatüübi puhul saab kirjalaadi määramiseks kasutada järgmisi klasse: 

<div class="bg-gray-50 rounded p-4 mb-8">
  <div class="border-b flex space-x-6 pb-4">
    <code class="text-sm select-all">font-body font-normal</code>
    <span class="text-sm font-mono text-gray-300">Roboto 400</span>
  </div>
  <p class="font-body font-normal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

<div class="bg-gray-50 rounded p-4 mb-8">
  <div class="border-b flex space-x-6 pb-4">
    <code class="text-sm select-all">font-body font-medium</code>
    <span class="text-sm font-mono text-gray-300">Roboto 500</span>
  </div>
  <p class="font-body font-medium">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

<div class="bg-gray-50 rounded p-4 mb-8">
  <div class="border-b flex space-x-6 pb-4">
    <code class="text-sm select-all">font-body font-bold</code>
    <span class="text-sm font-mono text-gray-300">Roboto 700</span>
  </div>
  <p class="font-body font-bold">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

```html
<div class="font-body font-normal ..."></div>
<div class="font-body font-medium ..."></div>
<div class="font-body font-bold ..."></div>
```

Neist kaks klassi toimivad ka kursiivis:

<div class="bg-gray-50 rounded p-4 mb-8">
  <div class="border-b flex space-x-6 pb-4">
    <code class="text-sm select-all">font-body font-normal italic</code>
    <span class="text-sm font-mono text-gray-300">Roboto 400 kursiiv</span>
  </div>
  <p class="font-body font-normal italic">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

<div class="bg-gray-50 rounded p-4 mb-8">
  <div class="border-b flex space-x-6 pb-4">
    <code class="text-sm select-all">font-body font-bold italic</code>
    <span class="text-sm font-mono text-gray-300">Roboto 700 kursiiv</span>
  </div>
  <p class="font-body font-bold italic">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

```html
<div class="font-body font-normal italic ..."></div>
<div class="font-body font-bold italic ..."></div>
```