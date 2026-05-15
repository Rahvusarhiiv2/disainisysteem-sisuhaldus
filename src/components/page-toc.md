---
layout: base
title: Lehe sisukord
relative: ../..

eleventyNavigation:
  parent: Navigation
  key: Lehe sisukord
  order: 4
---

{% macro paragraphSection(id, title) %}
<section id="{{ id }}" class="scroll-mt-6">
  <h2 class="font-heading mb-4 text-lg font-bold text-gray-900">{{ title }}</h2>
  <p class="mb-4 text-base leading-7 text-gray-900">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate, justo at aliquet luctus, nunc felis faucibus lectus, vitae tristique est leo a odio. Integer sagittis erat eget dui convallis, at dapibus lacus elementum.
  </p>
  <p class="mb-4 text-base leading-7 text-gray-900">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Quisque blandit lectus et ligula posuere, at imperdiet orci ullamcorper.
  </p>
  <p class="text-base leading-7 text-gray-900">
    Curabitur gravida, orci nec viverra dictum, sapien augue fringilla turpis, sed porta lorem lectus ac nibh. Vivamus placerat, lorem ac hendrerit placerat, arcu mi posuere risus, sed posuere massa nibh non sem.
  </p>
</section>
{% endmacro %}

{% macro desktopContent(prefix) %}
{{ paragraphSection(prefix + "intro", "Siit leiate näpunäiteid, kuidas ise arhiivis oma sugupuud uurida") }}
{{ paragraphSection(prefix + "start", "Millest alustada?") }}
{{ paragraphSection(prefix + "archives", "Millises arhiivis leidub andmeid suguvõsa kohta?") }}
{{ paragraphSection(prefix + "service", "Kas saab tasu eest tellida oma sugupuu?") }}
{{ paragraphSection(prefix + "family-names", "Perekonnanimede panek") }}
{{ paragraphSection(prefix + "name-estonianisation", "Nimede eestistamine") }}
{{ paragraphSection(prefix + "emigration", "Venemaale väljarändamine") }}
{{ paragraphSection(prefix + "old-believers", "Vanausulised") }}
{% endmacro %}

{% macro responsiveContent(prefix) %}
{{ paragraphSection(prefix + "intro", "Siit leiate näpunäiteid, kuidas ise arhiivis oma sugupuud uurida") }}
{{ paragraphSection(prefix + "start", "Millest alustada?") }}
{{ paragraphSection(prefix + "archives", "Millises arhiivis leidub andmeid suguvõsa kohta?") }}
{{ paragraphSection(prefix + "service", "Kas saab tasu eest tellida oma sugupuu?") }}
{{ paragraphSection(prefix + "family-names", "Perekonnanimepanek") }}
{{ paragraphSection(prefix + "name-estonianisation", "Nimede eestistamine") }}
{{ paragraphSection(prefix + "emigration", "Venemaale väljarändamine") }}
{{ paragraphSection(prefix + "republic-sources", "Eesti Vabariigi aja allikad") }}
{{ paragraphSection(prefix + "catholic", "Katoliku kogudused") }}
{{ paragraphSection(prefix + "setu", "Setud") }}
{{ paragraphSection(prefix + "old-believers", "Vanausulised") }}
{{ paragraphSection(prefix + "jews", "Juudid") }}
{{ paragraphSection(prefix + "baltic-germans", "Baltisakslased") }}
{{ paragraphSection(prefix + "useful-links", "Kasulikud viited") }}
{% endmacro %}

# Lehe sisukord

### Parempoolne sisumenüü

{% live %}
<div class="scroll-smooth">
  <div class="mx-auto flex max-w-6xl gap-12 lg:gap-16">
    <article class="min-w-0 max-w-3xl flex-1 space-y-12">
      <h1 class="font-heading mb-10 mt-px w-full border-b-2 border-gray-500 pb-2 text-xl font-bold text-gray-700">Suguvõsauurimine</h1>
      {{ desktopContent("desktop-") }}
    </article>
    {% set tocPrefix = "desktop-" %}
    {% include "components/navigation/page-toc/right_sidebar.html" %}
  </div>
</div>
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/navigation/page-toc/right_sidebar.html" %}
```
{% endcode %}

### Kohanduv sisumenüü {% badge %} kasutab JS {% endbadge %}

{% live %}
<div class="mx-auto max-w-3xl scroll-smooth space-y-8">
  {% set tocPrefix = "responsive-" %}
  {% include "components/navigation/page-toc/responsive.html" %}
  <article class="space-y-12">
    <h1 class="font-heading mb-10 mt-px w-full border-b-2 border-gray-500 pb-2 text-xl font-bold text-gray-700">Suguvõsauurimine</h1>
    {{ responsiveContent("responsive-") }}
  </article>
</div>
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/navigation/page-toc/responsive.html" %}
```
{% endcode %}
