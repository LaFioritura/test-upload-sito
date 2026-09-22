import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import { NetworkIcon } from '../components/Icons.jsx'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const ROWS = [
  {
    term: { en: 'Lucifer', it: 'Lucifero' },
    names: { en: 'Fantasy unmoored from any check; the self inflated past its actual size', it: 'La fantasia senza freni; il sé gonfiato oltre la sua misura reale' },
    now: {
      en: 'Curated identity and filtered self-presentation — the gap between a feed and a life, maintained on purpose',
      it: 'L\'identità curata e la presentazione filtrata di sé — la distanza fra un feed e una vita, mantenuta apposta',
    },
  },
  {
    term: { en: 'Ahriman', it: 'Arimane' },
    names: { en: 'Hardening into pure mechanism; a process stripped of anything that isn\'t measurable', it: 'L\'irrigidimento in puro meccanismo; un processo spogliato di tutto ciò che non è misurabile' },
    now: 'ai',
  },
  {
    term: { en: 'Sorat', it: 'Sorat' },
    names: { en: 'Not deviation but interruption — removing the possibility of choosing at all', it: 'Non deviazione ma interruzione — la rimozione stessa della possibilità di scegliere' },
    now: { en: 'Autoplay, infinite scroll, and notification design engineered specifically to eliminate the moment where a decision would otherwise occur', it: 'Autoplay, scroll infinito e notifiche progettate apposta per eliminare il momento in cui altrimenti si deciderebbe qualcosa' },
  },
  {
    term: { en: 'The ahrimanic double', it: 'Il doppio arimanico' },
    names: { en: 'A silent second self that runs the machinery you don\'t consciously operate', it: 'Un secondo sé silenzioso che fa girare la macchina che non azioni consapevolmente' },
    now: { en: 'The advertising profile and recommendation model that predicts your next click better than you could state your own preference', it: 'Il profilo pubblicitario e il modello di raccomandazione che prevede il tuo prossimo click meglio di quanto sapresti descrivere tu stesso la tua preferenza' },
  },
  {
    term: { en: 'The Guardian of the Threshold', it: 'Il Guardiano della Soglia' },
    names: { en: 'Confronting the full, composite image of your own accumulated imbalance', it: 'Confrontarsi con l\'immagine completa del proprio squilibrio accumulato' },
    now: { en: 'The "Screen Time" report — a secular, mostly ignored version of the same reckoning', it: 'Il report "Tempo di utilizzo" — una versione laica, per lo più ignorata, dello stesso redde rationem' },
  },
  {
    term: { en: 'Michael', it: 'Michele' },
    names: { en: 'Guiding free, unforced thinking against both hardening and fantasy', it: 'Guidare un pensiero libero e non forzato contro sia l\'irrigidimento sia la fantasia' },
    now: { en: 'Deliberate-friction design, digital sabbaths, and media-literacy education — the underfunded, less exciting side of this whole debate', it: 'Design a frizione deliberata, sabati digitali, educazione ai media — il lato meno finanziato e meno eccitante di tutto questo dibattito' },
  },
]

