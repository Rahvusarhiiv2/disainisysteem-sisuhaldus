---
layout: base
title: Astmik
relative: ../..

eleventyNavigation:
  parent: Classes
  key: Astmik
  order: 6
---

# Astmik

<p class="-mt-8 text-gray-300">
  Elementide, piirjoonte ja vahekauguste suuruse määramiseks on soovitatav kasutada järgmist astmikku
</p>

<table>
  <thead>
    <tr>
      <th>Kood</th>
      <th>Omadus</th>
      <th class="hidden sm:table-cell">Näide</th>
    </tr>
  </thead>
  <tbody>

{% for name, size in tailwindData.spacing %}

  <tr>
    <td>{{ name }}</td>
    <td>{{ size }}</td>
    <td><div class="h-4 bg-green-500" style="width: {{ size }};"></div></td>
  </tr>

{% endfor %}

</tbody>
</table>

## Astmiku kasutamine stiiliraamistikus "Tailwind CSS"

Astmiku kood esineb paljudes klassinimedes: `w-{kood}`, `h-{kood}`, `p-{kood}`, `m-{kood}`, `space-x-{kood}`, `space-y-{kood}`, `gap-{kood}`. Lisaks on võimalik määrata mõõt ka pikselite järgi: `w-[234px]`.

Loe täpsemalt [dokumentatsioonist](https://tailwindcss.com/docs).


