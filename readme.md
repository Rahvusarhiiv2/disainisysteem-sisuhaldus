# Rahvusarhiivi disainisüsteemi sisuhaldus

See on [Eleventy HTML-generaatori](https://www.11ty.dev/) projekt, mille abil saab luua ja hallata Rahvusarhiivi disainisüsteemi dokumentatsiooni.

- Lähtekood: [Rahvusarhiiv2/disainisysteem](https://github.com/Rahvusarhiiv2/disainisysteem)
- Avalik veeb: [rahvusarhiiv2.github.io/disainisysteem](https://rahvusarhiiv2.github.io/disainisysteem/)

## Töökorraldus

Dokumentatsiooni uuendamise töövoog on järgmine:

1. klooni repositoorium ja loo muudatuste jaoks uus haru,
2. tee muudatused ning ava `pull request`,
3. vaata muudatused üle ja ühenda need harusse `main`,
4. GitHub Actions käivitab automaatselt saidi ehituse,
5. GitHub Pages avaldab uue staatilise HTML-versiooni.

Avaldamine toimub otse sellest repositooriumist. Eraldi HTML-repositooriumisse `dist` kausta sisu enam käsitsi kopeerima ei pea.

## Avaldamine

GitHub Pagesi avaldamine käivitub igal `push`-il harusse `main`.

- töövoog: [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
- build käsk: `npm run build`
- avaldatav väljund: `dist`

## Generaatori kasutamine

### 1. Klooni repositoorium

```shell
git clone https://github.com/Rahvusarhiiv2/disainisysteem.git
```

### 2. Liigu projekti juurkausta

```shell
cd disainisysteem
```

### 3. Paigalda sõltuvused

```shell
npm install
```

Soovi korral võid kasutada ka käsku `npm ci`, kui soovid paigaldada täpselt `package-lock.json`-is lukustatud sõltuvused.

### 4. Käivita lokaalne server

```shell
npm run start
```

Pärast seda saad vaadata töös olevat dokumentatsiooni aadressil: http://localhost:8080 

### 5. Genereeri HTML

```shell
npm run build
```

See käsk genereerib lokaalselt staatilise veebilehe kausta `dist`. Kui sama lähtekood jõuab harusse `main`, teeb GitHub Actions selle ehituse automaatselt ja avaldab tulemuse GitHub Pagesis.
