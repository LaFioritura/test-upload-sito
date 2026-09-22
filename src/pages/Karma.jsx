import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Karma() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />cosmologia</p>
      <h1>Karma e reincarnazione</h1>
      <article>
        <p>Dall'India, mediata dalla teosofia, Steiner riprende l'idea che l'Io attraversi più vite terrene, e la porta al centro della propria cosmologia. Il karma, per lui, non è destino cieco: è causa ed effetto morale, la stessa libertà de <em>La filosofia della libertà</em> distesa su un tempo più lungo di una singola biografia.</p>
        <h2>Perché una sola vita non basta</h2>
        <p>È questo il quadro che rende sensato parlare, come fa Steiner, di potenze che si muovono su ritmi di secoli — i 666 anni di Sorat, i 333 del loro contrappeso, epoche culturali lunghe più di duemila anni ciascuna. Una singola esistenza non basterebbe a sperimentarne l'intero arco. L'interlocutore reale di queste forze non è l'individuo di una vita sola, ma l'Io che si reincarna.</p>
        <p>Anche l'equilibrio fra Lucifero e Arimane, spiegava Steiner parlando di vita sociale, si capisce meglio così: solo riconoscendo che ognuno porta con sé un destino maturato nel tempo si può pensare una società che non riduca la persona a semplice funzione economica o politica.</p>
        <SeeAlso links={[['/costituzione', 'la costituzione quadripartita'], ['/soglia', 'il Guardiano della Soglia'], ['/triarticolazione', 'la triarticolazione sociale']]} />
        <Sources items={[
          "Rudolf Steiner, <em>La filosofia della libertà</em>, 1894.",
          "Rudolf Steiner, ciclo di conferenze raccolto come <em>Understanding Society</em>, sul karma come fondamento della vita sociale.",
        ]} />
      </article>
    </Layout>
  )
}
