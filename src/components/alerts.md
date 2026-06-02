---
layout: base
title: Hoiatused ja teated

eleventyNavigation:
  parent: Feedback
  key: Hoiatused ja teated
  order: 0
---

# Hoiatused ja teated

### Kirjeldusega

{% live %}
  {% include "components/feedback/alerts/with_description.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/feedback/alerts/with_description.html" %}
```
{% endcode %}

{% code 'Yii2' %}
```php
use Rahvusarhiiv\Widgets\AlertWithDescription;

echo AlertWithDescription::widget()
    ->icon('exclamation-triangle')
    ->title('Attention needed')
    ->body('Lorem ipsum dolor sit amet consectetur adipisicing elit.')
    ->render();
```
{% endcode %}

### Nimekirjaga

{% live %}
  {% include "components/feedback/alerts/with_list.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/feedback/alerts/with_list.html" %}
```
{% endcode %}

### Parempoolse lingiga

{% live %}
  {% include "components/feedback/alerts/with_link_on_right.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/feedback/alerts/with_link_on_right.html" %}
```
{% endcode %}

### Sulgemise ikooniga

{% live %}
  {% include "components/feedback/alerts/with_dismiss_button.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/feedback/alerts/with_dismiss_button.html" %}
```
{% endcode %}

### Tegevustega

{% live %}
  {% include "components/feedback/alerts/with_actions.html" %}
{% endlive %}

{% code 'HTML' %}
```html
{% include "components/feedback/alerts/with_actions.html" %}
```
{% endcode %}
