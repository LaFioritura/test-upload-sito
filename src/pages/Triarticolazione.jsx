import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Triarticolazione() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />vita sociale</p>
      <h1>La triarticolazione sociale</h1>
      <article>
        <p>Nel 1917, a guerra ancora in corso, Steiner presenta ad alcune autorità austriache e tedesche un memorandum di riorganizzazione sociale che chiama triarticolazione dell'organismo sociale, poi sviluppato nel libro <em>I punti essenziali della questione sociale</em> (1919). La tesi: la vita sociale va pensata come tre sfere autonome, oggi confuse fra loro proprio a causa dello squilibrio fra Lucifero e Arimane descritto altrove in questo portale.</p>
        <h2>Tre sfere, tre ideali</h2>
        <p>Steiner assegna i tre ideali della rivoluzione francese a tre ambiti distinti, e sostiene che ciascuno funziona solo nel proprio ambito — diventa distruttivo se esteso agli altri due. La libertà appartiene alla vita culturale e spirituale: istruzione, scienza, arte, religione. L'uguaglianza appartiene alla vita giuridico-politica, cioè ai diritti di ogni cittadino davanti alla legge. La fratellanza appartiene alla vita economica, dove la cooperazione conta più della competizione o del calcolo individuale.</p>
        <p>Un'economia che pretende piena "libertà" di mercato senza vincoli di fratellanza scivola, in questo schema, verso l'unilateralità arimanica. Una vita culturale sottoposta a uguaglianza imposta dallo stato scivola nella stessa direzione. Una vita giuridica in cui i diritti dipendono dal censo, verso lo sbilanciamento opposto. La triarticolazione è, in fondo, l'applicazione sociale del mistero della triplicità: non cancellare le due potenze, ma impedire che ciascuna invada il territorio dell'altra.</p>
        <h2>Un caso italiano: Adriano Olivetti</h2>
        <p>L'imprenditore Adriano Olivetti, che conosceva direttamente l'opera di Steiner, costruì parte del proprio pensiero sulla gestione d'impresa e sull'urbanistica del canavese proprio a partire da questi principi — un caso raro, e ben documentato, di dottrina esoterica tradotta in politica industriale reale.</p>
        <SeeAlso links={[['/karma', 'karma e reincarnazione'], ['/triplicita', 'il mistero della triplicità'], ['/ricezione-critica', 'ricezione critica']]} />
        <Sources items={[
          "Rudolf Steiner, <em>I punti essenziali della questione sociale</em> (<em>Towards Social Renewal</em>), 1919.",
          "Rudolf Steiner, ciclo di conferenze raccolto come <em>Understanding Society</em>, Dornach, 1918–1919.",
          "Antonio Benfatto, <em>Triarticolazione sociale. Il pensiero sociale di Rudolf Steiner nella pratica di Adriano Olivetti</em>, Università degli Studi di Padova, 2023–2024.",
        ]} />
      </article>
    </Layout>
  )
}