export default function PresentTense() {
  const [lang] = useLanguage()

  return (
    <Layout>
      <PageHead
        tag={lang === 'it' ? 'Leggere il presente' : 'Reading the Present'}
        tagColor="red"
        icon={NetworkIcon}
        title={lang === 'it' ? 'Sorat come lente' : 'Sorat as a Lens'}
        lede={lang === 'it'
          ? 'Una cosmologia è una curiosità finché non spiega qualcosa che già ti preoccupava.'
          : 'A cosmology is a curiosity until it explains something you were already worried about.'}
      />
      <article>
        {lang === 'it' ? (
          <>
            <p>
              Ogni voce prima di questa poneva una domanda storica: cosa ha detto davvero Steiner, e da
              dove viene. Questa ne pone una diversa, e lo dichiara apertamente: cosa succede se lo schema
              che ha descritto — una forza ostacolante che non devia il giudizio ma ne sostituisce il
              bisogno — è una forma abbastanza reale da ripresentarsi, vestita diversamente, in cose
              costruite un secolo dopo la sua morte.
            </p>
            <p>
              Ecco la versione semplice, senza arcangeli né gematria: l'umanità sta entrando in un periodo
              in cui la propria capacità di giudizio viene progressivamente ceduta a sistemi costruiti per
              trattenere l'attenzione, non per meritarsi la fiducia. Non è un'affermazione sui demoni. È
              un'affermazione sugli incentivi, sulle interfacce, e su cosa succede a un'abilità che nessuno
              è più costretto a esercitare.
            </p>

            <div className="thesis-block" style={{ margin: '32px 0' }}>
              <span className="tag yellow">la tesi</span>
              <p className="thesis-line">Il rischio non è mai stata una macchina capace di pensare. È stata una specie che ha smesso di averne bisogno.</p>
            </div>

            <h2>Cinque archetipi, cinque schermi</h2>
            <p>
              Nessuno degli accostamenti qui sotto sostiene che Steiner abbia previsto TikTok. Sostengono
              qualcosa di più modesto e, secondo questo quaderno, più difendibile: che la forma specifica
              di ciascuna potenza ostacolante — descritta un secolo fa in termini di corpi astrali ed
              epoche cosmiche — si sovrappone in modo abbastanza pulito a un meccanismo moderno specifico
              da far guadagnare al vecchio vocabolario il suo posto come strumento diagnostico, che tu
              creda o no alla cosmologia sottostante.
            </p>
            <table className="map-table">
              <thead>
                <tr><th>Vecchio termine</th><th>Cosa indica</th><th>Dove si vede oggi</th></tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={i}>
                    <td className="term">{r.term[lang]}</td>
                    <td>{r.names[lang]}</td>
                    <td>
                      {r.now === 'ai' ? (
                        <>Scoring algoritmico, metriche del lavoro a chiamata, e delega cognitiva all'IA generativa — vedi <Link to="/case-studies">casi di studio</Link></>
                      ) : r.now[lang]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              Due di queste righe fanno un lavoro vero altrove in questo quaderno — il legame di Arimane
              con la meccanizzazione è la dottrina più solidamente attestata delle tre potenze, e il doppio
              arimanico è una parte documentata delle conferenze di Steiner, non un'analogia inventata da
              questo quaderno. La riga su Sorat è la più speculativa delle sei, e viene presentata così di
              proposito: la voce su Sorat dichiara esplicitamente che chiamare "soratica" una tecnologia è
              un'estensione retorica, non un insegnamento che Steiner stesso ha lasciato.
            </p>

            <SeeAlso links={[['/hypothesis', 'l\'automazione riduce l\'autonomia?'], ['/case-studies', 'tre casi di studio'], ['/predictions', 'cosa dovrebbe succedere']]} />
          </>
        ) : (
          <>
            <p>
              Every entry before this one asked a historical question: what did Steiner actually say, and
              where does it come from. This one asks a different question, and says so openly: what happens if
              the pattern he described — a hindering force that doesn't deviate judgment but replaces the need
              for it — is a real enough shape that it shows up again, dressed differently, in things built a
              century after he died.
            </p>
            <p>
              Here's the plain version, stripped of archangels and gematria: humanity is entering a period in
              which its own capacity for judgment is being progressively handed off to systems built to hold
              attention rather than to earn trust. That's not a claim about demons. It's a claim about
              incentives, interfaces, and what happens to a skill nobody has to practice anymore.
            </p>

            <div className="thesis-block" style={{ margin: '32px 0' }}>
              <span className="tag yellow">the thesis</span>
              <p className="thesis-line">The risk was never a machine that could think. It was a species that stopped needing to.</p>
            </div>

            <h2>Five archetypes, five screens</h2>
            <p>
              None of the pairings below claim that Steiner predicted TikTok. They claim something more
              modest and, this notebook thinks, more defensible: that the specific shape of each hindering
              power — described a century ago in terms of astral bodies and cosmic epochs — maps cleanly
              enough onto a specific modern mechanism that the old vocabulary earns its keep as a diagnostic
              tool, whether or not you buy the cosmology underneath it.
            </p>
            <table className="map-table">
              <thead>
                <tr><th>Old term</th><th>What it names</th><th>Where it shows up now</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="term">Lucifer</td>
                  <td>Fantasy unmoored from any check; the self inflated past its actual size</td>
                  <td>Curated identity and filtered self-presentation — the gap between a feed and a life, maintained on purpose</td>
                </tr>
                <tr>
                  <td className="term">Ahriman</td>
                  <td>Hardening into pure mechanism; a process stripped of anything that isn't measurable</td>
                  <td>Algorithmic scoring, gig-work metrics, and cognitive offloading onto generative AI — see <Link to="/case-studies">case studies</Link></td>
                </tr>
                <tr>
                  <td className="term">Sorat</td>
                  <td>Not deviation but interruption — removing the possibility of choosing at all</td>
                  <td>Autoplay, infinite scroll, and notification design engineered specifically to eliminate the moment where a decision would otherwise occur</td>
                </tr>
                <tr>
                  <td className="term">The ahrimanic double</td>
                  <td>A silent second self that runs the machinery you don't consciously operate</td>
                  <td>The advertising profile and recommendation model that predicts your next click better than you could state your own preference</td>
                </tr>
                <tr>
                  <td className="term">The Guardian of the Threshold</td>
                  <td>Confronting the full, composite image of your own accumulated imbalance</td>
                  <td>The "Screen Time" report — a secular, mostly ignored version of the same reckoning</td>
                </tr>
                <tr>
                  <td className="term">Michael</td>
                  <td>Guiding free, unforced thinking against both hardening and fantasy</td>
                  <td>Deliberate-friction design, digital sabbaths, and media-literacy education — the underfunded, less exciting side of this whole debate</td>
                </tr>
              </tbody>
            </table>
            <p>
              Two of these rows do real work elsewhere in this notebook — Ahriman's link to mechanization is
              the most solidly attested doctrine of the three powers, and the ahrimanic double is a documented
              part of Steiner's own lectures, not an analogy this notebook invented. The Sorat row is the most
              speculative of the six, and it's presented that way on purpose: the entry on Sorat is explicit
              that calling a technology "Soratic" is a rhetorical extension, not a teaching Steiner himself
              left behind.
            </p>

            <SeeAlso links={[['/hypothesis', 'does automation reduce autonomy?'], ['/case-studies', 'three case studies'], ['/predictions', 'what would have to happen']]} />
          </>
        )}
      </article>
    </Layout>
  )
}
