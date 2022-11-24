# Rahvusarhiiv disainisüsteemi sisuhaldus

See on [Eleventy HTML-generaatori](https://www.11ty.dev/) projekt, mille abil saab luua ja hallata [Rahvusarhiivi disainisüsteemi dokumentatsiooni](https://rahvusarhiiv2.github.io/disainisysteem/).  

## Töökorraldus

Rahvusarhiiv disainisüsteemi dokumentatsiooni haldavad **mitu toimetajat** ja **üks peatoimetaja**. 

**Toimetajad:** 

- kloonivad endale käesoleva repositooriumi,
- loovad muudatuste tegemiseks alati uue `branch`-i, 
- esitavad muudatused alati ainult `pull request` kaudu. 

**Peatoimetaja:** 

- vaatab alati `pull request`-i üle, 
- palub vajadusel koodi muuta või muudab seda ise,
- ühendab muudatuste haru põhiharuga,
- genereerib dokumentatsiooni HTML-versiooni,
- paneb uuendatud HTML-koodi [disainisüsteemi repositooriumisse](https://github.com/Rahvusarhiiv2/disainisysteem).


## Generaatori kasutamine

### 1. Klooni repositoorium

```shell
git clone https://github.com/Rahvusarhiiv2/disainisysteem-sisuhaldus.git
```

### 2. Liigu projekti juurkausta

```shell
cd disainisysteem-sisuhaldus
```

### 3. Paigalda sõltuvused

```shell
npm install
```

### 4. Käivita lokaalne server

```shell
npm run start
```

Pärast seda saad vaadata töös olevat dokumentatsiooni aadressil: http://localhost:8080 

### 5. Genereeri HTML

```shell
npm run build
```

Pärast seda saab peatoimetaja panna `dist` kausta sisu disainisüsteemi repositooriumisse.