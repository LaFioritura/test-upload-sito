import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Soglia() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />cosmologia</p>
      <h1>Il Guardiano della Soglia</h1>
      <article>
        <p>In <em>L'iniziazione</em> (1904-05) Steiner descrive un'esperienza che, prima o poi, attende chiunque intraprenda consapevolmente un percorso interiore: l'incontro con il Guardiano della Soglia, una figura che mostra l'immagine complessiva dei propri squilibri accumulati — il karma non ancora risolto, per così dire, messo tutto insieme davanti agli occhi — prima di lasciar passare verso una percezione più diretta del mondo spirituale.</p>
        <h2>Due guardiani</h2>
        <p>Steiner distingue un Guardiano minore, immagine dei propri limiti individuali, da un Guardiano maggiore, che riguarda il destino collettivo dell'umanità e il suo rapporto con l'impulso del Cristo. Il primo incontro è propedeutico, personale. Il secondo tocca il senso stesso dell'evoluzione umana nel suo insieme.</p>
        <p>C'è una parentela, nel linguaggio antroposofico, fra questa figura e il doppio di natura arimanica descritto altrove in questo portale: entrambi sono immagini di un residuo che l'Io deve guardare in faccia invece di lasciarlo agire nell'ombra. Cambia l'intenzione: il Guardiano mostra per rendere possibile una scelta libera; il doppio arimanico, al contrario, lavora meglio quanto più resta invisibile.</p>
        <SeeAlso links={[['/karma', 'karma e reincarnazione'], ['/doppio', 'il doppio arimanico e le macchine']]} />
        <Sources items={["Rudolf Steiner, <em>L'iniziazione. Come si conseguono conoscenze dei mondi superiori?</em>, 1904–1905."]} />
      </article>
    </Layout>
  )
}
