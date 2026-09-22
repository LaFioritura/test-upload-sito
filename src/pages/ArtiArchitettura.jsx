import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function ArtiArchitettura() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />le arti e la pratica</p>
      <h1>Euritmia e architettura</h1>
      <article>
        <p>L'euritmia nasce nel 1912, sviluppata da Steiner insieme a Lory Smits e in seguito a Marie von Sivers: un'arte del movimento che vuole rendere visibile nel gesto ciò che accade nel linguaggio e nella musica — "canto visibile", "parola visibile", nella definizione dello stesso Steiner. A ogni suono corrisponde un gesto specifico, applicando al corpo la stessa idea di forze formative invisibili che attraversa l'intera cosmologia qui ricostruita.</p>
        <h2>Il Goetheanum</h2>
        <p>Il primo Goetheanum, inaugurato nel 1920 a Dornach e distrutto da un incendio la notte di San Silvestro del 1922, era in legno, con una doppia cupola, progettato dallo stesso Steiner secondo un principio che rifiuta l'angolo retto per forme organiche e curve — pensate, come nel Rappresentante dell'Umanità che ne occupava il centro, per esprimere architettonicamente lo stesso equilibrio dinamico fra forze polari. Il secondo Goetheanum, in cemento armato, ancora progettato da Steiner ma completato dopo la sua morte, è oggi considerato uno dei primi grandi esempi di architettura espressionista organica, ed è tuttora sede della Società Antroposofica Universale.</p>
        <SeeAlso links={[['/triplicita', 'il mistero della triplicità'], ['/fondazione-meditazione', 'la Pietra di Fondazione'], ['/traiettorie-curiose', 'traiettorie curiose']]} />
        <Sources items={[
          "Cronologia dello sviluppo dell'euritmia, dal 1912.",
          "Materiale storico e architettonico sul primo e sul secondo Goetheanum, Dornach.",
        ]} />
      </article>
    </Layout>
  )
}
