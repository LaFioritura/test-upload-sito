# Soratlas

Un portale sull'antroposofia di Rudolf Steiner, costruito con **Vite + React + React Router**.

Ventiquattro pagine — dalla biografia di Steiner alla dottrina di Sorat, dall'agricoltura biodinamica alla ricezione critica accademica — ciascuna con le proprie fonti. Un nuovo diagramma d'apertura, in forma di bilancia, sostituisce il vecchio albero a nodi.

## Sviluppo locale

```bash
npm install
npm run dev
```

Apre un server locale (di norma su `http://localhost:5173`) con hot reload.

## Build di produzione

```bash
npm run build
```

Genera la cartella `dist/`, pronta per qualunque hosting statico. Per un'anteprima locale della build:

```bash
npm run preview
```

## Struttura

```
soratlas-react/
├── index.html                 root Vite, carica src/main.jsx
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                entry point React
│   ├── App.jsx                 tutte le rotte
│   ├── index.css               foglio di stile unico
│   ├── components/
│   │   ├── Layout.jsx           intestazione, piè di pagina, wrapper di pagina
│   │   ├── Diagram.jsx          il diagramma della bilancia, cliccabile
│   │   ├── SeeAlso.jsx          i link "vedi anche" in fondo a ogni pagina
│   │   └── Sources.jsx          la sezione fonti in fondo a ogni pagina
│   └── pages/                   una componente per pagina (24 file)
└── README.md
```

Ogni pagina è una componente React autonoma: importa `Layout`, `SeeAlso`, `Sources`, e contiene il proprio testo in JSX. Non c'è un livello di dati centralizzato — è una scelta deliberata, per tenere ogni pagina leggibile e modificabile da sola, senza dover capire uno schema condiviso.

## Pubblicare su GitHub

```bash
git init
git add .
git commit -m "Soratlas: versione React"
git branch -M main
git remote add origin https://github.com/<tuo-utente>/soratlas.git
git push -u origin main
```

## Deploy su Vercel

1. Su [vercel.com](https://vercel.com), accedi con GitHub.
2. "Add New… → Project", scegli il repository.
3. Vercel riconosce automaticamente **Vite**: framework preset, build command (`npm run build`) e output directory (`dist`) si compilano da soli. Non serve toccare nulla.
4. Deploy.

Ogni push su `main` aggiorna il sito pubblicato.

## Come aggiungere una pagina

1. Crea `src/pages/NomePagina.jsx` prendendo come modello una pagina esistente (per esempio `src/pages/Karma.jsx`).
2. Aggiungi la rotta in `src/App.jsx`: import del componente e una riga `<Route path="/nome-pagina" element={<NomePagina />} />`.
3. Aggiungi una voce nell'array `GROUPS` di `src/pages/Home.jsx`, nel gruppo tematico più adatto.
4. Se l'argomento è abbastanza centrale da meritare un nodo nella bilancia d'apertura, aggiungilo in `src/components/Diagram.jsx`.
5. Mantieni la distinzione già presente nel portale fra dottrina originale di Steiner (gruppi "Cosmologia", "Le tre potenze", "Le arti e la pratica") e riletture successive o confronti esterni (gruppo "Ricezione e confronti"): è la regola editoriale principale del progetto.

## Nota sui contenuti

Ogni pagina ricostruisce fonti dichiarate — conferenze, lettere, libri di Steiner, o letteratura secondaria — e le cita in fondo. Il portale non è una valutazione storiografica indipendente della fondatezza di questa dottrina, né un'affermazione sull'esistenza reale delle entità descritte; la pagina "Ricezione critica" riporta apertamente anche le obiezioni sollevate da storici indipendenti dal movimento antroposofico.

## Licenza

Codice e struttura: MIT. I testi sono una sintesi originale a partire dalle fonti citate in ciascuna pagina; verificale prima di ripubblicarle altrove.
