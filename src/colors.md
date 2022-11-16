---
layout: base
title: Colors
relative: ..

eleventyNavigation:
  parent: Utilities
  key: Colors
---

# Colors

<div>
  <h2 class="capitalize mb-4">Varia</h2>

  <div class="grid lg:grid-cols-10 md:grid-cols-6 grid-cols-4 gap-4">

  <div class="flex flex-col">
    <div class="h-12 w-full rounded border mb-2" style="background-color: #000;"></div>
    <div class="text-sm font-bold select-all">black</div>
    <div class="text-sm text-gray-300 select-all">#000000</div>
  </div>

  <div class="flex flex-col">
    <div class="h-12 w-full rounded border mb-2" style="background-color: #fff;"></div>
    <div class="text-sm font-bold select-all">white</div>
    <div class="text-sm text-gray-300 select-all">#ffffff</div>
  </div>

  <div class="flex flex-col">
    <div class="h-12 w-full rounded border mb-2" style="background-color: transparent;"></div>
    <div class="text-sm font-bold select-all">transparent</div>
    <div class="text-sm text-gray-300 select-all">transparent</div>
  </div>

  <div class="flex flex-col">
    <div class="h-12 w-full rounded border mb-2" style="background-color: currentColor;"></div>
    <div class="text-sm font-bold select-all">current</div>
    <div class="text-sm text-gray-300 select-all">currentColor</div>
  </div>

  </div>
</div>

{% for n1, obj1 in tailwindData.colors %}

{# Discard non nested values from automatic render – `current`, `inherit`, `white`, `black`, `transparent` #}
{% if n1 !== 'current' and n1 !== 'inherit' and n1 !== 'white' and n1 !== 'black' and n1 !== 'transparent' %}

<div>
  <h2 class="capitalize mb-4">{{ n1 }}</h2>

  <div class="grid lg:grid-cols-10 md:grid-cols-6 grid-cols-4 gap-4">
  {% for n2, obj2 in obj1 %}

  <div class="flex flex-col">
    <div class="h-12 w-full rounded border mb-2" style="background-color: {{ obj2 }};"></div>
    <div class="text-sm font-bold select-all">{{n2}}</div>
    <div class="text-sm text-gray-300 select-all">{{obj2}}</div>
  </div>

{% endfor %}

  </div>
</div>

{% endif %}
{% endfor %}
