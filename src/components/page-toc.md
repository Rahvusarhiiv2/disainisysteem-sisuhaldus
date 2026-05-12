---
layout: base
title: Lehe sisukord
relative: ../..

eleventyNavigation:
  parent: Navigation
  key: Lehe sisukord
  order: 4
---

# Lehe sisukord

### Parempoolne sisumenüü

{% live %}
<div class="flex justify-end">
  {% include "components/navigation/page-toc/right_sidebar.html" %}
</div>
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/navigation/page-toc/right_sidebar.html" %}
```
{% endcode %}

### Kohanduv sisumenüü {% badge %} kasutab JS {% endbadge %}

{% live %}
{% include "components/navigation/page-toc/responsive.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/navigation/page-toc/responsive.html" %}
```
{% endcode %}
