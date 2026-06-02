---
layout: base
title: Kirjatüübid

eleventyNavigation:
  parent: Classes
  key: Kirjatüübid
  order: 7
---

# Kirjatüübid

<p class="-mt-8 text-gray-300">Rahvusarhiivi rakendustes tohib kasutada ainult järgmisi kirjatüüpe</p>

Klass | Kirjatüüp | Kaal | Soovitus  
-- | -- | -- | --
font-body | Roboto | 400 | vaikimisi kõikjal, kus pole määratud teist kirjatüüpi
font-heading | Raleway | 600 | pealkirjade jaoks
font-display | Sora | 600 | suuremate pealkirjade ja esiletõstetud teksti jaoks
font-mono | Monospace | — | programmikoodi jaoks

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
    <code class="text-sm select-all">font-display</code>
    <span class="text-sm font-mono text-gray-300">Sora</span>
  </div>
  <p class="font-display text-2xl">
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
<div class="font-display ..."></div>
<div class="font-mono ..."></div>
```
