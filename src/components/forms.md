---
layout: base
title: Vormielemendid
relative: ../..

eleventyNavigation:
  parent: Inputs
  key: Vormielemendid
  order: 0
---

# Vormielemendid

{% wip %}
'Disabled' staatus lisab valdavalt kõigile elementide osadele: opacity-20 pointer-events-none
{% endwip %}

### Tekstiväljad

{% live %}
{% include "components/inputs/forms/text_input.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/forms/text_input.html" %}
```
{% endcode %}


#### Väikesed tekstiväljad

{% live %}
{% include "components/inputs/forms/text_input_small.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/forms/text_input_small.html" %}
```
{% endcode %}


### Valikuväljad

{% live %}
{% include "components/inputs/forms/checkbox.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/forms/checkbox.html" %}
```
{% endcode %}

#### Menüüvalikud

{% live %}
{% include "components/inputs/forms/dropdown.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/forms/dropdown.html" %}
```
{% endcode %}

{% live %}
{% include "components/inputs/forms/dropdown_js.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/forms/dropdown_js.html" %}
```
{% endcode %}

