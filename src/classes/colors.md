---
layout: base
title: Värvid
relative: ../..

eleventyNavigation:
  parent: Classes
  key: Värvid
  order: 4
---

# Värvid

<p class="-mt-8 text-gray-300">Rahvusarhiivi rakendustes tohib kasutada ainult järgmisi värve</p>

<div class="mt-16">
  <div class="grid lg:grid-cols-10 md:grid-cols-6 grid-cols-4 gap-4">

  <div class="flex flex-col">
    <div class="h-12 w-full rounded-sm border mb-2" style="background-color: #000;"></div>
    <div class="text-sm font-bold select-all">black</div>
    <div class="text-sm text-gray-300 select-all">#000000</div>
  </div>

  <div class="flex flex-col">
    <div class="h-12 w-full rounded-sm border mb-2" style="background-color: #fff;"></div>
    <div class="text-sm font-bold select-all">white</div>
    <div class="text-sm text-gray-300 select-all">#ffffff</div>
  </div>

  <div class="flex flex-col">
    <div class="h-12 w-full rounded-sm border mb-2" style="background-color: transparent;"></div>
    <div class="text-sm font-bold select-all">transparent</div>
    <div class="text-sm text-gray-300 select-all">transparent</div>
  </div>

  <div class="flex flex-col">
    <div class="h-12 w-full rounded-sm border mb-2" style="background-color: currentColor;"></div>
    <div class="text-sm font-bold select-all">current</div>
    <div class="text-sm text-gray-300 select-all">currentColor</div>
  </div>

  </div>
</div>

{% for n1, obj1 in tailwindData.colors %}

{# Discard non nested values from automatic render – `current`, `inherit`, `white`, `black`, `transparent` #}
{% if n1 !== 'current' and n1 !== 'inherit' and n1 !== 'white' and n1 !== 'black' and n1 !== 'transparent' %}

<div>
  <h2 class="mt-8 mb-4">{{ n1 }}</h2>

  <div class="grid lg:grid-cols-10 md:grid-cols-6 grid-cols-4 gap-4">
  {% for n2, obj2 in obj1 %}

  <div class="flex flex-col">
    <div class="h-12 w-full rounded-sm border mb-2" style="background-color: {{ obj2 }};"></div>
    <div class="text-sm font-bold select-all">{{n2}}</div>
    <div class="text-sm text-gray-300 select-all">{{obj2}}</div>
  </div>

{% endfor %}

  </div>
</div>

{% endif %}
{% endfor %}


## Värvide määramine stiiliraamistikus "Tailwind CSS"

Värv määratakse klassiga, mille nimi koosneb kolmest osast, mis on eraldatud sidekriipsuga, näiteks `bg-gray-50`, kus `bg` on utiliidi nimi, `gray` värvi nimi ja `50` tooni kood.

<div class="space-y-6 my-12">
  <input class="placeholder-gray-300 border border-gray-300 p-2" placeholder="placeholder-gray-300">
  <p class="text-red-500">text-red-500</p>
  <p class="bg-gray-50 p-2">bg-gray-50</p>
  <p class="border border-green-500 p-2">border-green-500</p>
  <div class="grid grid-cols-3 divide-x-4 divide-yellow-500">
    <div class="bg-gray-50 p-2"></div>
    <div class="bg-gray-50 p-2 text-center">divide-yellow-500</div>
    <div class="bg-gray-50 p-2"></div>
  </div>
  <button class="rounded p-2 bg-blue-300 text-white text-center ring ring-blue-300 ring-offset-2 ring-offset-blue-100">ring-blue-300 ring-offset-blue-200</button>
</div>

```html
<input class="placeholder-gray-300 ...">
<p class="text-red-500 ..."></p>
<p class="bg-gray-50 ..."></p>
<p class="border-green-500 ..."></p>
<div class="divide-yellow-500 ...">
  <div></div>
  <div></div>
  <div></div>
</div>
<button class="ring-blue-300 ring-offset-blue-100 ..."></button>

```

Loe täpsemalt [dokumentatsioonist](https://tailwindcss.com/docs).