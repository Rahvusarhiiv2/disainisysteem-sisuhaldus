---
layout: base
title: Nupud
relative: ../..

eleventyNavigation:
  parent: Inputs
  key: Nupud
  order: 0
---

# Nupud

### Primaarne nupp

{% live %}
{% include "components/inputs/buttons/primary.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/buttons/primary.html" %}
```
{% endcode %}

{% wip %}
Primaarnupule võib lisada teksti animatsiooni (vt Figma)
{% endwip %}

### Sekundaarne nupp

{% live %}
{% include "components/inputs/buttons/secondary.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/buttons/secondary.html" %}
```
{% endcode %}

### Tavaline/tertsiaarne nupp

{% live %}
{% include "components/inputs/buttons/default.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/buttons/default.html" %}
```
{% endcode %}

{% warning %}
Tumedal taustal kuvatud tertsiaarse nupu taustavärv erineb, olenevalt olekust.
{% endwarning %}

{% live 'dark' %}
{% include "components/inputs/buttons/on_dark.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/buttons/on_dark.html" %}
```
{% endcode %}

### Link pehme nupuna

{% live %}
{% include "components/inputs/buttons/as_link.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/buttons/as_link.html" %}
```
{% endcode %}

### Nupud ikoonidega

{% live %}
{% include "components/inputs/buttons/with_icon.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/buttons/with_icon.html" %}
```
{% endcode %}

{% wip %}
Ainult ikooniga nupul peaks alati juures olema lisainfo ehk tooltip, mida see nupp tähendab (vt Figma)
{% endwip %}