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

## Väike vari

<p class="-mt-6 text-gray-500">Väikest varju (shadow-sm) tuleb kasutada järgmistel elementidel</p>

### Tegevused

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Kui väike element sisaldab mõnda tegevust, siis peab kursoriga selle kohale liikudes väike vari muutuma suureks varjuks.
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2">      
    <div class="flex flex-wrap content-center justify-center w-32 h-32 rounded-sm shadow-sm hover:shadow-lg">
    </div>
  </div>    
</div>

### Rippmenüü

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Rippmenüü avatud ala peab olema väikese varjuga.
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2">
    <input  type="text" class="block rounded-sm ring-1 ring-gray-300 w-80 px-2 py-1" />   
    <ul class="mt-1 rounded-sm shadow-sm border border-gray-200 bg-white py-1 w-80">  
      <li class="relative cursor-default select-none hover:bg-gray-100 p-2"> 
        A
      </li>
      <li class="relative cursor-default select-none hover:bg-gray-100 p-2"> 
        B
      </li> 
      <li class="relative cursor-default select-none hover:bg-gray-100 p-2"> 
        C
      </li>    
      <li class="relative cursor-default select-none hover:bg-gray-100 p-2"> 
        D
      </li>
    </ul>
  </div>    
</div>

### Kalender

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Kalendri avatud ala peab olema väikese varjuga.
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2">
    <input type="text" class="block rounded-sm ring-1 ring-gray-300 w-32 px-2 py-1" />   
    <div class="mt-1 rounded-sm shadow-sm border border-gray-200 bg-white w-80">
      <div class="flex items-center text-gray-900 p-2">
        <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
          <span class="sr-only">Previous month</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="flex-auto text-center">Jaanuar</div>
        <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
          <span class="sr-only">Next month</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="mt-3 grid grid-cols-7 text-xs leading-6 text-gray-500">
        <div class="mx-auto">E</div>
        <div class="mx-auto">T</div>
        <div class="mx-auto">K</div>
        <div class="mx-auto">N</div>
        <div class="mx-auto">R</div>
        <div class="mx-auto">L</div>
        <div class="mx-auto">P</div>
      </div>  
      <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm border-t border-gray-200">
        <button type="button" class="rounded-tl-lg bg-gray-50 py-1.5">
          <time datetime="2021-12-27" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-gray-50 py-1.5">
          <time datetime="2021-12-28" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-gray-50 py-1.5">
          <time datetime="2021-12-29" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-gray-50 py-1.5">
          <time datetime="2021-12-30" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-gray-50 py-1.5">
          <time datetime="2021-12-31" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-01" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="rounded-tr-lg bg-white py-1.5">
          <time datetime="2022-01-01" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-02" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-04" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-05" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-06" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-07" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-08" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-09" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-10" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-11" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-12" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-13" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-14" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-15" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-16" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-17" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-18" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-19" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-20" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-21" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-22" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-23" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-24" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-25" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-26" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-27" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-28" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-29" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-30" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-white py-1.5">
          <time datetime="2022-01-31" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-gray-50 py-1.5">
          <time datetime="2022-02-01" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-gray-50 py-1.5">
          <time datetime="2022-02-02" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-gray-50 py-1.5">
          <time datetime="2022-02-03" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-gray-50 py-1.5">
          <time datetime="2022-02-04" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="bg-gray-50 py-1.5">
          <time datetime="2022-02-05" class="mx-auto flex h-7 w-7"></time>
        </button>
        <button type="button" class="rounded-br-sm bg-gray-50 py-1.5">
          <time datetime="2022-02-06" class="mx-auto flex h-7 w-7"></time>
        </button>
      </div>
    </div>
  </div>    
</div>

### Otsingusakid

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Otsingusakid erinevad tavalistest sakkidest. Neil on väike vari, mis muutub kursori all suureks varjuks.
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2 group">
    <nav class="flex justify-start">
      <div class="flex-none w-36 rounded-t-sm shadow-sm py-1 realtive z-0 group-hover:shadow-lg">
        &nbsp;
      </div>
      <a href="#" class="flex-none w-36 text-center py-1">
        Täpsem otsing
      </a>
    </nav>
    <div class="bg-white rounded-b-sm rounded-tr-sm shadow-sm h-48 -mb-1 p-4 relative z-10 group-hover:shadow-lg">
      <a href="#" class="block w-36 -ml-4 -mt-14 rounded-t-sm bg-white text-center py-1">
        Üldotsing
      </a>
    </div>
  </div> 
</div>

## Keskmise vari

<p class="-mt-6 text-gray-500">Keskmist varju (shadow-md) tuleb kasutada sisukastidel ja sakkidel</p>

### Sisukastid

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Valgel kastil on alati keskmine vari.
    {% endtodo %}
    {% avoid %}
      Hallil taustal ei tohi olla sisu.
    {% endavoid %}
  </div>
  <div class="not-prose w-1/2 rounded-sm p-2 bg-gray-50 grid grid-cols-3 gap-2">
    <div class="rounded-sm shadow-md col-span-3 p-4 bg-white">&nbsp;</div>
    <div class="rounded-sm shadow-md h-64 p-4 bg-white"></div>
    <div class="rounded-sm shadow-md h-64 col-span-2 p-4 bg-white"></div>
  </div>    
</div>

