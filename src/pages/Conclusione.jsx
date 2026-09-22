import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import { Link } from 'react-router-dom'

export default function Conclusione() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />chiusura</p>
      <h1>Conclusione: la libertà come compito</h1>
      <article>
        <p>Il centro filosofico dell'opera di Steiner non è una demonologia. È una teoria della libertà, enunciata già nel 1894 ne <em>La filosofia della libertà</em>: un'azione morale che non nasce da un comando esterno né da un istinto, ma da un pensiero intuitivo liberamente conquistato. Letti da questo centro, Lucifero, Arimane e persino Sorat smettono di essere ostacoli estranei al progetto: diventano la resistenza precisa contro cui si esercita la capacità di un atto libero e cosciente.</p>
        <blockquote>Senza la spinta a fantasticare oltre misura non ci sarebbe bisogno di conquistare il senso della realtà. Senza la spinta a irrigidirsi nella materia non ci sarebbe bisogno di conquistare il senso dello spirito. Senza la minaccia di un'interruzione totale non avrebbe senso parlare di un'epoca il cui compito è custodire la possibilità stessa che l'umanità continui a scegliere.</blockquote>
        <p>Dare un nome a queste potenze non serve a produrre inquietudine, ma a renderla lavorabile: a chiamare per nome resistenze che altrimenti resterebbero solo avvertite, mai comprese abbastanza per essere affrontate.</p>
        <SeeAlso links={[['/karma', 'karma e reincarnazione'], ['/triarticolazione', 'la triarticolazione sociale']]} />
        <p style={{ marginTop: 28 }}><Link to="/">← torna al portale</Link></p>
      </article>
    </Layout>
  )
}
