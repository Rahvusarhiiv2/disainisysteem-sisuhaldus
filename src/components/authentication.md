---
layout: base
title: Sisselogimine ja konto menüü
relative: ../..

eleventyNavigation:
  parent: Navigation
  key: Sisselogimine ja konto menüü
  order: 5
---

# Sisselogimine ja konto menüü

### Sisselogimise nupp

<div class="not-prose font-body rounded border-2 border-gray-50 p-10">
  {% include "components/navigation/auth/login_button.html" %}
</div>

{% code 'HTML' %}
```html
{% include "components/navigation/auth/login_button.html" %}
```
{% endcode %}

### Konto menüü

<div class="not-prose font-body rounded border-2 border-gray-50 p-10">
  {% include "components/navigation/auth/account_menu.html" %}
</div>

{% code 'HTML' %}
```html
{% include "components/navigation/auth/account_menu.html" %}
```
{% endcode %}

### Interaktiivne eelvaade

<div class="not-prose font-body rounded border-2 border-gray-50 p-10">
  {% include "components/navigation/auth/interactive.html" %}
</div>

{% code 'HTML' %}
```html
{% include "components/navigation/auth/interactive.html" %}
```
{% endcode %}
