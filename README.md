# Soratlas

Un portale aperto sull'antroposofia di Rudolf Steiner: non solo Lucifero, Arimane e Sorat, ma la sua biografia e il suo metodo, la cosmologia dell'evoluzione umana, le applicazioni pratiche (pedagogia, agricoltura, medicina, arti), la vita sociale, e infine la ricezione critica accademica e i confronti con altre tradizioni.

Sito statico, nessun framework, nessuna build. HTML e CSS puri: apri `index.html` in un browser e funziona. 24 pagine di contenuto, ciascuna autosufficiente con le proprie fonti.

## Struttura

```
soratlas/
├── index.html                          portale: diagramma + indice di tutte le pagine
├── pages/
│   │  vita e metodo
│   ├── antroposofia.html
│   ├── metodo-goethiano.html
│   ├── teosofia-scissione.html
│   ├── cronologia.html
│   │  cosmologia
│   ├── costituzione.html
│   ├── epoche.html
│   ├── karma.html
│   ├── soglia.html
│   ├── cristo-golgota.html
│   │  le tre potenze
│   ├── triplicita.html
│   ├── sorat.html
│   ├── michele.html
│   ├── doppio.html
│   ├── fondazione-meditazione.html
│   │  le arti e la pratica
│   ├── pedagogia-waldorf.html
│   ├── agricoltura-biodinamica.html
│   ├── medicina-antroposofica.html
│   ├── arti-architettura.html
│   │  vita sociale
│   ├── triarticolazione.html
│   │  ricezione e confronti
│   ├── ricezione-critica.html
│   ├── confronti.html
│   ├── traiettorie-curiose.html
│   │  riferimenti e chiusura
│   ├── bibliografia.html
│   └── conclusione.html
├── assets/
│   └── style.css                       un unico foglio di stile condiviso
└── README.md
```

Ogni pagina è indipendente e autosufficiente: contiene il proprio testo, i propri link "vedi anche" verso le pagine correlate, e una propria sezione "Fonti" con la bibliografia specifica di quell'argomento. Non c'è build step da eseguire: aggiungere contenuto significa aggiungere o modificare file HTML.

## Sviluppo locale

Non serve installare nulla. Per un piccolo server locale (comodo per i link relativi):

```bash
npx serve .
```

oppure, con Python già installato:

```bash
python3 -m http.server 8000
```

## Pubblicare su GitHub

```bash
git init
git add .
git commit -m "Soratlas: prima versione del portale"
git branch -M main
git remote add origin https://github.com/<tuo-utente>/soratlas.git
git push -u origin main
```

## Deploy su Vercel

1. Vai su [vercel.com](https://vercel.com) e accedi con il tuo account GitHub.
2. "Add New… → Project", scegli il repository `soratlas`.
3. Framework Preset: **Other** (è un sito statico, non serve altro).
4. Root Directory: lascia `./`.
5. Build Command e Output Directory: lasciali vuoti — non c'è build.
6. Deploy.

Ogni push su `main` aggiorna automaticamente il sito pubblicato.

## Come estendere il portale

Per aggiungere un nuovo argomento:

1. Copia una pagina esistente in `pages/` come modello (per esempio `pages/karma.html`) e rinominala.
2. Aggiorna `<title>`, `<h1>`, il testo dell'articolo, i link "vedi anche" e la sezione "Fonti".
3. Aggiungi una voce corrispondente in `index.html`, dentro il gruppo tematico più adatto (o creane uno nuovo).
4. Se l'argomento è abbastanza centrale da meritare un nodo nel diagramma di apertura, aggiungi un `<a class="node-link">` all'SVG in `index.html`, seguendo lo schema degli altri nodi.
5. Mantieni la distinzione già presente nel portale fra dottrina originale di Steiner (nelle pagine sotto "Fondamenti" e "Le tre potenze") e riletture successive o confronti esterni (pagine sotto "Ricezione e confronti"): è la regola editoriale principale del progetto.

## Nota sui contenuti

Ogni pagina ricostruisce fonti dichiarate (conferenze, lettere, libri di Steiner, o letteratura secondaria) e le cita in fondo. Il portale non è una valutazione storiografica indipendente della fondatezza di questa dottrina, né un'affermazione sull'esistenza reale delle entità descritte; la pagina "Ricezione critica" raccoglie apertamente anche le obiezioni sollevate da storici indipendenti dal movimento antroposofico.

## Licenza

Codice e struttura del sito: MIT. I testi sono una sintesi originale a partire dalle fonti citate in ciascuna pagina; verificale prima di ripubblicarle altrove.
