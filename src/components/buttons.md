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

_Tumedal taustal kuvatud tertsiaarse nupu taustavärv erineb, olenevalt olekust._

{% live 'dark' %}
{% include "components/inputs/buttons/on_dark.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/buttons/on_dark.html" %}
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

_Figma: Ainult ikooniga nupul peaks alati juures olema lisainfo ehk tooltip, mida see nupp tähendab. (TODO)_

### Pehme lingiga nupp

{% live %}
{% include "components/inputs/buttons/as_link.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/inputs/buttons/as_link.html" %}
```
{% endcode %}