<div class="flex mb-10">
  <div class="w-1/2">
    {% avoid %}
      Valgel kastil ei tohi olla teisi keskmise varjuga valgeid kaste nagu kõrvalolevas näites.
    {% endavoid %}
    {% todo %}
      Kui on vaja juurde lisada veel üks valge kast (näiteks tulemuste või modaalakende kuvamisel), siis sellel peab olema suur vari.
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2 rounded-sm p-2 bg-gray-50 grid grid-cols-3 gap-2">
    <div class="rounded-sm shadow-md col-span-3 p-4 bg-white">&nbsp;</div>
    <div class="rounded-sm shadow-md h-64 p-4 bg-white"></div>
    <div class="rounded-sm shadow-md h-64 col-span-2 p-4 bg-white">
      <div class="rounded-sm shadow-md p-2 bg-white">
        Vale
      </div>
    </div>
  </div>  
</div>

<div class="flex mb-10">
  <div class="w-1/2">
    {% avoid %}
      Ühe valge kasti vari ei tohi langeda teise kasti peale nagu kõrvalolevas näites.
    {% endavoid %}
  </div>
  <div class="not-prose w-1/2 rounded-sm p-2 bg-gray-50 grid grid-cols-3 gap-2">
    <div class="rounded-sm shadow-md col-span-3 p-4 bg-white z-10">Vale</div>
    <div class="rounded-sm shadow-md h-64 p-4 bg-white z-0"></div>
    <div class="rounded-sm shadow-md h-64 col-span-2 p-4 bg-white z-0"></div>
  </div> 
</div>

### Sakid

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Aktiivsel sakil ja sisukastil peab olema sidus keskmine vari.
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2">
    <nav class="flex justify-start">
      <div class="flex-none w-24 rounded-t-sm shadow-md py-1 realtive z-0">
        &nbsp;
      </div>
      <a href="#" class="flex-none w-24 text-center py-1">
        Sakk
      </a>
    </nav>
    <div class="bg-white rounded-b-sm rounded-tr-sm shadow-md h-48 -mb-1 p-4 relative z-10">
      <a href="#" class="block w-24 -ml-4 -mt-14 rounded-t-sm bg-white text-center py-1">
        Sakk
      </a>
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
        Vale
      </a>
      <a href="#" class="w-24 py-1 text-center">
        Vale
      </a>
    </nav>
    <div class="bg-white rounded-sm shadow-md h-48 -mb-1 p-4 relative z-10">
      <div class="flex flex-wrap content-center justify-center h-48">
      </div>
    </div> 
  </div>  
</div>

## Suur vari

<p class="-mt-6 text-gray-500">Suurt varju (shadow-lg) tuleb kasutada otsingutulemuste, modaalakende ning kohtspikrite ja teavituste juures</p>

### Tulemuste kuva

{% todo %}
  Tulemuste kuva on erandlik valge sisukast, mis võib olla valgel taustal suure varjuga.
{% endtodo %}

<div class="not-prose rounded-sm shadow-lg p-4 bg-white">
  <nav class="border-b border-gray-200 px-4">
    <div class="text-center">
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">1</a>
      <a href="#" class="inline-flex items-center border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600">2</a>
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">3</a>
      <span class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500">...</span>
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">8</a>
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">9</a>
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">10</a>
    </div>
  </nav>  
  <table class="min-w-full my-1">
    <tr>
      <td class="rounded-sm p-1">&nbsp;</td>
    </tr>
    <tr>
      <td class="rounded-sm p-1 bg-gray-50">&nbsp;</td>
    </tr>
    <tr>
      <td class="rounded-sm p-1">&nbsp;</td>
    </tr>
    <tr>
      <td class="rounded-sm p-1 bg-gray-50">&nbsp;</td>
    </tr>
    <tr>
      <td class="rounded-sm p-1">&nbsp;</td>
    </tr>
    <tr>
      <td class="rounded-sm p-1 bg-gray-50">&nbsp;</td>
    </tr>                                   
  </table>
  <nav class="border-t border-gray-200 px-4">
    <div class="text-center">
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">1</a>
      <a href="#" class="inline-flex items-center border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600">2</a>
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">3</a>
      <span class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500">...</span>
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">8</a>
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">9</a>
      <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700">10</a>
    </div>
  </nav>    
</div> 

### Modaalaken

<div class="not-prose flex flex-wrap content-center justify-center bg-gray-50 bg-opacity-75 rounded-sm">
  <div class="relative transform overflow-hidden rounded-sm shadow-lg bg-white px-4 pt-5 pb-5 text-left sm:my-24 sm:w-full sm:max-w-sm sm:p-6">
    <div class="mx-auto flex h-12 w-12 items-center justify-center text-green-400 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="mt-3 text-center sm:mt-5">
      <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Modaalaken</h3>
      <div class="mt-2">
        <p class="text-sm text-gray-500">Modaalaknal peab olema suur vari sõltumata sellest, millised on akna mõõdud.</p>
      </div>
    </div>
  </div>
</div>

### Tumedad kohtspikrid ja teavitused

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Tumedal kohtspikril või teavitusel, mis avaneb valgel taustal, peab olema suur vari.
    {% endtodo %}
  </div>
  <div class="not-prose w-1/2">      
    <div class="w-64 h-32 rounded-sm shadow-lg bg-gray-900">
      &nbsp;
    </div>
  </div>    
</div>

<div class="flex mb-10">
  <div class="w-1/2">
    {% todo %}
      Kui hele teavitus avaneb tumedal taustal, peab sellel olema suur vari.
    {% endtodo %}
    {% avoid %}
      Heledal teavitusel heledal taustal varju ei ole.
    {% endavoid %}
  </div>
  <div class="not-prose w-1/2 flex flex-wrap content-center justify-center bg-gray-500 rounded-sm">
    <div class="w-64 h-32 rounded-sm shadow-lg bg-green-50">
      &nbsp;
    </div>
  </div>    
</div>

<a href="{{ relative }}/classes/shadows">Vaata varjude klasse ja omadusi</a>