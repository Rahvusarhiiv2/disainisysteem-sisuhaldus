---
layout: base
title: Tühiolekud
relative: ../..

eleventyNavigation:
  parent: Feedback
  key: Tühiolekud
  order: 1
---



# Tühiolekud

### Lihtne

{% live %}
  {% include "components/feedback/empty-states/simple.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/feedback/empty-states/simple.html" %}
```
{% endcode %}

### Valikutega

{% live %}
  {% include "components/feedback/empty-states/with_templates.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/feedback/empty-states/with_templates.html" %}
```
{% endcode %}