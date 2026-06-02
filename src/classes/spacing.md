---
layout: base
title: Astmik

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
    <td class="select-all">{{ name }}</td>
    <td>{{ size }}</td>
    <td><div class="h-4 bg-green-500" style="width: {{ size }};"></div></td>
  </tr>

{% endfor %}

</tbody>
</table>

Astmiku kasutamise kohta stiiliraamistikus "Tailwind CSS" loe täpsemalt [dokumentatsioonist](https://tailwindcss.com/docs).
