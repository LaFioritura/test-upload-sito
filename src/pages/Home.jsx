import Layout from '../components/Layout.jsx'
import Diagram from '../components/Diagram.jsx'
import { Link } from 'react-router-dom'

const GROUPS = [
  {
    title: 'Vita e metodo',
    items: [
      ['/antroposofia', 'Che cos\'è l\'antroposofia', 'Chi era Steiner e cosa intendeva per scienza dello spirito.'],
      ['/metodo-goethiano', 'Il metodo goethiano', 'Da curatore di Goethe a fondatore di un metodo di conoscenza.'],
      ['/teosofia-scissione', 'Teosofia e la scissione', 'Blavatsky, Krishnamurti, e perché Steiner se ne andò.'],
      ['/cronologia', 'Cronologia', 'Ottant\'anni di date, dottrinali e biografiche, sulla stessa linea.'],
    ],
  },
  {
    title: 'Cosmologia',
    items: [
      ['/costituzione', 'La costituzione quadripartita', 'Fisico, eterico, astrale, Io — e dove si annidano le due potenze.'],
      ['/epoche', 'Le epoche della coscienza', 'Perché proprio la nostra epoca è la più esposta.'],
      ['/karma', 'Karma e reincarnazione', 'Ritmi di secoli hanno bisogno di più di una vita.'],
      ['/soglia', 'Il Guardiano della Soglia', 'L\'incontro con la somma dei propri squilibri.'],
      ['/cristo-golgota', 'Il Cristo e il Mistero del Golgota', 'Il centro da cui tutto il resto prende senso.'],
    ],
  },
  {
    title: 'Le tre potenze',
    items: [
      ['/triplicita', 'Il mistero della triplicità', 'La bilancia, e il Rappresentante dell\'Umanità.'],
      ['/sorat', 'Sorat', 'Il demone del sole, 666, il ritmo dei secoli.'],
      ['/michele', 'Michele e l\'intelligenza cosmica', 'Un\'intelligenza caduta nelle anime, pronta a essere catturata.'],
      ['/doppio', 'Il doppio arimanico e le macchine', 'Dal sistema nervoso alla rete.'],
      ['/fondazione-meditazione', 'La Pietra di Fondazione', 'L\'equilibrio reso pratica, non solo dottrina.'],
    ],
  },
  {
    title: 'Le arti e la pratica',
    items: [
      ['/pedagogia-waldorf', 'La pedagogia Waldorf', 'Da una fabbrica di sigarette a una rete scolastica mondiale.'],
      ['/agricoltura-biodinamica', 'L\'agricoltura biodinamica', 'Corna di vacca, Demeter, e il vino naturale.'],
      ['/medicina-antroposofica', 'La medicina antroposofica', 'Ita Wegman, Weleda, un ampliamento non un\'alternativa.'],
      ['/arti-architettura', 'Euritmia e architettura', 'Il canto visibile, e i due Goetheanum.'],
    ],
  },
  {
    title: 'Vita sociale',
    items: [
      ['/triarticolazione', 'La triarticolazione sociale', 'Libertà, uguaglianza, fratellanza — in tre sfere diverse.'],
    ],
  },
  {
    title: 'Ricezione e confronti',
    items: [
      ['/ricezione-critica', 'Ricezione critica', 'Quello che gli storici indipendenti contestano, e come si risponde.'],
      ['/confronti', 'Confronti e teorie successive', 'Arconti, Lovecraft, tecnologia — segnalati come esterni.'],
      ['/traiettorie-curiose', 'Traiettorie curiose', 'Kandinsky, Hilma af Klint, Olivetti, il vino biodinamico.'],
    ],
  },
  {
    title: 'Riferimenti',
    items: [
      ['/bibliografia', 'Bibliografia generale', 'Tutte le fonti del portale, in un solo indice.'],
      ['/conclusione', 'Conclusione: la libertà come compito', 'Dove tutto torna al centro filosofico di Steiner.'],
    ],
  },
]

export default function Home() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />soratlas</p>
      <h1>Un portale sull'antroposofia di Rudolf Steiner</h1>
      <p className="home-lede">
        Non solo Lucifero, Arimane e Sorat: la vita di Steiner, il suo metodo, la cosmologia dell'evoluzione
        umana, le arti applicate — pedagogia, agricoltura, medicina — la vita sociale, e infine la ricezione
        critica e i confronti con altre tradizioni. Ventiquattro pagine, ciascuna con le proprie fonti.
      </p>

      <Diagram />

      {GROUPS.map((g) => (
        <div className="group" key={g.title}>
          <h2>{g.title}</h2>
          <div className="grid">
            {g.items.map(([to, t, d]) => (
              <Link className="entry" to={to} key={to}>
                <div className="t">{t}</div>
                <div className="d">{d}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <p className="disclaimer">
        Soratlas ricostruisce una dottrina esoterica a partire dalle fonti che dichiara, pagina per pagina.
        Non valuta in modo indipendente la sua fondatezza storica, né afferma l'esistenza reale delle entità
        descritte. È pensato per essere esteso — vedi il README nel repository.
      </p>
    </Layout>
  )
}
