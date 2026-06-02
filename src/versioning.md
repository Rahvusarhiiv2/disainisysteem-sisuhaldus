---
layout: base
title: Versioonid

eleventyNavigation:
  parent: Home
  key: Versioonid
  order: 2
---

# Versioonid

<p class="-mt-8 text-gray-300">Rahvusarhiivi disainisüsteemil tervikuna versiooninumbrit ei ole</p>

Rahvusarhiivi [stiilierisustel](../classes/getting-started/), mis on määratud failis `rahvusarhiiv.presets.js`, on kolmeosaline versiooninumber:

```js
/**
 * Rahvusarhiiv custom presets
 * @version 1.0.0
 */
```

See versiooninumber muutub [semantilise versioneerimise](https://semver.org/) reeglite järgi:

- vasakult esimene on **suurversiooni** number (*major*); 
- punkti järel järgneb sellele **väikeversiooni** (*minor*) number; 
- lõpus on **paiga** (*patch*) number.

Suur- ja väikeversiooni vahe on selles, et väikeversioon tohib stiilierisusi ainult laiendada (ei tohi muuta). Kõik olemasolevad klassid, komponendid ja küljendid peavad toimima täpselt samamoodi nagu eelmise väikeversiooniga. Teisisõnu, väikeversioon peab tagama tagasiühilduvuse (*backward compatibility*). Suurversioon seevastu muudab stiilierisusi nii, et ühilduvus eelmisega versiooniga pole tagatud. Paik on kasutusel pisiparanduste jaoks.

Kui komponendid ja küljendid kasutavad esimest suurversiooni, ei ole vaja seda koodis ära märkida, aga alates teisest suurversioonist on versiooninumbri lisamine kohustuslik. Näiteks:

```html
<!-- rahvusarhiiv.presets.js 2.0.0 -->
<div class="border-l-4 border-yellow-400 bg-yellow-50 p-4">
  ...
</div>
``` 
