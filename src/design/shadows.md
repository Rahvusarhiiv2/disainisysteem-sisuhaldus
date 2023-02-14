---
layout: base
title: Varjude kasutamine
relative: ../..

eleventyNavigation:
  parent: Design
  key: Varjude kasutamine
  order: 1
---

# Varjude kasutamine

<p class="-mt-8 text-gray-300">Varjude kasutamise põhimõtted ja näited</p>

## Üldpõhimõtted

{% todo %}
  Kui element on n-ö õhus, siis sellel elemendil võiks olla vari.
{% endtodo %}

{% avoid %}
  Kui element on värvilisel taustal või pildi taustal, siis sellel elemendil tuleks varje vältida.
{% endavoid %}

## Väike vari

<p class="-mt-6 text-gray-500"></p>

## Keskmise vari

<p class="-mt-6 text-gray-500">Keskmist varju tuleb kasutada sisukastidel ja sakkidel</p>

### Sisukastid

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Valgel kastil on alati keskmine vari (shadow-md).
    {% endtodo %}
    {% avoid %}
      Hallil taustal ei tohi olla sisu.
    {% endavoid %}
  </div>
  <div class="not-prose w-1/2 rounded-sm p-2 bg-gray-50 grid grid-cols-3 gap-2">
    <div class="rounded-sm shadow-md col-span-3 p-4 bg-white">Õige</div>
    <div class="rounded-sm shadow-md h-64 p-4 bg-white">Õige</div>
    <div class="rounded-sm shadow-md h-64 col-span-2 p-4 bg-white">Õige</div>
  </div>    
</div>

<div class="flex mb-10">
  <div class="w-1/2">
    {% avoid %}
      Valgel kastil ei tohi olla teisi keskmise varjuga valgeid kaste nagu kõrvalolevas näites.
    {% endavoid %}
    {% todo %}
      Kui on vaja juurde lisada veel üks valge kast (näiteks tulemuste või modaalakende kuvamisel), siis sellel peab olema suur vari (shadow-lg).
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2 rounded-sm p-2 bg-gray-50 grid grid-cols-3 gap-2">
    <div class="rounded-sm shadow-md col-span-3 p-4 bg-white">Õige</div>
    <div class="rounded-sm shadow-md h-64 p-4 bg-white">Õige</div>
    <div class="rounded-sm shadow-md h-64 col-span-2 p-4 bg-white">
      Õige
      <div class="rounded-sm shadow-md p-2 bg-white">
        Vale
      </div>
    </div>
  </div>  
</div>

<div class="flex mb-10">
  <div class="w-1/2">
    {% avoid %}
      Ühe valge kasti vari ei tohi langeda teise kasti peale nagu kõrvalolevas näites
    {% endavoid %}
  </div>
  <div class="not-prose w-1/2 rounded-sm p-2 bg-gray-50 grid grid-cols-3 gap-2">
    <div class="rounded-sm shadow-md col-span-3 p-4 bg-white z-10">Vale</div>
    <div class="rounded-sm shadow-md h-64 p-4 bg-white z-0">Õige</div>
    <div class="rounded-sm shadow-md h-64 col-span-2 p-4 bg-white z-0">Õige</div>
  </div> 
</div>

### Sakid

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Aktiivsel sakil ja sisukastil peab olema sidus vari.
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2">
    <nav class="flex justify-start">
      <a href="#" class="w-24 rounded-t-sm shadow-md bg-white text-center py-1 realtive z-0">
        Sakk
      </a>
      <a href="#" class="w-24 text-center py-1">
        Sakk
      </a>
    </nav>
    <div class="bg-white rounded-b-sm rounded-tr-sm shadow-md h-48 -mb-1 p-4 relative z-10">
      <div class="w-24 h-2 -ml-4 -mt-5 bg-white"></div>
      <div class="flex flex-wrap content-center justify-center h-48">
        Õige
      </div>
    </div> 
  </div> 
</div>

<div class="flex mb-10">
  <div class="w-1/2">
    {% avoid %}
      Tuleb vältida olukorda, kus kõik sakid on ilma varjuta ehk passiivsed.
    {% endavoid %}
  </div>
  <div class="not-prose w-1/2">
    <nav class="flex justify-start">
      <a href="#" class="w-24 py-1 text-center">
        Sakk
      </a>
      <a href="#" class="w-24 py-1 text-center">
        Sakk
      </a>
    </nav>
    <div class="bg-white rounded-sm shadow-md h-48 -mb-1 p-4 relative z-10">
      <div class="w-24 h-2 -ml-4 -mt-5 bg-white"></div>
      <div class="flex flex-wrap content-center justify-center h-48">
        Vale
      </div>
    </div> 
  </div>  
</div>

## Suur vari

<p class="-mt-6 text-gray-500"></p>

<a href="{{ relative }}/classes/shadows">Vaata varjude klasse ja omadusi</a>