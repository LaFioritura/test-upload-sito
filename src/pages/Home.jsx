import Layout from '../components/Layout.jsx'
import Diagram from '../components/Diagram.jsx'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const GROUPS = [
  {
    title: { en: 'Orientation', it: 'Orientamento' },
    items: [
      ['/method', { en: 'How This Notebook Works', it: 'Come funziona questo quaderno' }, { en: 'The method, the sourcing rules, and the one name this whole thing turns around.', it: 'Il metodo, le regole sulle fonti, e l\'unico nome attorno a cui gira tutto quanto.' }],
      ['/anthroposophy', { en: 'A Life and a Method', it: 'Una vita e un metodo' }, { en: 'A scientific editor who spent a decade with Goethe before he spent the rest of his life with the invisible.', it: 'Un curatore scientifico che passò un decennio con Goethe prima di passare il resto della vita con l\'invisibile.' }],
      ['/goethean-method', { en: 'The Goethean Root', it: 'La radice goethiana' }, { en: 'Where the whole method of observation actually comes from.', it: 'Da dove viene davvero tutto il metodo di osservazione.' }],
      ['/theosophy-split', { en: 'Theosophy, and the Split', it: 'La teosofia, e la rottura' }, { en: 'Why a messianic child actor made one man walk out and start his own society.', it: 'Perché un ragazzino presentato come messia fece uscire un uomo dalla porta a fondare una società tutta sua.' }],
      ['/timeline', { en: 'Timeline', it: 'Cronologia' }, { en: 'Every date in this notebook, biographical and doctrinal, on one line.', it: 'Ogni data di questo quaderno, biografica e dottrinale, su un\'unica riga.' }],
    ],
  },
  {
    title: { en: 'Cosmology', it: 'Cosmologia' },
    items: [
      ['/constitution', { en: 'The Fourfold Human Being', it: 'L\'uomo quadripartito' }, { en: 'Physical, etheric, astral, I — and where exactly the two hindering powers move in.', it: 'Fisico, eterico, astrale, Io — e dove esattamente si insediano le due potenze ostacolanti.' }],
      ['/epochs', { en: 'The Epochs of Consciousness', it: 'Le epoche della coscienza' }, { en: 'Why this particular century is, on this account, the most exposed one yet.', it: 'Perché proprio questo secolo sarebbe, in questo schema, il più esposto di tutti.' }],
      ['/karma', { en: 'Karma and Reincarnation', it: 'Karma e reincarnazione' }, { en: 'Why a six-hundred-year rhythm needs more than one lifetime to make any sense.', it: 'Perché un ritmo di seicento anni ha bisogno di più di una vita per avere senso.' }],
      ['/threshold', { en: 'The Guardian of the Threshold', it: 'Il Guardiano della Soglia' }, { en: 'Meeting the sum total of your own unresolved weight.', it: 'Incontrare la somma di tutto ciò che non hai ancora risolto.' }],
      ['/christ-golgotha', { en: 'Christ and the Mystery of Golgotha', it: 'Il Cristo e il Mistero del Golgota' }, { en: 'The center everything else in this notebook quietly refers back to.', it: 'Il centro a cui tutto il resto di questo quaderno silenziosamente rimanda.' }],
    ],
  },
  {
    title: { en: 'The Three Powers', it: 'Le tre potenze' },
    items: [
      ['/triplicity', { en: 'The Mystery of Triplicity', it: 'Il mistero della triplicità' }, { en: 'A scale, a sculpture, and two dates of incarnation.', it: 'Una bilancia, una scultura, e due date d\'incarnazione.' }],
      ['/sorat', { en: 'Sorat', it: 'Sorat' }, { en: "The sun's demon, decoded from Hebrew letters, on a 666-year clock.", it: 'Il demone del sole, decifrato dalle lettere ebraiche, su un orologio di 666 anni.' }],
      ['/michael', { en: 'Michael and the Falling Intelligence', it: 'Michele e l\'intelligenza che cade' }, { en: 'An intelligence that used to belong to the heavens, now loose inside human minds.', it: 'Un\'intelligenza che apparteneva ai cieli, ora libera dentro le menti umane.' }],
      ['/double', { en: 'The Double, and the Machines', it: 'Il doppio, e le macchine' }, { en: 'A being said to live in your nervous system — and its unauthorized sequel about computers.', it: 'Un essere che vivrebbe nel tuo sistema nervoso — e il suo sequel non autorizzato sui computer.' }],
      ['/foundation-stone', { en: 'The Foundation Stone', it: 'La Pietra di Fondazione' }, { en: 'A meditation recited into eight hundred people, one year after a building burned to the ground.', it: 'Una meditazione recitata a ottocento persone, un anno dopo che un edificio era andato completamente in cenere.' }],
    ],
  },
  {
    title: { en: 'Reading the Present', it: 'Leggere il presente' },
    items: [
      ['/present-tense', { en: 'Sorat as a Lens', it: 'Sorat come lente' }, { en: 'The thesis, and a table mapping five old archetypes onto five familiar screens.', it: 'La tesi, e una tabella che mappa cinque vecchi archetipi su cinque schermi familiari.' }],
      ['/hypothesis', { en: 'Does Automation Reduce Autonomy?', it: 'L\'automazione riduce l\'autonomia?' }, { en: 'A hypothesis, the case for it, the case against it, and the actual data.', it: 'Un\'ipotesi, gli argomenti a favore, quelli contrari, e i dati veri.' }],
      ['/case-studies', { en: 'Three Case Studies', it: 'Tre casi di studio' }, { en: 'Netflix, TikTok, and ChatGPT, read through the framework instead of around it.', it: 'Netflix, TikTok e ChatGPT, letti attraverso il modello invece che intorno.' }],
      ['/predictions', { en: 'What Would Have to Happen', it: 'Cosa dovrebbe succedere' }, { en: 'Ten-year predictions specific enough to be wrong.', it: 'Previsioni a dieci anni abbastanza precise da poter essere sbagliate.' }],
    ],
  },
  {
    title: { en: 'Applied', it: 'Applicazioni' },
    items: [
      ['/waldorf', { en: 'Waldorf Education', it: 'La pedagogia Waldorf' }, { en: 'From a cigarette factory in Stuttgart to schools on six continents.', it: 'Da una fabbrica di sigarette a Stoccarda a scuole su sei continenti.' }],
      ['/biodynamics', { en: 'Biodynamic Agriculture', it: 'Agricoltura biodinamica' }, { en: 'Cow horns, compost, and — improbably — natural wine.', it: 'Corna di vacca, compost e — incredibilmente — vino naturale.' }],
      ['/medicine', { en: 'Anthroposophic Medicine', it: 'Medicina antroposofica' }, { en: 'An extension of medicine, not an alternative to it — at least by its own account.', it: 'Un ampliamento della medicina, non un\'alternativa — almeno secondo chi la pratica.' }],
      ['/arts-architecture', { en: 'Eurythmy and Architecture', it: 'Euritmia e architettura' }, { en: 'Visible speech, and two very different buildings named after Goethe.', it: 'Il linguaggio reso visibile, e due edifici molto diversi intitolati a Goethe.' }],
    ],
  },
  {
    title: { en: 'Social Life', it: 'Vita sociale' },
    items: [
      ['/threefolding', { en: 'The Threefold Social Order', it: 'La triarticolazione sociale' }, { en: 'Liberty, equality, fraternity — assigned to three separate rooms of society.', it: 'Libertà, uguaglianza, fratellanza — assegnate a tre stanze separate della società.' }],
    ],
  },
  {
    title: { en: 'Reception & Comparisons', it: 'Ricezione e confronti' },
    items: [
      ['/reception', { en: 'Critical Reception', it: 'Ricezione critica' }, { en: 'What independent historians actually say, and how the response goes.', it: 'Cosa dicono davvero gli storici indipendenti, e come va la replica.' }],
      ['/comparisons', { en: 'Comparisons and Later Theories', it: 'Confronti e teorie successive' }, { en: 'Archons, cosmic horror, tech critique — flagged as outside sources, not extensions.', it: 'Arconti, horror cosmico, critica alla tecnologia — segnalati come fonti esterne, non estensioni.' }],
      ['/trajectories', { en: 'Curious Trajectories', it: 'Traiettorie curiose' }, { en: 'Kandinsky, Hilma af Klint, an Italian typewriter company, and a bottle of biodynamic wine.', it: 'Kandinsky, Hilma af Klint, una fabbrica italiana di macchine da scrivere, e una bottiglia di vino biodinamico.' }],
    ],
  },
  {
    title: { en: 'Reference', it: 'Riferimenti' },
    items: [
      ['/bibliography', { en: 'Full Bibliography', it: 'Bibliografia completa' }, { en: 'Every source in the notebook, indexed once.', it: 'Ogni fonte del quaderno, indicizzata una volta sola.' }],
      ['/conclusion', { en: 'Closing: Freedom as a Task', it: 'Chiusura: la libertà come compito' }, { en: 'Where all of this quietly comes back to one single idea.', it: 'Dove tutto questo torna, silenziosamente, a un\'unica idea.' }],
    ],
  },
]

