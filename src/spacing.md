---
layout: base
title: Spacing

eleventyNavigation:
  parent: Styles
  key: Spacing
---

# Spacing scale

Spacing scale includes small increments needed to create cohesive spatial relationships of different elements.

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Size</th>
      <th class="hidden sm:table-cell">
        <span class="sr-only">Preview</span></th>
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
