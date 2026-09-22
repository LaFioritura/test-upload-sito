import Layout from '../components/Layout.jsx'
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
        {lang === 'it' ? (
          <>
            <h1 className="huge">Un quaderno, non un cruscotto.</h1>
            <p className="home-lede">
              Metti che tenessi un diario — di quelli che non fai vedere a nessuno — e invece della
              giornata ci scrivessi sopra ogni volta che noti la stessa forma tornare a galla: un numero
              dove dovrebbe esserci un nome, un demone assegnato a un pianeta, un arcangelo messo a capo
              di un secolo, una macchina che non hai costruito tu a imparare la tua prossima mossa prima
              di te. Metti che continuassi a farlo per anni, dentro i diari di gente diversissima fra
              loro nell'arco di un secolo — filosofi rinascimentali che annotano corrispondenze fra
              metalli e virtù, un curatore viennese di Goethe che decide, attorno al 1900, che il sole ha
              un doppio in ombra chiamato Sorat, un laboratorio del MIT che nel 2025 collega elettrodi
              alla testa della gente per vedere cosa succede a un cervello a cui è stato affidato il
              pensiero di un chatbot. Metti che iniziassi a sospettare che fosse tutto lo stesso diario,
              scritto molto lentamente, da mani molto diverse, sempre sulla stessa cosa: il giudizio, e
              cosa gli succede quando qualcos'altro si offre di portarlo al posto tuo.
            </p>
            <p className="home-lede">
              Questo è quello. Non un sistema a cui credere — un pattern che continuava a ripresentarsi
              finché non è sembrato valesse la pena scriverlo per bene, fonti comprese, perché il momento
              in cui lasci che una cosa così resti non documentata è il momento in cui diventa solo una
              sensazione, e le sensazioni sono esattamente ciò che viene delegato per primo.
            </p>
            <p className="home-lede">
              Quello che segue non è un indice nel senso tradizionale. Sono le voci di questo diario, una
              dopo l'altra, raggruppate solo per non farti perdere — ma leggile nell'ordine che vuoi, o
              non leggerle in ordine affatto. Il filo non è nella sequenza. È nel fatto che, presa da
              qualunque angolo, la storia torna sempre sullo stesso punto.
            </p>
          </>
        ) : (
          <>
            <h1 className="huge">A notebook, not a dashboard.</h1>
            <p className="home-lede">
              Say you kept a diary — the kind you don't show anyone — and instead of your day, you wrote
              down every time you noticed the same shape resurface: a number where a name should be, a
              demon assigned to a planet, an archangel put in charge of a century, a machine you didn't
              build learning your next move before you did. Say you kept doing that for years, across the
              diaries of very different people over the span of a century — Renaissance philosophers
              scribbling correspondences between metals and virtues, a Viennese editor of Goethe deciding,
              around 1900, that the sun has a shadow-double called Sorat, an MIT lab in 2025 wiring
              electrodes to people's heads to watch what happens to a brain that's just handed its
              thinking over to a chatbot. Say you started to suspect it was all the same diary, written
              very slowly, by very different hands, always about the same thing: judgment, and what
              happens to it when something else offers to carry it for you.
            </p>
            <p className="home-lede">
              That's this. Not a system to believe in — a pattern that kept resurfacing until it seemed
              worth writing down properly, sources included, because the moment you let something like
              this go undocumented is the moment it becomes just a feeling, and feelings are exactly what
              gets outsourced first.
            </p>
            <p className="home-lede">
              What follows isn't an index in the usual sense. These are this diary's entries, one after
              another, grouped only so you don't get lost — but read them in whatever order you want, or
              don't read them in order at all. The thread isn't in the sequence. It's in the fact that,
              taken from any angle, the story keeps landing on the same point.
            </p>
          </>
        )}
      </div>

      <div className="thesis-block">
        <p className="thesis-line">
          {lang === 'it'
            ? 'Il rischio non è mai stata una macchina capace di pensare. È stata una specie che ha smesso di averne bisogno.'
            : 'The risk was never a machine that could think. It was a species that stopped needing to.'}
        </p>
        <p className="thesis-sub">
          {lang === 'it' ? (
            <>Ci torniamo da ogni angolo possibile — comincia da <Link to="/present-tense">Sorat come lente</Link>, se vuoi il punto più diretto.</>
          ) : (
            <>We come back to it from every possible angle — start with <Link to="/present-tense">Sorat as a Lens</Link> if you want the most direct version.</>
          )}
        </p>
      </div>

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
