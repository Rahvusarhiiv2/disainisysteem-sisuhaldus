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

## Keskmise varju kasutamine

### Ääristatud kastid

<div class="flex mb-10">
  <div class="w-1/2">
    {% avoid %}
      Hallil taustal ei tohi olla sisu.
    {% endavoid %}
    {% todo %}
      Valge kastil hallil taustal on alati keskmine vari (shadow-md).
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2 rounded-sm p-2 bg-gray-50 grid grid-cols-3 gap-2">
    <div class="rounded-sm shadow-md col-span-3 p-4 bg-white">Sisu</div>
    <div class="rounded-sm shadow-md h-64 p-4 bg-white">Sisu</div>
    <div class="rounded-sm shadow-md col-span-2 p-4 bg-white">Sisu</div>
  </div>    
</div>

<div class="flex">
  <div class="w-1/2">
    {% avoid %}
      Valgel kastil ei tohi olla teisi keskmise varjuga valgeid kaste nagu kõrvalolevas näites.
    {% endavoid %}
    {% todo %}
      Kui on vaja juurde lisada veel üks valge kast (näiteks tulemuste või modaalakende kuvamisel), siis sellel peab olema suur vari (shadow-lg).
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2 rounded-sm p-2 bg-gray-50 grid grid-cols-3 gap-2">
    <div class="rounded-sm shadow-md col-span-3 p-4 bg-white">Sisu</div>
    <div class="rounded-sm shadow-md h-64 p-4 bg-white">Sisu</div>
    <div class="rounded-sm shadow-md col-span-2 p-4 bg-white">
      Sisu
      <div class="rounded-sm shadow-md p-2 bg-white">
        Vale
      </div>
      </div>
  </div>  
</div>

{% avoid %}Varjude kasutamisel tuleks järgida konteinerite 
järjekorda, et ei juhtuks nii nagu on paremal pildil ☞
(Esimese bloki vari on alumise bloki peal){% endavoid %}

### Sakid


{% avoid %}Võimalusel vältida olukorda, kus taustal on vari, 
aga tabil endal ei ole.{% endavoid %}

{% todo %}Tabil ja taustal on sidus/ühendatud vari{% endtodo %}


<a href="{{ relative }}/classes/shadows">Vaata varjude klasse ja omadusi</a>