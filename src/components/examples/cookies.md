---
layout: base
title: Küpsised
relative: ../../..

eleventyNavigation:
  parent: Examples
  key: Küpsised
  order: 1
---

# Küpsised

### Heleda taustaga

{% live %}
{% include "components/examples/cookies/light.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/examples/cookies/light.html" %}
```
{% endcode %}


### Tumeda taustaga

{% live %}
{% include "components/examples/cookies/dark.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/examples/cookies/dark.html" %}
```
{% endcode %}


### Nõusoleku salvestamisega {% badge %} kasutab JS {% endbadge %}


{% live %}
{% include "components/examples/cookies/live_with_restore.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/examples/cookies/live.html" %}
```
{% endcode %}
