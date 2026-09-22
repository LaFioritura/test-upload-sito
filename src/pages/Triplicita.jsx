import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Triplicita() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />le tre potenze</p>
      <h1>Il mistero della triplicità e il Rappresentante dell'Umanità</h1>
      <article>
        <p>Nel ciclo <em>La missione di Michele</em> (1919) Steiner introduce quello che chiama il mistero della triplicità: il mondo si capisce solo a tre, con il luciferico da una parte, l'arimanico dall'altra, e l'uomo nel mezzo come terzo termine, in equilibrio. Le due potenze sono i due piatti di una bilancia — una bilancia che Steiner disegnò lui stesso, davanti al pubblico, per rendere visibile l'idea — e l'impulso del Cristo, entità solare, è la condizione stessa di quell'equilibrio: non un terzo peso da aggiungere agli altri due.</p>
        <p>Il lato più esteriore delle due forze, dice Steiner, lo si riconosce così: luciferiche sono le spinte che avvertiamo quando ci abbandoniamo senza freno alla fantasia o al fanatismo; arimaniche, il loro opposto speculare — irrigidimento, essiccazione, la tentazione di chiudersi nella sola materia. Ed è nell'interesse di entrambe che questo mistero resti nascosto: solo riconoscendolo l'umanità può prendere posizione nel punto di equilibrio, invece di subire le due forze come cieche.</p>
        <h2>Il Rappresentante dell'Umanità</h2>
        <p>La stessa idea diventa scultura nel <em>Rappresentante dell'Umanità</em>: nove metri di legno d'olmo, realizzati fra il 1914 e il 1922 insieme alla scultrice inglese Edith Maryon per il primo Goetheanum. Al centro il Cristo, un braccio alzato e uno abbassato; sopra di lui Lucifero precipita da una parete di roccia; sotto, in una grotta, Arimane sta accovacciato. Steiner voleva che il gruppo occupasse il cuore esatto dell'edificio — la sua chiave di volta, non solo architettonica. Il modello, ancora incompiuto in uno studio esterno, si salvò dall'incendio che distrusse il Goetheanum ligneo nella notte di San Silvestro del 1922; oggi la scultura finita si trova nel secondo Goetheanum, in cemento.</p>
        <h2>Due date di incarnazione</h2>
        <p>In queste stesse conferenze, e in altre collegate, Steiner colloca l'incarnazione terrena di Lucifero nel terzo millennio prima del Cristo, e descrive un'incarnazione di Arimane in Occidente come imminente, preparata — dice — anche da idee apparentemente innocue, come quella per cui la sola sicurezza economica basterebbe a una vita pubblica sana. È da questa seconda indicazione, incrociata con il fatto che il 1998 sia il terzo multiplo di 666, che alcuni interpreti successivi hanno proposto quell'anno come data simbolica: un'estensione loro, non un'affermazione che compare in questi termini nei testi di Steiner.</p>
        <SeeAlso links={[['/sorat', 'Sorat'], ['/michele', 'Michele e l\'intelligenza cosmica'], ['/triarticolazione', 'la triarticolazione sociale']]} />
        <Sources items={[
          "Rudolf Steiner, ciclo di conferenze <em>La missione di Michele</em>, Dornach, 1919.",
          "Stefano Arcella, <em>Il mistero della triplicità e il \"triplice Mithra\"</em>.",
          "<em>The Representative of Humanity</em>, descrizione del gruppo scultoreo, 1914–1922; cfr. Peter Selg, <em>The Figure of Christ</em>.",
          "Rudolf Steiner, ciclo di conferenze raccolto come <em>Understanding Society</em> / <em>The Influence of Lucifer and Ahriman</em>.",
        ]} />
      </article>
    </Layout>
  )
}