export default function Home() {
  const [lang] = useLanguage()

  return (
    <Layout>
      <div className="home-hero">
        <span className="tag red">{lang === 'it' ? 'un quaderno di appunti, tenuto sul serio' : 'a notebook of notes, kept seriously'}</span>
        <h1 className="huge">
          {lang === 'it'
            ? <>Una mappa di corrispondenze,<br/>tenuta un po' troppo bene.</>
            : <>A map of correspondences,<br/>kept a little too carefully.</>}
        </h1>

        {lang === 'it' ? (
          <>
            <p className="home-lede">
              Questo è un quaderno di lavoro, non un libro finito. Segue un unico schema ricorrente
              attraverso un secolo di pensiero occulto e cosmologico: l'abitudine di assegnare numeri
              alle lettere, demoni ai pianeti, gradi ai secoli, nemici alle virtù — e poi sostenere,
              contro ogni evidenza, che l'impalcatura che ne risulta non sia decorazione ma struttura.
            </p>
            <p className="home-lede">
              La maggior parte delle voci qui torna, prima o poi, a un unico sistema del Novecento
              particolarmente rigoroso — costruito da un curatore scientifico austriaco che passò un
              decennio ad annotare Goethe prima di passare il resto della vita a mappare l'invisibile.
              Se vuoi la versione breve di chi fosse, e perché questo quaderno si fida di lui più che
              della maggior parte dei suoi contemporanei, parti dalla pagina sul metodo. Se preferisci
              entrare dai singoli termini, il campo qui sotto non ha un punto segnato "inizia da qui" —
              è voluto.
            </p>
            <p className="home-lede">
              Non è un progetto collettivo, non ha un comitato editoriale, e non ha bisogno di scusarsi
              per questo: è un quaderno tenuto con cura ossessiva da chi lo scrive, pubblicato così com'è
              perché regge da solo, voce per voce, fonte per fonte. Quello che vedi oggi è la prima
              versione seria. Non sarà l'ultima.
            </p>
          </>
        ) : (
          <>
            <p className="home-lede">
              This is a working notebook, not a finished book. It tracks one recurring pattern across a
              hundred years of occult and cosmological thinking: the habit of assigning numbers to letters,
              demons to planets, ranks to centuries, and enemies to virtues — and then insisting, against
              all odds, that the resulting scaffolding is not decoration but structure.
            </p>
            <p className="home-lede">
              Most of the entries here circle back, sooner or later, to one especially thorough twentieth-century
              system — built by an Austrian scientific editor who spent a decade annotating Goethe before he
              spent the rest of his life mapping the invisible. If you want the short version of who that was
              and why this notebook trusts him more than it trusts most of his peers, start with the method page.
              If you'd rather wander in through the terms themselves, the field below has no entry point marked
              "start here" — that's deliberate.
            </p>
            <p className="home-lede">
              This isn't a committee project and it doesn't have an editorial board, and it doesn't need to
              apologize for that: it's a notebook kept with obsessive care by whoever writes it, published
              as it stands because it holds up on its own, entry by entry, source by source. What you're
              reading is the first serious pass. It won't be the last.
            </p>
          </>
        )}
      </div>

      <div className="thesis-block">
        <span className="tag yellow">{lang === 'it' ? 'la tesi, in una riga' : 'the thesis, in one line'}</span>
        <p className="thesis-line">
          {lang === 'it'
            ? 'Il rischio non è mai stata una macchina capace di pensare. È stata una specie che ha smesso di averne bisogno.'
            : 'The risk was never a machine that could think. It was a species that stopped needing to.'}
        </p>
        <p className="thesis-sub">
          {lang === 'it' ? (
            <>È la scommessa che questo quaderno continua a mettere alla prova nel presente — vedi <Link to="/present-tense">Sorat come lente</Link>.</>
          ) : (
            <>That's the bet this notebook keeps testing against the present — see <Link to="/present-tense">Sorat as a Lens</Link>.</>
          )}
        </p>
      </div>

      <div className="stat-row">
        <div className="stat"><div className="n">7</div><div className="l">{lang === 'it' ? 'sezioni, 30 voci in totale' : 'sections, 30 entries total'}</div></div>
        <div className="stat"><div className="n">60+</div><div className="l">{lang === 'it' ? 'fonti, citate pagina per pagina — vedi la bibliografia' : 'sources, cited page by page — see bibliography'}</div></div>
        <div className="stat"><div className="n">2</div><div className="l">{lang === 'it' ? 'livelli, mai mescolati: la dottrina di Steiner tenuta separata dalla ricezione successiva' : "tiers, never mixed: Steiner's own doctrine, kept apart from later reception and outside comparison"}</div></div>
        <div className="stat"><div className="n">4</div><div className="l">{lang === 'it' ? 'voci che applicano il modello direttamente a IA, attenzione e feed algoritmici' : 'entries applying the framework directly to AI, attention, and algorithmic feeds'}</div></div>
      </div>

      <Diagram />

      {GROUPS.map((g, gi) => (
        <div className="group" key={g.title.en}>
          <div className="group-head">
            <span className="idx">{String(gi + 1).padStart(2, '0')}</span>
            <h2>{g.title[lang]}</h2>
          </div>
          <div className="grid">
            {g.items.map(([to, t, d]) => (
              <Link className="entry" to={to} key={to}>
                <div className="t">{t[lang]}</div>
                <div className="d">{d[lang]}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}

    </Layout>
  )
}
