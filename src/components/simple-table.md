---
layout: base
title: Simple Table
formatContent: false
relative: ../..

eleventyNavigation:
  parent: Components
  key: Simple Table
  order: 1
---

<div class="prose mb-10 max-w-5xl">

# Example simple table component

## Demo

</div>

<table class="w-full text-left">
  <thead class="text-sm font-medium">
    <th class="font-medium py-4 px-4">#</th>
    <th class="font-medium py-4 px-4">Pealkiri</th>
    <th class="font-medium py-4 px-4">Leidandmed</th>
    <th class="font-medium py-4 px-4">Piirdaatumid</th>
    <th class="font-medium py-4 px-4">Uurimisaal</th>
    <th class="font-medium py-4 px-4">Tasand</th>
    <th class="font-medium py-4 px-4">Arhiiv</th>
  </thead>
  <tbody>
    <tr class="even:bg-gray-light-50 hover:bg-gray-light-200 odd:bg-white">
      <td class="py-4 px-4 rounded-l">1</td>
      <td class="py-4 px-4 text-info font-medium">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja ühiskonnategelased  paguluses</td>
      <td class="py-4 px-4">ERA, 4991</td>
      <td class="py-4 px-4">1906-2004</td>
      <td class="py-4 px-4">Tallinn</td>
      <td class="py-4 px-4">Arhiiv</td>
      <td class="py-4 px-4 rounded-r">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja  ühiskonna-tegelased paguluses </td>
    </tr>
    <tr class="even:bg-gray-light-50 hover:bg-gray-light-200 odd:bg-white">
      <td class="py-4 px-4 rounded-l">2</td>
      <td class="py-4 px-4 text-info font-medium">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja ühiskonnategelased  paguluses</td>
      <td class="py-4 px-4">ERA, 4991</td>
      <td class="py-4 px-4">1906-2004</td>
      <td class="py-4 px-4">Tallinn</td>
      <td class="py-4 px-4">Arhiiv</td>
      <td class="py-4 px-4 rounded-r">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja  ühiskonna-tegelased paguluses </td>
    </tr>
    <tr class="even:bg-gray-light-50 hover:bg-gray-light-200 odd:bg-white">
      <td class="py-4 px-4 rounded-l">3</td>
      <td class="py-4 px-4 text-info font-medium">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja ühiskonnategelased  paguluses</td>
      <td class="py-4 px-4">ERA, 4991</td>
      <td class="py-4 px-4">1906-2004</td>
      <td class="py-4 px-4">Tallinn</td>
      <td class="py-4 px-4">Arhiiv</td>
      <td class="py-4 px-4 rounded-r">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja  ühiskonna-tegelased paguluses </td>
    </tr>
    <tr class="even:bg-gray-light-50 hover:bg-gray-light-200 odd:bg-white">
      <td class="py-4 px-4 rounded-l">4</td>
      <td class="py-4 px-4 text-info font-medium">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja ühiskonnategelased  paguluses</td>
      <td class="py-4 px-4">ERA, 4991</td>
      <td class="py-4 px-4">1906-2004</td>
      <td class="py-4 px-4">Tallinn</td>
      <td class="py-4 px-4">Arhiiv</td>
      <td class="py-4 px-4 rounded-r">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja  ühiskonna-tegelased paguluses </td>
    </tr>
    <tr class="even:bg-gray-light-50 hover:bg-gray-light-200 odd:bg-white">
      <td class="py-4 px-4 rounded-l">5</td>
      <td class="py-4 px-4 text-info font-medium">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja ühiskonnategelased  paguluses</td>
      <td class="py-4 px-4">ERA, 4991</td>
      <td class="py-4 px-4">1906-2004</td>
      <td class="py-4 px-4">Tallinn</td>
      <td class="py-4 px-4">Arhiiv</td>
      <td class="py-4 px-4 rounded-r">Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja  ühiskonna-tegelased paguluses </td>
    </tr>
  </tbody>
</table>

<div class="prose my-10 max-w-5xl">

## Code

```html
<table class="w-full text-left">
  <thead class="text-sm font-medium">
    <th class="font-medium py-4 px-4">#</th>
    <th class="font-medium py-4 px-4">Pealkiri</th>
    <th class="font-medium py-4 px-4">Leidandmed</th>
    <th class="font-medium py-4 px-4">Piirdaatumid</th>
    <th class="font-medium py-4 px-4">Uurimisaal</th>
    <th class="font-medium py-4 px-4">Tasand</th>
    <th class="font-medium py-4 px-4">Arhiiv</th>
  </thead>
  <tbody>
    <tr class="even:bg-gray-light-50 hover:bg-gray-light-200 odd:bg-white">
      <td class="py-4 px-4 rounded-l">1</td>
      <td class="py-4 px-4 text-info font-medium">
        Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja ühiskonnategelased
        paguluses
      </td>
      <td class="py-4 px-4">ERA, 4991</td>
      <td class="py-4 px-4">1906-2004</td>
      <td class="py-4 px-4">Tallinn</td>
      <td class="py-4 px-4">Arhiiv</td>
      <td class="py-4 px-4 rounded-r">
        Eliaser, Agnia ja Elga - literaadid, ajakirjanikud ja
        ühiskonna-tegelased paguluses
      </td>
    </tr>
  </tbody>
</table>
```

</div>
